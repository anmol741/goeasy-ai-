import {
  AlertTriangle,
  Clock,
  Database,
  Headset,
  Lock,
  MessageCircle,
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
    body: "A large share of insurance and real estate inquiries happen outside business hours. Few companies have 24/7 AI agents to capture them — GoEasyAI works while you sleep.",
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
      "Website visitors get instant answers about products, protection, and services. Capture contact info and handle scheduling around the clock.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "Complete workflow automation from lead capture through onboarding. Reduce repetitive tasks and stop leads from falling through the cracks.",
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
  body: string;
  image: string;
  stats: { value: string; label: string }[];
};

export const results: ResultCard[] = [
  {
    industry: "Insurance Agency",
    headline: "Speed to Lead Saves $847K in Lost Deals",
    body: "Insurance agency implemented 24/7 AI voice agents after discovering they were losing 73% of after-hours leads. Now captures every inquiry within 30 seconds, converts 5x more prospects.",
    image: "/problem-manual-work.jpg",
    stats: [
      { value: "30 sec", label: "Response Time" },
      { value: "467%", label: "Conversion" },
      { value: "$847K", label: "Recovered Revenue" },
    ],
  },
  {
    industry: "Real Estate",
    headline: "From 6% to 89% Closing Rate With Instant Response",
    body: "Real estate team was losing deals due to slow follow-up. Faster response times are widely linked to higher conversion, so the AI system responds in under 60 seconds and schedules showings instantly.",
    image: "/services-ai-dashboard.jpg",
    stats: [
      { value: "45 sec", label: "Avg Response" },
      { value: "89%", label: "Close Rate" },
      { value: "1483%", label: "ROI Increase" },
    ],
  },
  {
    industry: "Independent Agent",
    headline: "24/7 Availability Triples Lead Qualification",
    body: "Solo agent was missing 68% of calls during client meetings. AI voice agents now handle all inquiries instantly, qualify leads, and book appointments while agent focuses on closing.",
    image: "/hero-ai-professional.jpg",
    stats: [
      { value: "24/7", label: "Availability" },
      { value: "312%", label: "Lead Increase" },
      { value: "0", label: "Missed Calls" },
    ],
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
  "Insurance",
  "Real Estate",
  "Immigration",
  "Healthcare/Clinic",
  "Restaurant/Hospitality",
  "Retail",
  "Other",
] as const;
