import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import BookingEmbed from "@/components/BookingEmbed";

export const metadata: Metadata = {
  title: "Book Your AI Strategy Session | GoEasyAI",
  description:
    "Pick a time for a free 30-minute AI strategy session with GoEasyAI.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <TopBar />
      <main className="flex flex-1 flex-col bg-navy-900 pt-32 pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-4xl font-semibold text-cream sm:text-5xl">
              Book Your <span className="text-gold-500">Strategy Session</span>
            </h1>
            <p className="mt-4 text-cream/70">
              Pick a time that works for you. It&apos;s a free 30-minute call
              to map out where AI can save you time and capture more leads.
            </p>
          </div>

          <div className="mt-10 min-h-[700px] w-full overflow-hidden rounded-xl border border-white/10 bg-navy-950">
            <BookingEmbed />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
