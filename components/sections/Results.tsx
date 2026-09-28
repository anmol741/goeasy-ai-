import Image from "next/image";
import Link from "next/link";
import { results } from "@/lib/site-data";



export default function Results() {
  return (
    <section id="results" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            What AI Automation{" "}
            <span className="text-gold-500">Can Look Like</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Example scenarios showing how AI systems can help businesses
            respond faster and capture more leads.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {results.map((result, i) => (
            <div
              key={result.headline}
              style={{ animationDelay: `${i * 0.08}s` }}
              className="animate-fade-up overflow-hidden rounded-xl border border-white/10 bg-navy-900"
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={result.image}
                  alt={`${result.industry} illustrative example — ${result.headline}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-block rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-500">
                    {result.industry}
                  </span>
                  <span className="inline-block rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-cream/60">
                    Illustrative example
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                  {result.headline}
                </h3>
                <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
                  <p className="text-cream/60">
                    <span className="font-semibold text-cream/80">Before:</span>{" "}
                    {result.before}
                  </p>
                  <p className="border-t border-white/10 pt-3 text-cream/70">
                    <span className="font-semibold text-gold-500">After:</span>{" "}
                    {result.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-cream/50">
          Scenarios are illustrative and based on typical use cases.
          Individual results vary.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/#roi-calculator"
            className="rounded-lg border border-gold-500/50 px-8 py-3.5 text-sm font-semibold text-gold-400 transition-colors hover:border-gold-500 hover:bg-gold-500/10"
          >
            See Your ROI Potential
          </Link>
        </div>
      </div>
    </section>
  );
}
