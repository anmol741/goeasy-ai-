import Image from "next/image";
import Link from "next/link";
import { strategySessionHref, systems } from "@/lib/site-data";

export default function Systems() {
  return (
    <section className="bg-navy-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            Complete AI Systems That{" "}
            <span className="text-gold-500">Work Together</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Not just tools — integrated AI solutions that transform your
            entire client acquisition and service process.
          </p>
        </div>

        <div className="relative mt-14 aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src="/case-study-independent.jpg"
            alt="Abstract visualization of connected AI systems"
            fill
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((system, i) => (
            <div
              key={system.title}
              style={{ animationDelay: `${i * 0.08}s` }}
              tabIndex={0}
              className="animate-fade-up group relative overflow-hidden rounded-xl border border-white/10 bg-navy-950 p-8 outline-none transition-colors hover:border-gold-500/40 focus-visible:border-gold-500/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                <system.icon size={22} />
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-cream">
                {system.title}
              </h3>

              <div className="grid transition-all duration-300 ease-out grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                <p className="overflow-hidden text-sm leading-relaxed text-cream/70 opacity-0 transition-opacity duration-300 group-hover:mt-3 group-hover:opacity-100 group-focus-within:mt-3 group-focus-within:opacity-100">
                  {system.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href={strategySessionHref}
            className="rounded-lg bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}
