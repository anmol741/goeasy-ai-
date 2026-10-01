import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const UPSTREAM_TIMEOUT_MS = 10_000;
// CRM_WEBHOOK_URL overrides this (e.g. for a staging CRM).
const DEFAULT_WEBHOOK_URL =
  "https://myappzbackend.com/functions/v1/workflow-webhook/g6ckzkvjuqhc8ymv";
const E164_NANP = /^\+1[2-9]\d{2}[2-9]\d{6}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FRIENDLY_ERROR =
  "Sorry, we couldn't send your message right now. Please try again in a moment, or email or call us directly.";

// Keys must match the CRM field mapping exactly.
type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  business_type: string;
  service_interest: string;
  monthly_leads: string;
  message: string;
  // Sent as the string "true" so the CRM text field stores it.
  consent: "true";
};

function field(body: Record<string, unknown>, key: string, maxLength = 500) {
  const value = body[key];
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Body is not a JSON object");
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field. Pretend success so
  // bots don't learn they were filtered, but don't forward anything.
  if (field(body, "website")) {
    return NextResponse.json({ ok: true });
  }

  const lead: LeadPayload = {
    name: field(body, "name", 200),
    email: field(body, "email", 320),
    phone: field(body, "phone", 50),
    business_type: field(body, "business_type", 100),
    service_interest: field(body, "service_interest", 100),
    monthly_leads: field(body, "monthly_leads", 50),
    message: field(body, "message", 5000),
    consent: "true",
  };

  const fieldErrors: Partial<Record<keyof LeadPayload, string>> = {};
  if (!lead.name) fieldErrors.name = "Please enter your name.";
  if (!lead.email) fieldErrors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(lead.email))
    fieldErrors.email = "Please enter a valid email address.";
  if (!lead.phone) fieldErrors.phone = "Please enter your phone number.";
  else if (!E164_NANP.test(lead.phone))
    fieldErrors.phone = "Please enter a valid 10-digit phone number.";
  if (!lead.business_type)
    fieldErrors.business_type = "Please choose your business type.";
  if (!lead.service_interest)
    fieldErrors.service_interest = "Please choose what you need most.";
  if (field(body, "consent") !== "true")
    fieldErrors.consent = "Please tick the box to agree to be contacted.";

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { error: Object.values(fieldErrors)[0], fieldErrors },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.CRM_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

  const payload = JSON.stringify(lead);
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Optional: sign the payload when a shared secret is configured.
  const secret = process.env.CRM_WEBHOOK_SECRET;
  if (secret) {
    const signature = crypto
      .createHmac("sha256", secret)
      .update(payload)
      .digest("hex");
    headers["X-Webhook-Signature"] = `sha256=${signature}`;
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: payload,
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      console.error(
        `[lead-webhook] CRM webhook responded with ${upstream.status}:`,
        detail.slice(0, 1000)
      );
      return NextResponse.json({ error: FRIENDLY_ERROR }, { status: 502 });
    }
  } catch (err) {
    console.error("[lead-webhook] Failed to reach CRM webhook:", err);
    return NextResponse.json({ error: FRIENDLY_ERROR }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
