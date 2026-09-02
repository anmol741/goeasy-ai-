"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { problemCards, strategySessionHref } from "@/lib/site-data";

export default function Problem() {
  return (
    <section className="bg-navy-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            Your Current Systems Are{" "}
            <span className="text-gold-500">Costing You Money</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Every missed call, delayed response, and manual task is lost
            opportunity in today&apos;s competitive market.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/case-study-realestate.jpg"
              alt="Team overwhelmed by manual paperwork and phone follow-up"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>


          <div className="flex flex-col gap-5">
            {problemCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg border-l-4 border-amber-500 bg-navy-900 p-6"
              >
                <div className="flex items-center gap-3">
                  <card.icon className="text-amber-500" size={20} />
                  <h3 className="font-display text-lg font-semibold text-cream">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={strategySessionHref}
            className="rounded-lg bg-gold-500 px-8 py-3.5 text-center text-sm font-semibold text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400"
          >
            Schedule Your Strategy Session
          </Link>
          <Link
            href={strategySessionHref}
            className="rounded-lg border border-gold-500/50 px-8 py-3.5 text-center text-sm font-semibold text-gold-400 transition-colors hover:border-gold-500 hover:bg-gold-500/10"
          >
            Calculate Your ROI
          </Link>
        </div>
      </div>
    </section>
  );
}
