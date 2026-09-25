"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { bookingLinkProps } from "@/lib/site-config";

// Absolute "/#section" hrefs so the links also work from /contact, /privacy-policy, etc.
const navLinks = [
  { label: "Services", href: "/#systems" },
  { label: "Pricing", href: "/#pricing" },
  { label: "ROI Calculator", href: "/#roi-calculator" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-navy-900/95 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 font-display text-xl font-semibold tracking-tight text-gold-500 sm:text-2xl"
        >
          GoEasyAI
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-gold-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            {...bookingLinkProps}
            className="shrink-0 rounded-lg bg-gold-500 px-3 py-2 text-xs font-semibold whitespace-nowrap text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Book AI Strategy Session
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 text-cream hover:text-gold-400 lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-white/10 px-4 pb-4 sm:px-6 lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-base font-medium text-cream/85 hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
