import { securityBadges } from "@/lib/site-data";

export default function Security() {
  return (
    <section className="bg-navy-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            Enterprise-Grade{" "}
            <span className="text-gold-500">Security &amp; Reliability</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Your clients&apos; trust is paramount. Our AI systems meet the
            highest security standards.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {securityBadges.map((badge, i) => (
            <div
              key={badge.title}
              style={{ animationDelay: `${i * 0.08}s` }}
              className="animate-fade-up flex flex-col items-center rounded-xl border border-white/10 bg-navy-950 p-8 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                <badge.icon size={24} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-cream">
                {badge.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
