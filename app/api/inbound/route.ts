import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  if (process.env.SLACK_WEBHOOK_URL) {
    await fetch(process.env.SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `New DB landing page lead: ${payload.name} at ${payload.brand} (${payload.monthlySpend})`
      })
    });
  }

  return NextResponse.json({ ok: true });
}
