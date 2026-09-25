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

// Strategy-session booking page. Every booking button uses this and opens
// it in a new tab via bookingLinkProps.
export const BOOKING_URL = "https://cal.com/goeasyai/30min?overlayCalendar=true";
export const bookingLinkProps = {
  href: BOOKING_URL,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

// Social profiles. Leave a URL empty ("") or "#" to hide it from the footer.
export const socialLinks: { label: string; href: string }[] = [
  { label: "X", href: "https://x.com/GoEasyAI" },
  { label: "Instagram", href: "https://instagram.com/GoEasyAI" },
  { label: "LinkedIn", href: "https://linkedin.com/company/GoEasyAI" },
  { label: "Facebook", href: "https://facebook.com/GoEasyAI" },
  { label: "TikTok", href: "https://tiktok.com/@GoEasyAI" },
  { label: "YouTube", href: "https://youtube.com/@GoEasyAI" },
];

export const activeSocialLinks = socialLinks.filter(
  (link) => link.href.trim() !== "" && link.href.trim() !== "#"
);
