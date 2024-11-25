import { redis } from '@/lib/redis'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import crypto from 'crypto'

const emailSchema = z.object({
  email: z.string().email(),
})

interface Subscriber {
  subscribed: boolean;
  token: string;
  subscribedAt: string;
}

function generateUnsubscribeToken(email: string) {
  return crypto
    .createHash('sha256')
    .update(`${email}${process.env.UNSUBSCRIBE_SECRET}`)
    .digest('hex')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = emailSchema.parse(body)
    
    const unsubscribeToken = generateUnsubscribeToken(email)
    
    await redis.hset('newsletter_subscribers', {
      [email]: {
        subscribed: true,
        token: unsubscribeToken,
        subscribedAt: new Date().toISOString(),
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')
    const token = searchParams.get('token')

    if (!email || !token) {
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      )
    }

    const subscriber = await redis.hget<Subscriber>('newsletter_subscribers', email)
    
    if (!subscriber || subscriber.token !== token) {
      return NextResponse.json(
        { error: 'Invalid unsubscribe link' },
        { status: 400 }
      )
    }

    await redis.hdel('newsletter_subscribers', email)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}