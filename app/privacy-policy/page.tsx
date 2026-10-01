import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { emailHref, phoneHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | GoEasyAI",
  description:
    "How GoEasyAI collects, uses, and protects personal information from website forms and AI voice calls, in line with PIPEDA, BC PIPA, and CASL.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "October 2026";

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    content: (
      <>
        <p>
          {siteConfig.legalName} provides AI automation services to businesses,
          including AI chatbots, AI voice agents, CRM automation, lead
          generation systems, and marketing automation. We are based in{" "}
          {siteConfig.location}.
        </p>
        <p>
          In this policy, &ldquo;GoEasyAI&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, and &ldquo;our&rdquo; refer to GoEasyAI. We are
          responsible for the personal information under our control and have
          designated a privacy contact (see{" "}
          <a href="/privacy-policy#contact">Contact Us</a>) who is accountable for our
          compliance with this policy.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <h3>Information you give us through our website</h3>
        <p>When you submit our contact or strategy-session form, we collect:</p>
        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business type</li>
          <li>The service you&rsquo;re interested in</li>
          <li>Your approximate monthly lead or call volume</li>
          <li>Your consent to be contacted</li>
          <li>Any message or details you choose to include</li>
        </ul>

        <h3>Calls to our AI voice line</h3>
        <p>
          Our phone line ({siteConfig.phone.display}) is answered by an AI
          voice assistant, not a person. When you call, we may collect your
          phone number, the date, time and length of the call, a recording of
          the call, a transcript, and any information you share during the
          conversation (for example, your name, business details, or preferred
          appointment time).
        </p>

        <h3>Information collected automatically</h3>
        <p>
          When you visit our website, we and our service providers may
          automatically collect technical information such as your IP address,
          browser type, device information, pages viewed, referring pages, and
          similar usage data through cookies and similar technologies (see{" "}
          <a href="/privacy-policy#cookies">Cookies &amp; Tracking</a>).
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>Respond to your enquiries and requests</li>
          <li>Schedule and prepare for strategy sessions and consultations</li>
          <li>
            Understand your business needs and recommend suitable AI
            automation solutions
          </li>
          <li>Provide, manage, and support the services you sign up for</li>
          <li>
            Send you marketing communications where you have consented (see{" "}
            <a href="/privacy-policy#casl">Marketing Communications &amp; CASL</a>)
          </li>
          <li>
            Improve our website, services, and the quality of our AI assistant
          </li>
          <li>
            Protect against fraud, spam, and abuse, and meet our legal
            obligations
          </li>
        </ul>
        <p>
          We only collect and use personal information for purposes that a
          reasonable person would consider appropriate in the circumstances,
          and we will ask for your consent before using it for a new purpose.
        </p>
      </>
    ),
  },
  {
    id: "ai-voice-calls",
    title: "AI Voice Calls, Recording & Transcription",
    content: (
      <>
        <p>
          By calling our AI voice line, you acknowledge and agree that:
        </p>
        <ul>
          <li>You are speaking with an automated AI assistant, not a human.</li>
          <li>
            Calls <strong>may be recorded and transcribed</strong>, and the
            content of the call is <strong>processed by AI</strong> to
            understand your request, answer questions, and book appointments.
          </li>
          <li>
            Calls are handled by a <strong>third-party voice AI provider</strong>{" "}
            acting on our behalf, which processes the audio and transcript to
            deliver the service.
          </li>
          <li>
            Call details, transcripts, and summaries may be stored in our CRM
            so our team can follow up with you.
          </li>
        </ul>
        <p>
          If you do not want your call recorded or processed by AI, please
          hang up and contact us by email at{" "}
          <a href={emailHref}>{siteConfig.email}</a> instead.
        </p>
      </>
    ),
  },
  {
    id: "calls-ai-whatsapp",
    title: "Calls, AI Assistant & WhatsApp",
    content: (
      <p>
        When you submit a form on our website or through our ads, you agree
        that GoEasyAI may contact you by phone, including calls made by our AI
        assistant (Maya), by WhatsApp from {siteConfig.whatsapp.display}, and
        by email about your enquiry. Calls may be recorded and summarized to
        improve service and keep accurate records. You can opt out anytime by
        replying STOP on WhatsApp, telling us on the call, or emailing{" "}
        <a href={emailHref}>{siteConfig.email}</a>.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "How We Share Information",
    content: (
      <>
        <p>
          <strong>We do not sell or rent your personal information.</strong>{" "}
          We share it only with trusted service providers who process it on our
          behalf, under contracts that require them to protect it and use it
          only for the services they provide to us. These include:
        </p>
        <ul>
          <li>
            <strong>CRM platform</strong> &mdash; to store and manage leads,
            contacts, appointments, and communications
          </li>
          <li>
            <strong>Voice AI provider</strong> &mdash; to answer, record,
            transcribe, and process calls to our AI voice line
          </li>
          <li>
            <strong>Hosting and infrastructure providers</strong> &mdash; to
            run our website and systems
          </li>
          <li>
            <strong>Analytics and advertising providers</strong> &mdash; to
            understand website usage and measure the effectiveness of our
            marketing
          </li>
        </ul>
        <p>
          We may also share information within BCG Services Group where needed
          to respond to your request, or where required by law, to protect our
          rights, or in connection with a business transaction such as a
          merger or sale of assets.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "Storage & International Transfers",
    content: (
      <p>
        Some of our service providers may store or process personal
        information outside of British Columbia or Canada, including in the
        United States. When this happens, your information is protected by
        contractual safeguards but may be subject to the laws of that
        jurisdiction, including lawful access by courts, law enforcement, and
        national security authorities.
      </p>
    ),
  },
  {
    id: "casl",
    title: "Marketing Communications & CASL",
    content: (
      <>
        <p>
          We comply with Canada&rsquo;s Anti-Spam Legislation (CASL). We only
          send commercial electronic messages (such as marketing emails or
          text messages) where we have your express or implied consent, and
          every message identifies GoEasyAI and includes our contact
          information.
        </p>
        <p>You can withdraw your consent at any time by:</p>
        <ul>
          <li>
            Clicking the <strong>unsubscribe</strong> link in any marketing
            email
          </li>
          <li>
            Replying <strong>STOP</strong> to any marketing text message
          </li>
          <li>
            Emailing <a href={emailHref}>{siteConfig.email}</a> with
            &ldquo;Unsubscribe&rdquo; in the subject line
          </li>
        </ul>
        <p>
          We will process unsubscribe requests within 10 business days. You may
          still receive non-marketing messages related to services you have
          requested.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <p>
        We keep personal information only as long as needed for the purposes
        described in this policy, or as required by law. Lead and enquiry
        information is generally kept for up to 24 months after our last
        interaction with you, and call recordings and transcripts for up to 12
        months, unless you become a client, in which case we keep records for
        the duration of our relationship and as required for legal, tax, and
        accounting purposes. When information is no longer needed, we securely
        delete or anonymize it.
      </p>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    content: (
      <p>
        We use reasonable administrative, technical, and physical safeguards
        to protect personal information against loss, theft, and unauthorized
        access, use, or disclosure. These include encryption in transit,
        access controls limited to people who need the information, and
        working with reputable providers. However, no method of transmission
        over the internet or electronic storage is completely secure, and we
        cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    content: (
      <>
        <p>
          Under the Personal Information Protection and Electronic Documents
          Act (PIPEDA) and British Columbia&rsquo;s Personal Information
          Protection Act (PIPA), you have the right to:
        </p>
        <ul>
          <li>
            <strong>Access</strong> the personal information we hold about you
          </li>
          <li>
            <strong>Correct</strong> information that is inaccurate or
            incomplete
          </li>
          <li>
            <strong>Request deletion</strong> of your information, subject to
            legal retention requirements
          </li>
          <li>
            <strong>Withdraw consent</strong> to our use of your information,
            subject to legal or contractual restrictions
          </li>
          <li>
            Ask how your information has been used and to whom it has been
            disclosed
          </li>
        </ul>
        <p>
          To make a request, email <a href={emailHref}>{siteConfig.email}</a>.
          We may need to verify your identity, and we will respond within 30
          days. If you are not satisfied with our response, you may contact
          the Office of the Information and Privacy Commissioner for British
          Columbia or the Office of the Privacy Commissioner of Canada.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    content: (
      <>
        <p>
          Our website uses cookies and similar technologies (such as pixels) to
          keep the site working, understand how visitors use it, and measure
          the performance of our advertising. This may include analytics and
          advertising cookies set by third-party providers.
        </p>
        <p>
          You can control or delete cookies through your browser settings, and
          most browsers let you block third-party cookies. Blocking some
          cookies may affect how the website works.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <p>
        Our services are intended for businesses and are not directed to
        children. We do not knowingly collect personal information from
        anyone under 19 years of age.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this policy from time to time. When we do, we will
        update the &ldquo;Last updated&rdquo; date at the top of this page.
        Significant changes will be highlighted on our website.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions about this policy or wish to exercise your
          privacy rights, contact our privacy officer:
        </p>
        <p>
          <strong>{siteConfig.legalName}</strong>
          <br />
          {siteConfig.location}
          <br />
          Email: <a href={emailHref}>{siteConfig.email}</a>
          <br />
          Phone: <a href={phoneHref}>{siteConfig.phone.display}</a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      path="/privacy-policy"
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          Your privacy matters to us. This Privacy Policy explains how GoEasyAI
          collects, uses, shares, and protects personal information when you
          visit our website, submit a form, or call our AI voice assistant.
        </p>
      }
      sections={sections}
    />
  );
}
