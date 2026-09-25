import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { emailHref, phoneHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service | GoEasyAI",
  description:
    "The terms that govern use of the GoEasyAI website and AI automation services, including AI chatbots, voice agents, and CRM automation.",
  alternates: { canonical: "/terms-of-service" },
};

const LAST_UPDATED = "September 2026";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing our website, calling our AI voice line, or using any
        GoEasyAI service, you agree to these Terms of Service and our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>. If you are using
        our services on behalf of a business, you confirm that you have
        authority to bind that business to these terms. If you do not agree,
        please do not use our website or services.
      </p>
    ),
  },
  {
    id: "services",
    title: "Our Services",
    content: (
      <>
        <p>
          {siteConfig.legalName} designs, builds, and manages AI automation
          systems for businesses, including:
        </p>
        <ul>
          <li>AI chatbots for websites and messaging channels</li>
          <li>AI voice agents and virtual receptionists</li>
          <li>CRM automation and workflow automation</li>
          <li>Lead generation and lead follow-up systems</li>
          <li>Marketing automation</li>
        </ul>
        <p>
          The specific scope, deliverables, and pricing for each client are
          set out in a proposal, order form, or service agreement
          (&ldquo;Service Agreement&rdquo;). If a Service Agreement conflicts
          with these terms, the Service Agreement governs.
        </p>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "Subscriptions, Fees & Cancellation",
    content: (
      <>
        <ul>
          <li>
            <strong>Fees.</strong> Services may include one-time setup fees
            and recurring subscription fees, as described in your Service
            Agreement. Prices are in Canadian dollars and exclude applicable
            taxes unless stated otherwise.
          </li>
          <li>
            <strong>Billing.</strong> Subscriptions are billed in advance on a
            recurring basis and renew automatically until cancelled.
          </li>
          <li>
            <strong>Usage-based costs.</strong> Some services (such as voice
            minutes, messaging, or third-party platform usage) may be billed
            based on usage or passed through at cost, as set out in your
            Service Agreement.
          </li>
          <li>
            <strong>Late payment.</strong> We may suspend services if payment
            is overdue, after giving you reasonable notice.
          </li>
          <li>
            <strong>Cancellation.</strong> Unless your Service Agreement says
            otherwise, you may cancel a subscription with 30 days&rsquo;
            written notice to <a href={emailHref}>{siteConfig.email}</a>.
            Setup fees and fees for periods already started are
            non-refundable.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "Your Responsibilities",
    content: (
      <>
        <p>When using our services, you agree to:</p>
        <ul>
          <li>Provide accurate, complete, and current information</li>
          <li>Keep any account credentials secure and confidential</li>
          <li>
            Obtain all consents required by law from your own customers and
            contacts &mdash; including consent for call recording and for
            marketing messages under CASL &mdash; before we contact them or
            process their information on your behalf
          </li>
          <li>
            Review and approve scripts, prompts, and messaging used by AI
            systems deployed for your business
          </li>
          <li>
            Not use our services for unlawful, deceptive, harassing, or
            spam activity, or in a way that infringes anyone&rsquo;s rights
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ai-disclaimer",
    title: "AI Outputs & No Professional Advice",
    content: (
      <>
        <p>
          Our services use artificial intelligence, including large language
          models and voice AI. You acknowledge that:
        </p>
        <ul>
          <li>
            <strong>AI outputs may contain errors</strong>, be incomplete, or
            be inaccurate, and may not always reflect your business&rsquo;s
            current information.
          </li>
          <li>
            Information provided by our AI chatbots and voice assistant is for
            general information only and{" "}
            <strong>
              is not legal, financial, insurance, immigration, medical, or
              other professional advice
            </strong>
            .
          </li>
          <li>
            You are responsible for reviewing important AI outputs and for
            decisions you make based on them.
          </li>
          <li>
            Where regulated advice is needed, you should consult a qualified,
            licensed professional.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    content: (
      <p>
        Our services rely on third-party platforms such as CRM software, voice
        AI providers, telephony carriers, and hosting providers. We are not
        responsible for outages, changes, or failures of third-party services
        outside our reasonable control. Our website may also link to
        third-party websites; we do not control and are not responsible for
        their content or practices.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          The GoEasyAI website, brand, content, and our underlying systems,
          templates, and know-how are owned by GoEasyAI or its licensors and
          are protected by intellectual property laws. You may not copy,
          reproduce, or create derivative works from them without our written
          permission.
        </p>
        <p>
          You retain ownership of the data and content you provide to us. You
          grant us a limited licence to use it only as needed to provide the
          services to you.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          Our website and services are provided &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo;. To the maximum extent permitted by law,
          we do not guarantee that services will be uninterrupted or
          error-free, or that they will produce any particular business
          result, such as a specific number of leads or sales.
        </p>
        <p>
          To the maximum extent permitted by law, GoEasyAI will not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages, or for lost profits, revenue, data, or business
          opportunities. Our total liability for any claim relating to the
          services is limited to the amount you paid us for the services in
          the three (3) months before the event giving rise to the claim.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    content: (
      <p>
        You agree to indemnify and hold GoEasyAI harmless from claims arising
        out of your misuse of the services, your breach of these terms, or
        your failure to obtain required consents from your customers or
        contacts.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: (
      <p>
        We may update these terms from time to time. We will post the updated
        version on this page and change the &ldquo;Last updated&rdquo; date.
        Your continued use of our website or services after changes take
        effect means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <p>
        These terms are governed by the laws of the Province of British
        Columbia and the federal laws of Canada that apply there. Any dispute
        will be resolved exclusively in the courts of British Columbia, and
        you consent to their jurisdiction.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <p>
        <strong>{siteConfig.legalName}</strong>
        <br />
        {siteConfig.location}
        <br />
        Email: <a href={emailHref}>{siteConfig.email}</a>
        <br />
        Phone: <a href={phoneHref}>{siteConfig.phone.display}</a>
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      path="/terms-of-service"
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          These Terms of Service set out the rules for using the GoEasyAI
          website and our AI automation services. Please read them carefully.
        </p>
      }
      sections={sections}
    />
  );
}
