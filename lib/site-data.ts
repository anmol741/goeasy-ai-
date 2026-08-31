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

export const strategySessionHref = "/#contact";

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
    body: "Research shows leads contacted within 5 minutes are far more likely to qualify than those contacted later — most leads never receive a same-day response.",
  },
  {
    icon: Clock,
    title: "After-Hours Lead Loss",
    body: "A large share of insurance and real estate inquiries happen outside business hours. Few companies have 24/7 AI agents to capture them — GoEasyAI works while you sleep.",
  },
  {
    icon: AlertTriangle,
    title: "Manual Follow-Up Failures",
    body: "Studies show that a 1-hour delay in contacting a web lead drops qualification odds sharply, and insurance leads go cold within 2 hours. Manual systems can't keep up.",
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

export type PricingTier = {
  name: string;
  setupPrice: string;
  monthlyPrice: number;
  tagline: string;
  features: string[];
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
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
  name: "Lead Generation & Full AI Automation System to Follow Up Leads",
  setupPrice: "C$1,899",
  monthlyPrice: 699,
};

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
    body: "Real estate team was losing deals due to slow follow-up. Research shows 1-hour delay drops closing to 6%. AI system now responds in under 60 seconds, schedules showings instantly.",
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
      "All client data is encrypted in transit and at rest, access is tightly scoped, and our systems are built to align with the compliance standards insurance and real estate businesses are held to.",
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
    title: "End-to-End Encryption",
    description:
      "All data encrypted in transit and at rest with military-grade security protocols.",
  },
  {
    icon: ShieldCheck,
    title: "Industry Compliance",
    description:
      "HIPAA, SOC 2, and industry-leading compliance built into every interaction.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description:
      "Redundant systems ensure your AI is always available when clients need it.",
  },
  {
    icon: Database,
    title: "Data Privacy",
    description:
      "Your data is always yours. No sharing, no selling, complete privacy control.",
  },
];

// --- Contact / business types -----------------------------------------------------

export const businessTypes = ["Insurance", "Real Estate", "Other"] as const;

// --- Footer -----------------------------------------------------

export const contactInfo = {
  email: "hello@goeasyai.ca",
  phone: "+1 (000) 000-0000",
};

export const socialLinks = [
  { label: "X", href: "https://x.com/GoEasyAI" },
  { label: "Instagram", href: "https://instagram.com/GoEasyAI" },
  { label: "LinkedIn", href: "https://linkedin.com/company/GoEasyAI" },
  { label: "Facebook", href: "https://facebook.com/GoEasyAI" },
  { label: "TikTok", href: "https://tiktok.com/@GoEasyAI" },
  { label: "YouTube", href: "https://youtube.com/@GoEasyAI" },
];
