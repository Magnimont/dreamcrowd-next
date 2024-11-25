import { REST, Routes, SlashCommandBuilder } from 'discord.js'
import dotenv from 'dotenv'
import fs from 'fs'

const envPath = fs.existsSync('.env.local') ? '.env.local' : '.env'
dotenv.config({ path: envPath })
if (!process.env.DISCORD_BOT_TOKEN) {
  throw new Error('DISCORD_BOT_TOKEN is not configured')
}

const commands = [
  new SlashCommandBuilder()
    .setName('sendnewsletter')
    .setDescription('Send a newsletter to all subscribers')
    .addStringOption(option =>
      option
        .setName('content')
        .setDescription('Newsletter content')
        .setRequired(true))
    .addStringOption(option =>
      option
        .setName('head')
        .setDescription('Newsletter header (optional)')
        .setRequired(false)),
]


async function deployCommands() {
  const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN!)

  try {
    console.log('Started refreshing application (/) commands.')

    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID!),
      { body: commands },
    )

    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error)
  }
}

deployCommands()
