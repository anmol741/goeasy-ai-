import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { planInterestMessage } from "@/lib/site-data";
import {
  bookingLinkProps,
  emailHref,
  phoneHref,
  siteConfig,
  whatsappLinkProps,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us | GoEasyAI",
  description:
    `Get in touch with GoEasyAI about AI chatbots, AI voice agents, CRM automation, and lead generation for your business. Call ${siteConfig.phone.display}, WhatsApp ${siteConfig.whatsapp.display}, or email ${siteConfig.email}.`,
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { plan } = await searchParams;
  const initialMessage = planInterestMessage(
    typeof plan === "string" ? plan.toLowerCase() : undefined
  );

  return (
    <>
      <TopBar />
      <main className="flex flex-1 flex-col bg-navy-900 pt-32 pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h1 className="font-display text-4xl font-semibold text-cream sm:text-5xl">
                Get in <span className="text-gold-500">Touch</span>
              </h1>
              <p className="mt-4 text-cream/70">
                Tell us about your business and we&apos;ll show you how
                GoEasyAI can help.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-cream/80 sm:flex-row sm:gap-8">
              <a
                href={phoneHref}
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <Phone size={16} className="text-gold-500" />
                {siteConfig.phone.display}
              </a>
              <a
                {...whatsappLinkProps}
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <WhatsAppIcon size={16} className="text-gold-500" />
                {siteConfig.whatsapp.display}
              </a>
              <a
                href={emailHref}
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <Mail size={16} className="text-gold-500" />
                {siteConfig.email}
              </a>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                {...bookingLinkProps}
                className="rounded-lg bg-gold-500 px-8 py-3.5 text-center text-sm font-semibold text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400"
              >
                Book a 30-min Strategy Call
              </a>
            </div>

            <p className="mt-8 text-center text-sm text-cream/60">
              Or send us a message and we&apos;ll get back to you.
            </p>

            {/* key resets the form if the visitor switches plans */}
            <ContactForm
              key={initialMessage}
              initialMessage={initialMessage}
              className="mt-4"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
