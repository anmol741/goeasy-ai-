import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const CRM_WEBHOOK_URL =
  "https://myappzbackend.com/functions/v1/workflow-webhook/g6ckzkvjuqhc8ymv";

export async function POST(request: NextRequest) {
  const secret = process.env.CRM_WEBHOOK_SECRET;

  if (!secret) {
    return NextResponse.json(
      { error: "CRM_WEBHOOK_SECRET is not configured." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const payload = JSON.stringify(body);
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const upstreamResponse = await fetch(CRM_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Webhook-Signature": `sha256=${signature}`,
    },
    body: payload,
  });

  const responseBody = await upstreamResponse.text();

  return new NextResponse(responseBody, {
    status: upstreamResponse.status,
    headers: {
      "Content-Type":
        upstreamResponse.headers.get("Content-Type") ?? "application/json",
    },
  });
}
