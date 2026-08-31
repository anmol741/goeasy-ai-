import Image from "next/image";
import Link from "next/link";
import { results, strategySessionHref } from "@/lib/site-data";

export default function Results() {
  return (
    <section className="bg-navy-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            Real Results From{" "}
            <span className="text-gold-500">Real Implementations</span>
          </h2>
          <p className="mt-4 text-cream/70">
            See how AI systems deliver measurable ROI for insurance and real
            estate professionals.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {results.map((result, i) => (
            <div
              key={result.headline}
              style={{ animationDelay: `${i * 0.08}s` }}
              className="animate-fade-up overflow-hidden rounded-xl border border-white/10 bg-navy-950"
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={result.image}
                  alt={`${result.industry} case study — ${result.headline}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-500">
                  {result.industry}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                  {result.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  {result.body}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                  {result.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-display text-lg font-semibold text-gold-500">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[11px] leading-tight text-cream/50">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href={strategySessionHref}
            className="rounded-lg border border-gold-500/50 px-8 py-3.5 text-sm font-semibold text-gold-400 transition-colors hover:border-gold-500 hover:bg-gold-500/10"
          >
            See Your ROI Potential
          </Link>
        </div>
      </div>
    </section>
  );
}
