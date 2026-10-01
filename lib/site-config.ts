// Single source of truth for business/contact details. Import from here —
// never hardcode the email or phone number anywhere else.

export const siteConfig = {
  name: "GoEasyAI",
  legalName: "GoEasyAI (a BCG Services Group company)",
  url: "https://goeasyai.ca",
  location: "Surrey, British Columbia, Canada",
  email: "info@goeasyai.ca",
  // Answered by Maya, our AI voice agent.
  phone: {
    display: "+1 (236) 201-3810",
    e164: "+12362013810",
  },
  whatsapp: {
    display: "+1 (778) 718-0500",
    e164: "+17787180500",
  },
} as const;

export const emailHref = `mailto:${siteConfig.email}`;
export const phoneHref = `tel:${siteConfig.phone.e164}`;
// Use with whatsappLinkProps so every WhatsApp link opens in a new tab.
export const whatsappHref = `https://wa.me/${siteConfig.whatsapp.e164.slice(
  1
)}?text=Hi%20GoEasyAI%2C%20I%27d%20like%20to%20know%20more`;
export const whatsappLinkProps = {
  href: whatsappHref,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

// Strategy-session booking. Every booking button links to our own /book page
// (Cal.com inline embed) via bookingLinkProps, so the Schedule pixel event fires.
export const CAL_LINK = "goeasyai/30min";
export const BOOKING_PATH = "/book";
export const bookingLinkProps = {
  href: BOOKING_PATH,
} as const;

// Meta Pixel helper. Safe to call anywhere; no-ops on the server or when the
// pixel hasn't loaded (e.g. blocked by an ad blocker).
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackPixel(event: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && window.fbq) {
    if (params) window.fbq("track", event, params);
    else window.fbq("track", event);
  }
}

// Social profiles. Leave a URL empty ("") or "#" to hide it from the footer.
export const socialLinks: { label: string; href: string }[] = [
  { label: "Instagram", href: "https://www.instagram.com/goeasyaisolutions/" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582252568637",
  },
  { label: "YouTube", href: "https://youtube.com/@GoEasyAI" },
];

export const activeSocialLinks = socialLinks.filter(
  (link) => link.href.trim() !== "" && link.href.trim() !== "#"
);
