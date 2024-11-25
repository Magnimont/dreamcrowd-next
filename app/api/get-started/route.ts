import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { message: "Webhook URL is not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { message: `Discord API Error: ${error}` },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: "Webhook sent successfully" });
  } catch (error) {
    console.error("Error sending webhook:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
