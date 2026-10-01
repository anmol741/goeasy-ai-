import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  activeSocialLinks,
  emailHref,
  phoneHref,
  siteConfig,
  whatsappLinkProps,
} from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 pt-14 pb-24 sm:pb-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <span className="font-display text-2xl font-semibold text-gold-500">
          GoEasyAI
        </span>

        <div className="flex flex-col items-center gap-3 text-sm text-cream/70 sm:flex-row sm:gap-8">
          <a
            href={emailHref}
            className="flex items-center gap-2 hover:text-gold-400"
          >
            <Mail size={16} />
            {siteConfig.email}
          </a>
          <a
            href={phoneHref}
            className="flex items-center gap-2 hover:text-gold-400"
          >
            <Phone size={16} />
            {siteConfig.phone.display}
          </a>
          <a
            {...whatsappLinkProps}
            className="flex items-center gap-2 hover:text-gold-400"
          >
            <WhatsAppIcon size={16} />
            {siteConfig.whatsapp.display}
          </a>
        </div>

        {activeSocialLinks.length > 0 && (
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-cream/50">
              CONNECT WITH US
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-cream/70">
              {activeSocialLinks.map((social) => (
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
        )}

        <div className="flex flex-col items-center gap-2 text-xs text-cream/50 sm:flex-row sm:gap-4">
          <span>© 2026 {siteConfig.name}. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gold-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
