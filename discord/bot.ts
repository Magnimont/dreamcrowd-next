import dotenv from 'dotenv'
import fs from 'fs'

// Load environment variables first
const envPath = fs.existsSync('.env.local') ? '.env.local' : '.env'
dotenv.config({ path: envPath })

// Then import other dependencies
import { Client, Events, GatewayIntentBits } from 'discord.js'
import crypto from 'crypto'
import { redis } from '../lib/redis'
import { Resend } from 'resend'

// Validate environment variables
const requiredEnvVars = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_BOT_URL,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
}

// Check all required environment variables
Object.entries(requiredEnvVars).forEach(([name, value]) => {
  if (!value) {
    throw new Error(`${name} is not configured`)
  }
})

const resend = new Resend(process.env.RESEND_API_KEY);
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildIntegrations
  ]
})



client.once(Events.ClientReady, (c) => {
  console.log(`Discord bot is ready! Logged in as ${c.user.tag}`)
})

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  if (interaction.commandName === 'sendnewsletter') {
    // Defer the reply since this might take a while
    await interaction.deferReply()

    const head = interaction.options.getString('head')
    const content = interaction.options.getString('content', true)

    try {
      // Get subscribers from Redis
      const subscribers = await redis.hgetall('newsletter_subscribers')

      if (!subscribers) {
        await interaction.editReply('No active subscribers found.')
        return
      }

      const emails = Object.entries(subscribers)
        .filter(([_, data]) => {
          // Handle both string and object data formats
          const subscriberData = typeof data === 'string' ? JSON.parse(data) : data
          return subscriberData.subscribed
        })
        .map(([email]) => email)

      if (emails.length === 0) {
        await interaction.editReply('No active subscribers found.')
        return
      }

      let successCount = 0
      let failureCount = 0

      // Process emails in batches to avoid rate limits
      const BATCH_SIZE = 50
      const DELAY_BETWEEN_BATCHES = 1000 // 1 second

      for (let i = 0; i < emails.length; i += BATCH_SIZE) {
        const batch = emails.slice(i, i + BATCH_SIZE)
        
        // Update progress
        await interaction.editReply(
          `Sending newsletters... ${i}/${emails.length} processed. ` +
          `(${successCount} successful, ${failureCount} failed)`
        )

        // Process each email in the current batch
        await Promise.all(batch.map(async (email) => {
          try {
            const subscriberData = typeof subscribers[email] === 'string' 
              ? JSON.parse(subscribers[email] as string) 
              : subscribers[email];
              
                      const unsubscribeToken = crypto
                        .createHash('sha256')
                        .update(`${email}${process.env.UNSUBSCRIBE_SECRET}`)
                        .digest('hex');
            const unsubscribeUrl = `${process.env.NEXT_PUBLIC_APP_URL}/unsubscribe?email=${encodeURIComponent(email)}&token=${unsubscribeToken}`;

            await resend.emails.send({
              from: 'no-reply@jariullah.me',  // Using your configured FromEmail
              to: email,
              subject: head || 'Newsletter Update',
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <header style="background: #1a237e; color: white; padding: 20px; text-align: center;">
                    <h1>${head || 'Newsletter Update'}</h1>
                  </header>
                  
                  <main style="padding: 20px;">
                    ${content}
                  </main>
                  
                  <footer style="background: #f5f5f5; padding: 20px; text-align: center; margin-top: 20px;">
                    <p>You received this email because you subscribed to our newsletter.</p>
                    <p>To unsubscribe, <a href="${unsubscribeUrl}">click here</a></p>
                  </footer>
                </div>
              `,
            });
            successCount++;
          } catch (error) {
            console.error(`Failed to send to ${email}:`, error);
            failureCount++;
          }
        }))

        // Add delay between batches
        if (i + BATCH_SIZE < emails.length) {
          await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_BATCHES))
        }
      }

      // Final status update
      await interaction.editReply(
        `Newsletter sending completed!\n` +
        `Total subscribers: ${emails.length}\n` +
        `Successful: ${successCount}\n` +
        `Failed: ${failureCount}`
      )
    } catch (error) {
      console.error('Newsletter sending failed:', error)
      await interaction.editReply('Failed to send newsletter. Check the logs for more details.')
    }
  }
})

// Error handling for the Discord client
client.on('error', (error) => {
  console.error('Discord client error:', error)
})

// Start the client
client.login(process.env.DISCORD_BOT_TOKEN).catch(error => {
  console.error('Failed to login to Discord:', error)
  process.exit(1)
})