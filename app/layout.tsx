import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { activeSocialLinks, siteConfig } from "@/lib/site-config";
import PixelEvents from "@/components/PixelEvents";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title:
    "GoEasyAI | AI CRM, Ads, Voice Agents & Websites for Canadian Businesses",
  description:
    "AI voice agents, chatbots, CRM, WhatsApp automation, Facebook ads and websites — capture every lead and book more appointments. Built for Canadian businesses.",
  other: {
    "facebook-domain-verification": "x2e9hrat48shg5fzaiusj02oxvm111",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  // +12362013810 -> +1-236-201-3810
  telephone: siteConfig.phone.e164.replace(
    /^\+1(\d{3})(\d{3})(\d{4})$/,
    "+1-$1-$2-$3"
  ),
  email: siteConfig.email,
  areaServed: "Canada",
  sameAs: activeSocialLinks.map((link) => link.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy-900 text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
        <FloatingWhatsApp />
        <PixelEvents />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1323114817549202');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1323114817549202&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
