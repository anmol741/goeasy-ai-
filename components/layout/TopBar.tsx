"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { strategySessionHref } from "@/lib/site-data";

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-display text-xl font-semibold tracking-tight text-gold-500 sm:text-2xl"
        >
          GoEasyAI
        </Link>

        <Link
          href={strategySessionHref}
          className="shrink-0 rounded-lg bg-gold-500 px-3 py-2 text-xs font-semibold whitespace-nowrap text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Book AI Strategy Session
        </Link>
      </div>
    </header>
  );
}
