"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  businessTypes,
  monthlyLeadOptions,
  serviceInterests,
} from "@/lib/site-data";
import {
  bookingLinkProps,
  phoneHref,
  trackPixel,
  whatsappLinkProps,
} from "@/lib/site-config";

const WEBHOOK_URL = "/api/lead-webhook";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ERROR = "Please enter a valid 10-digit phone number.";
// Sentinel error: rendered as "Something went wrong" with call/WhatsApp links.
const SEND_FAILED = "send-failed";
const inputClass =
  "w-full min-w-0 rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-sm text-cream outline-none focus:border-gold-500";
const labelClass = "text-sm font-medium text-cream/80";

/**
 * Normalizes a North American number to E.164 (+16045551234), or returns null
 * if it isn't a valid 10-digit NANP number.
 */
function toE164(raw: string): string | null {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 10) digits = `1${digits}`;
  // Area code and exchange can't start with 0 or 1.
  return /^1[2-9]\d{2}[2-9]\d{6}$/.test(digits) ? `+${digits}` : null;
}

type ContactFormProps = {
  /** Pre-fills the message field, e.g. with the plan the visitor clicked. */
  initialMessage?: string;
  className?: string;
};

function RequiredMark() {
  return <span className="text-gold-500">*</span>;
}

export default function ContactForm({
  initialMessage = "",
  className = "",
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [serviceInterest, setServiceInterest] = useState("");
  const [monthlyLeads, setMonthlyLeads] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setBusinessType("");
    setServiceInterest("");
    setMonthlyLeads("");
    setMessage("");
    setConsent(false);
    setWebsite("");
  }

  function fail(msg: string) {
    setStatus("error");
    setError(msg);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const e164 = toE164(phone);
    setPhoneError(phone.trim() && !e164 ? PHONE_ERROR : null);

    if (!name.trim() || !email.trim() || !phone.trim()) {
      return fail("Please fill in your name, email, and phone number.");
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      return fail("Please enter a valid email address.");
    }
    if (!e164) {
      setStatus("idle");
      return;
    }
    if (!businessType || !serviceInterest) {
      return fail(
        "Please choose your business type and what you need most."
      );
    }
    if (!consent) {
      return fail("Please tick the box to agree to be contacted.");
    }

    setStatus("submitting");

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: e164,
          business_type: businessType,
          service_interest: serviceInterest,
          monthly_leads: monthlyLeads,
          message: message.trim(),
          consent: "true",
          website,
        }),
      });

      if (!res.ok) {
        // Only surface validation messages (4xx) — never raw server errors.
        const data: { error?: unknown } = await res.json().catch(() => ({}));
        return fail(
          res.status === 400 && typeof data.error === "string"
            ? data.error
            : SEND_FAILED
        );
      }

      // Lead fires only after the webhook POST succeeds. Skip it when the
      // honeypot is filled — the API fakes success for bots.
      if (!website) trackPixel("Lead", { content_name: businessType });
      resetForm();
      setStatus("success");
    } catch {
      fail(SEND_FAILED);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      noValidate
      className={`relative flex flex-col gap-5 rounded-xl border border-white/10 bg-navy-950 p-6 sm:p-8 ${className}`}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Name <RequiredMark />
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Email <RequiredMark />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Phone <RequiredMark />
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(604) 555-1234"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (phoneError) setPhoneError(null);
            }}
            onBlur={() =>
              setPhoneError(phone.trim() && !toE164(phone) ? PHONE_ERROR : null)
            }
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? "phone-error" : undefined}
            className={`${inputClass} ${phoneError ? "border-amber-500" : ""}`}
          />
          {phoneError && (
            <p id="phone-error" role="alert" className="text-xs text-amber-500">
              {phoneError}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="businessType" className={labelClass}>
            Business Type <RequiredMark />
          </label>
          <select
            id="businessType"
            name="business_type"
            required
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className={inputClass}
          >
            <option value="">Select one</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="serviceInterest" className={labelClass}>
            What do you need most? <RequiredMark />
          </label>
          <select
            id="serviceInterest"
            name="service_interest"
            required
            value={serviceInterest}
            onChange={(e) => setServiceInterest(e.target.value)}
            className={inputClass}
          >
            <option value="">Select one</option>
            {serviceInterests.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="monthlyLeads" className={labelClass}>
            Monthly leads/calls
          </label>
          <select
            id="monthlyLeads"
            name="monthly_leads"
            value={monthlyLeads}
            onChange={(e) => setMonthlyLeads(e.target.value)}
            className={inputClass}
          >
            <option value="">Select one</option>
            {monthlyLeadOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-sm text-cream outline-none focus:border-gold-500"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-cream/80">
        <input
          type="checkbox"
          name="consent"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-gold-500"
        />
        <span>
          I agree to be contacted by GoEasyAI by phone (including an AI
          assistant), WhatsApp, and email about my enquiry. <RequiredMark />
        </span>
      </label>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {status === "error" && error && (
        <p role="alert" className="text-sm text-amber-500">
          {error === SEND_FAILED ? (
            <>
              Something went wrong. Please{" "}
              <a href={phoneHref} className="underline hover:text-gold-400">
                call
              </a>{" "}
              or{" "}
              <a
                {...whatsappLinkProps}
                className="underline hover:text-gold-400"
              >
                WhatsApp
              </a>{" "}
              us.
            </>
          ) : (
            error
          )}
        </p>
      )}

      {status === "success" && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-lg border border-gold-500/30 bg-gold-500/10 p-4 text-sm text-cream"
        >
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-500" />
          <p>
            Thanks! Maya from GoEasyAI will call you in about a minute. Prefer
            to pick a time?{" "}
            <a
              {...bookingLinkProps}
              className="font-semibold text-gold-500 hover:text-gold-400"
            >
              Book a 30-min strategy call →
            </a>
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 rounded-lg bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
}
