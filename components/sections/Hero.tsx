import Image from "next/image";
import Link from "next/link";
import { strategySessionHref } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-36 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(201,168,76,0.14),transparent_55%)]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
        <div>
          <h1 className="animate-fade-up font-display text-4xl font-semibold leading-tight text-gold-500 sm:text-5xl">
            GoEasyAI — Stop Losing Clients to Manual Processes
          </h1>

          <p
            className="animate-fade-up mt-5 text-lg font-medium text-cream"
            style={{ animationDelay: "0.1s" }}
          >
            AI Automation for Modern Businesses
          </p>

          <p
            className="animate-fade-up mt-4 max-w-lg text-base text-cream/70"
            style={{ animationDelay: "0.2s" }}
          >
            Complete AI systems that automate your insurance and real estate
            operations, capture every lead, and deliver measurable ROI in 30
            days.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href={strategySessionHref}
              className="rounded-lg bg-gold-500 px-8 py-3.5 text-center text-sm font-semibold text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400"
            >
              Book Your AI Strategy Session
            </Link>
            <Link
              href={strategySessionHref}
              className="rounded-lg border border-gold-500/50 px-8 py-3.5 text-center text-sm font-semibold text-gold-400 transition-colors hover:border-gold-500 hover:bg-gold-500/10"
            >
              Get Free ROI Calculator
            </Link>
          </div>
        </div>

        <div
          className="animate-fade-up relative aspect-video w-full min-w-0 overflow-hidden rounded-2xl bg-navy-900 lg:aspect-auto lg:h-full"
          style={{ animationDelay: "0.15s" }}
        >
          <Image
            src="/case-study-insurance.jpg"
            alt="GoEasyAI professional working with an AI-powered platform"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
