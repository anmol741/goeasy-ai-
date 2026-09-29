// Single source of truth for business/contact details. Import from here —
// never hardcode the email or phone number anywhere else.

export const siteConfig = {
  name: "GoEasyAI",
  legalName: "GoEasyAI (a BCG Services Group company)",
  url: "https://goeasyai.ca",
  location: "Surrey, British Columbia, Canada",
  email: "info@goeasyai.ca",
  phone: {
    display: "+1 (236) 242-5700",
    e164: "+12362425700",
  },
} as const;

export const emailHref = `mailto:${siteConfig.email}`;
export const phoneHref = `tel:${siteConfig.phone.e164}`;

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

export function trackPixel(event: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event);
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
