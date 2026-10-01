import {
  AlertTriangle,
  Clock,
  Database,
  Headset,
  Lock,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

// --- Problem section -------------------------------------------------

export type ProblemCard = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const problemCards: ProblemCard[] = [
  {
    icon: AlertTriangle,
    title: "The Speed to Lead Crisis",
    body: "Faster response times are widely linked to higher conversion — yet many leads never receive a same-day response.",
  },
  {
    icon: Clock,
    title: "After-Hours Lead Loss",
    body: "A large share of business inquiries happen outside business hours. Few companies have 24/7 AI agents to capture them — GoEasyAI works while you sleep.",
  },
  {
    icon: AlertTriangle,
    title: "Manual Follow-Up Failures",
    body: "Faster response times are widely linked to higher conversion, and leads can go cold within hours. Manual follow-up systems struggle to keep up.",
  },
];

// --- Systems section ---------------------------------------------------

export type SystemCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const systems: SystemCard[] = [
  {
    icon: Phone,
    title: "Virtual Receptionist",
    description:
      "Never miss another call. Our AI receptionist handles inquiries, qualifies leads, and schedules appointments 24/7 with natural conversation.",
  },
  {
    icon: Headset,
    title: "24/7 Voice Agents",
    description:
      "Never lose another call after hours. Our AI voice agents field calls, qualify prospects, and capture appointments so leads never go cold.",
  },
  {
    icon: MessageCircle,
    title: "Intelligent Chatbots",
    description:
      "Website visitors get instant answers about products, pricing, and services. Capture contact info and handle scheduling around the clock.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "Complete workflow automation from lead capture through onboarding. Reduce repetitive tasks and stop leads from falling through the cracks.",
  },
  {
    icon: Megaphone,
    title: "Facebook & Instagram Ads",
    description:
      "We run your Meta ads and send every lead straight into your CRM.",
  },
  {
    icon: MonitorSmartphone,
    title: "Website Development",
    description:
      "Fast, mobile-first websites connected to your CRM and booking calendar.",
  },
];

// --- Pricing section -----------------------------------------------------

export type PlanSlug = "starter" | "growth" | "scale" | "leadgen";

export type PricingTier = {
  slug: PlanSlug;
  name: string;
  setupPrice: string;
  monthlyPrice: number;
  tagline: string;
  features: string[];
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    slug: "starter",
    name: "Starter",
    setupPrice: "C$899",
    monthlyPrice: 99,
    tagline: "Solopreneurs and small service businesses",
    features: [
      "Sites, Forms, CRM, Pipeline, Calendar",
      "Personal WhatsApp",
      "Basic Workflows",
      "Up to 3 staff",
      "3,000 contacts",
    ],
  },
  {
    slug: "growth",
    name: "Growth",
    setupPrice: "C$1,899",
    monthlyPrice: 199,
    tagline: "Businesses actively growing leads",
    featured: true,
    features: [
      "Everything in Starter",
      "WABA",
      "AI Agent",
      "Advanced Workflows",
      "Salons, Bulk Campaigns, Ad Launcher",
      "Unlimited staff",
      "Unlimited contacts",
    ],
  },
  {
    slug: "scale",
    name: "Scale",
    setupPrice: "C$3,899",
    monthlyPrice: 299,
    tagline: "Agencies and growing teams",
    features: [
      "Everything in Growth",
      "Community",
      "Courses / LMS",
      "Shop",
      "AI Agents",
      "Advanced reporting",
    ],
  },
];

export const pricingAddon = {
  slug: "leadgen" as const,
  planName: "Lead Generation",
  name: "Lead Generation & Full AI Automation System to Follow Up Leads",
  setupPrice: "C$1,899",
  monthlyPrice: 699,
};

/** Contact-page link for a plan, e.g. /contact?plan=growth */
export function planContactHref(slug: PlanSlug) {
  return `/contact?plan=${slug}`;
}

/** Message pre-filled into the contact form when arriving from a plan button. */
export function planInterestMessage(slug: string | undefined) {
  if (!slug) return "";
  const tier = pricingTiers.find((t) => t.slug === slug);
  if (tier) {
    return `Interested in the ${tier.name} plan`;
  }
  if (slug === pricingAddon.slug) {
    return `Interested in the ${pricingAddon.planName} plan`;
  }
  return "";
}

// --- Results section -----------------------------------------------------

export type ResultCard = {
  industry: string;
  headline: string;
  before: string;
  after: string;
  image: string;
};

export const results: ResultCard[] = [
  {
    industry: "Insurance Advisor",
    headline: "Never Miss an After-Hours Call",
    before: "after-hours calls went to voicemail.",
    after:
      "an AI voice agent answers 24/7, qualifies the caller and books a meeting.",
    image: "/problem-manual-work.jpg",
  },
  {
    industry: "Real Estate Agent",
    headline: "Instant Reply to Every Facebook Lead",
    before: "Facebook leads waited hours for a reply.",
    after: "instant WhatsApp + AI call, showing booked automatically.",
    image: "/services-ai-dashboard.jpg",
  },
  {
    industry: "Local Business",
    headline: "Follow-Up That Never Stops",
    before: "missed calls and no follow-up.",
    after:
      "AI answers, sends a booking link, and follows up until they book.",
    image: "/hero-ai-professional.jpg",
  },
];

// --- FAQ section -----------------------------------------------------

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How quickly can the AI systems be implemented?",
    answer:
      "Most implementations go live within 1-2 weeks of your strategy session, depending on how many systems you're deploying and how much workflow mapping is needed.",
  },
  {
    question: "Will the AI sound robotic to my clients?",
    answer:
      "No. Our voice agents and chatbots use natural, conversational language tuned to your business, and every flow includes a smooth handoff to a human when a conversation needs one.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer:
      "Client data is encrypted in transit and at rest, access is tightly scoped, and our systems are built with Canadian privacy laws (PIPEDA / BC PIPA) in mind.",
  },
  {
    question: "What if the AI can't handle a complex question?",
    answer:
      "Every system is configured with clear escalation rules — when a conversation goes beyond what the AI should handle, it's routed straight to your team with full context.",
  },
  {
    question: "How do you measure ROI and success?",
    answer:
      "We track response time, lead qualification rate, booked appointments, and closed revenue against your pre-automation baseline, so the ROI is measurable, not anecdotal.",
  },
];

// --- Security section -----------------------------------------------------

export type SecurityBadge = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const securityBadges: SecurityBadge[] = [
  {
    icon: Lock,
    title: "Encrypted Data",
    description: "Encrypted data in transit and at rest.",
  },
  {
    icon: ShieldCheck,
    title: "Canadian Privacy Focus",
    description:
      "Built with Canadian privacy laws in mind (PIPEDA / BC PIPA).",
  },
  {
    icon: Clock,
    title: "Always-On AI Agents",
    description:
      "Your AI agents answer calls and messages around the clock, including evenings and weekends.",
  },
  {
    icon: Database,
    title: "Data Privacy",
    description: "Your data is never sold.",
  },
];

// --- Contact / business types -----------------------------------------------------

export const businessTypes = [
  "Real Estate",
  "Insurance",
  "Immigration",
  "Healthcare/Clinic",
  "Restaurant/Hospitality",
  "Retail",
  "Other",
] as const;

export const serviceInterests = [
  "CRM + Automation",
  "Facebook & Instagram Ads",
  "AI Voice Agent",
  "AI Chatbot",
  "Website Development",
  "Full System (All)",
] as const;

export const monthlyLeadOptions = [
  "0–20",
  "20–100",
  "100–500",
  "500+",
  "Not sure",
] as const;
