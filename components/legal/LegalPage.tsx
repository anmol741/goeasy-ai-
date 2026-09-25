import type { ReactNode } from "react";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  /** Page route, e.g. "/privacy-policy"; used for table-of-contents links. */
  path: string;
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
};

export default function LegalPage({
  path,
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <>
      <TopBar />
      <main className="flex flex-1 flex-col bg-navy-900 pt-28 pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <header className="border-b border-white/10 pb-8">
            <h1 className="font-display text-3xl font-semibold text-cream sm:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-gold-500">
              Last updated: {lastUpdated}
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
            <nav
              aria-label="Table of contents"
              className="h-fit rounded-xl border border-white/10 bg-navy-950 p-5 lg:sticky lg:top-24"
            >
              <p className="mb-3 text-xs font-semibold tracking-wide text-cream/50 uppercase">
                Contents
              </p>
              <ol className="flex flex-col gap-2 text-sm">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`${path}#${section.id}`}
                      className="flex gap-2 text-cream/70 hover:text-gold-400"
                    >
                      <span className="text-gold-500/70 tabular-nums">
                        {i + 1}.
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="legal-prose min-w-0 max-w-3xl text-base leading-relaxed text-cream/80">
              <div className="text-lg text-cream/85">{intro}</div>
              {sections.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mt-12 scroll-mt-28"
                >
                  <h2 className="font-display text-2xl font-semibold text-cream">
                    <span className="text-gold-500">{i + 1}.</span>{" "}
                    {section.title}
                  </h2>
                  <div className="mt-4">{section.content}</div>
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
