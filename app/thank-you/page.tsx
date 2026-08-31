"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    window.fbq?.("track", "Lead");
  }, []);

  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center bg-navy-900 px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
        <CheckCircle2 size={32} />
      </div>

      <h1 className="mt-6 font-display text-3xl font-semibold text-cream sm:text-4xl">
        You&apos;re All Set
      </h1>
      <p className="mt-4 max-w-md text-cream/70">
        Thanks for reaching out. A member of the GoEasyAI team will be in
        touch shortly to schedule your strategy session.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400"
      >
        Back to Home
      </Link>
    </main>
  );
}
