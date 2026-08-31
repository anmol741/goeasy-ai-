"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { businessTypes } from "@/lib/site-data";
import { submitLead } from "@/lib/submit-lead";

export default function Contact() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = new FormData(e.currentTarget);

    try {
      await submitLead({
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        phone: String(form.get("phone") ?? ""),
        businessType: String(form.get("businessType") ?? ""),
        message: String(form.get("message") ?? ""),
      });
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            Get in <span className="text-gold-500">Touch</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Tell us about your business and we&apos;ll show you how GoEasyAI
            can help.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-5 rounded-xl border border-white/10 bg-navy-950 p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-cream/80">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full min-w-0 rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-sm text-cream outline-none focus:border-gold-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-cream/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full min-w-0 rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-sm text-cream outline-none focus:border-gold-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-cream/80">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full min-w-0 rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-sm text-cream outline-none focus:border-gold-500"
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
                name="businessType"
                required
                defaultValue=""
                className="w-full min-w-0 rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-sm text-cream outline-none focus:border-gold-500"
              >
                <option value="" disabled>
                  Select one
                </option>
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
              className="rounded-lg border border-white/10 bg-navy-900 px-4 py-2.5 text-sm text-cream outline-none focus:border-gold-500"
            />
          </div>

          {error && <p className="text-sm text-amber-500">{error}</p>}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 rounded-lg bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
