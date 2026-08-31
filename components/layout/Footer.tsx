import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { contactInfo, socialLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <span className="font-display text-2xl font-semibold text-gold-500">
          GoEasyAI
        </span>

        <div className="flex flex-col items-center gap-3 text-sm text-cream/70 sm:flex-row sm:gap-8">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 hover:text-gold-400"
          >
            <Mail size={16} />
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2 hover:text-gold-400"
          >
            <Phone size={16} />
            {contactInfo.phone}
          </a>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold tracking-wide text-cream/50">
            CONNECT WITH US
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-cream/70">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-xs text-cream/50 sm:flex-row sm:gap-4">
          <span>© 2026 GoEasyAI. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gold-400">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gold-400">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
