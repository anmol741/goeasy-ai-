"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { businessTypes } from "@/lib/site-data";
import { bookingLinkProps, trackPixel } from "@/lib/site-config";

const WEBHOOK_URL = "/api/lead-webhook";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GENERIC_ERROR =
  "Sorry, we couldn't send your message right now. Please try again in a moment, or email or call us directly.";

const inputClass =
  "w-full min-w-0 rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-sm text-cream outline-none focus:border-gold-500";

type ContactFormProps = {
  /** Pre-fills the message field, e.g. with the plan the visitor clicked. */
  initialMessage?: string;
  className?: string;
};

export default function ContactForm({
  initialMessage = "",
  className = "",
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const [website, setWebsite] = useState(""); // honeypot

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setBusinessType("");
    setMessage("");
    setWebsite("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setStatus("error");
      setError("Please fill in your name, email, and phone number.");
      return;
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          business_type: businessType,
          website,
        }),
      });

      if (!res.ok) {
        // Only surface validation messages (4xx) — never raw server errors.
        const data: { error?: unknown } = await res.json().catch(() => ({}));
        setStatus("error");
        setError(
          res.status === 400 && typeof data.error === "string"
            ? data.error
            : GENERIC_ERROR
        );
        return;
      }

      // Lead fires only after the webhook POST succeeds. Skip it when the
      // honeypot is filled — the API fakes success for bots.
      if (!website) trackPixel("Lead");
      resetForm();
      setStatus("success");
    } catch {
      setStatus("error");
      setError(GENERIC_ERROR);
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
          <label htmlFor="name" className="text-sm font-medium text-cream/80">
            Name <span className="text-gold-500">*</span>
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
          <label htmlFor="email" className="text-sm font-medium text-cream/80">
            Email <span className="text-gold-500">*</span>
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
          <label htmlFor="phone" className="text-sm font-medium text-cream/80">
            Phone <span className="text-gold-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="businessType"
            className="text-sm font-medium text-cream/80"
          >
            Business Type
          </label>
          <select
            id="businessType"
            name="business_type"
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
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-cream/80">
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
          {error}
        </p>
      )}

      {status === "success" && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-lg border border-gold-500/30 bg-gold-500/10 p-4 text-sm text-cream"
        >
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-500" />
          <p>
            Thanks! We&apos;ll be in touch shortly. Want to pick a time now?{" "}
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
