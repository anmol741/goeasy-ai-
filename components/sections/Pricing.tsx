"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { pricingAddon, pricingTiers, strategySessionHref } from "@/lib/site-data";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="bg-navy-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            Recommended <span className="text-gold-500">Canadian Plans</span>
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-5">
            <span
              className={`text-sm font-medium ${!annual ? "text-cream" : "text-cream/50"}`}
            >
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={annual}
              onClick={() => setAnnual((a) => !a)}
              className="relative h-7 w-13 shrink-0 rounded-full bg-navy-800 transition-colors"
            >
              <span
                className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-gold-500 transition-transform ${
                  annual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`ml-1 text-sm font-medium ${annual ? "text-cream" : "text-cream/50"}`}
            >
              Annual
            </span>
          </div>
          <p
            aria-hidden={!annual}
            className={`min-h-[20px] max-w-xs text-center text-xs text-balance text-gold-500 transition-opacity duration-200 ${
              annual ? "opacity-100" : "opacity-0"
            }`}
          >
            2 months free when billed annually
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => {
            const monthly = annual
              ? Math.round((tier.monthlyPrice * 10) / 12)
              : tier.monthlyPrice;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`flex flex-col rounded-xl border p-8 ${
                  tier.featured
                    ? "border-gold-500 bg-navy-900 ring-1 ring-gold-500/40"
                    : "border-white/10 bg-navy-900"
                }`}
              >
                {tier.featured && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-950">
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-2xl font-semibold text-cream">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-cream/60">{tier.tagline}</p>

                <div className="mt-6">
                  <span className="font-display text-3xl font-semibold text-gold-500">
                    C${monthly}
                  </span>
                  <span className="text-sm text-cream/60">/month</span>
                  <p className="mt-1 text-xs text-cream/50">
                    {tier.setupPrice} setup (one time)
                  </p>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-cream/80"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-gold-500"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={strategySessionHref}
                  className={`mt-8 rounded-lg px-6 py-3 text-center text-sm font-semibold transition-transform hover:scale-105 ${
                    tier.featured
                      ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
                      : "border border-gold-500/50 text-gold-400 hover:bg-gold-500/10"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col items-center justify-between gap-6 rounded-xl border border-gold-500/30 bg-navy-900 p-8 sm:flex-row"
        >
          <div className="min-w-0 text-center sm:text-left">
            <h3 className="font-display text-lg font-semibold text-cream">
              {pricingAddon.name}
            </h3>
            <p className="mt-1 text-sm text-cream/60">
              {pricingAddon.setupPrice} setup (one time) · C$
              {pricingAddon.monthlyPrice}/month
            </p>
          </div>
          <Link
            href={strategySessionHref}
            className="shrink-0 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
