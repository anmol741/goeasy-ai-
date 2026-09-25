import { Mail, PhoneCall } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { emailHref, phoneHref, siteConfig } from "@/lib/site-config";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            Get in <span className="text-gold-500">Touch</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Tell us about your business and we&apos;ll show you how GoEasyAI
            can help.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-gold-500/30 bg-navy-950 p-6 text-center sm:flex-row sm:text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
            <PhoneCall size={22} />
          </div>
          <div className="flex-1">
            <a
              href={phoneHref}
              className="block font-display text-xl font-semibold text-cream hover:text-gold-400"
            >
              {siteConfig.phone.display}
            </a>
          </div>
          <a
            href={phoneHref}
            className="w-full shrink-0 rounded-lg bg-gold-500 px-6 py-3 text-center text-sm font-semibold text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400 sm:w-auto"
          >
            Call Now
          </a>
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-cream/60">
          <Mail size={14} />
          Prefer email?{" "}
          <a href={emailHref} className="text-gold-500 hover:text-gold-400">
            {siteConfig.email}
          </a>
        </p>

        <ContactForm className="mt-8" />
      </div>
    </section>
  );
}
