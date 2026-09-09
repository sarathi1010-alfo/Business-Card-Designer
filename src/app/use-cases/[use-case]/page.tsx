import Link from 'next/link';
import { Metadata } from 'next';

import React from 'react';

export const useCaseOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  'trade-show-digital-business-card': {
    title: "Digital Business Cards for Trade Shows",
    description: "Maximize your lead generation at trade shows with a digital business card. Share product demos and capture prospect information instantly.",
    faqHeader: "Trade Show Networking FAQs",
    q1: "How can I use a digital business card at a trade show?",
    a1: "You can display your digital business card's QR code on your booth signage, name badge, or mobile device to allow attendees to quickly scan and save your contact info and product materials.",
    q2: "Can I collect leads with my digital business card at an exhibition?",
    a2: "Yes. BrandCard allows you to embed a lead capture form directly on your digital card, making it incredibly easy to collect prospect names and emails without needing expensive badge scanners.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Revolutionizing Trade Show Lead Capture</h2>
        <p>
          Trade shows and exhibitions are high-velocity networking environments. You have minutes, sometimes seconds, to make an impression and capture a lead. Historically, this meant exchanging paper cards that easily get lost or renting expensive badge scanning equipment. A trade show digital business card changes the paradigm, offering a cost-effective, high-conversion alternative.
        </p>
        <p>
          By utilizing a digital profile, your "card" becomes a dynamic landing page. When a prospect scans your QR code—which can be printed on your booth, worn on a lanyard, or displayed on a tablet—they don't just get your phone number. They get immediate access to your latest product catalogs, demo videos, and special trade show pricing sheets. This immediate access to high-value content significantly increases engagement.
        </p>
        <p>
          Furthermore, the built-in lead capture forms transform your digital card into an inbound marketing tool. Instead of manually transcribing handwritten notes from collected paper cards after the show, you can have prospects fill out a quick form on their own device. This data is instantly digitized and ready to be imported into your CRM for immediate post-show follow-ups, giving you a massive speed advantage over competitors who are still sorting through paper.
        </p>
        <p>
          We recommend setting up a specific profile dedicated to the event using a bold, easily scannable template like <Link href="/editor/modern-minimal">Modern Minimal</Link>. Ensure your primary call-to-action is clear, whether it's booking a demo or signing up for a newsletter.
        </p>
      </>
    )
  },
  'b2b-sales-digital-business-card': {
    title: "Digital Business Cards for B2B Sales",
    description: "Accelerate your B2B sales cycle with a trackable digital business card. Share pitch decks, book meetings, and analyze prospect engagement.",
    faqHeader: "B2B Sales Networking FAQs",
    q1: "Why is a digital business card better for B2B sales?",
    a1: "A digital business card allows B2B sales professionals to share comprehensive resources like pitch decks and calendar links in one tap, while providing analytics on when prospects view those materials.",
    q2: "How do I follow up effectively using a digital card?",
    a2: "Use the analytics dashboard to see which prospects clicked on your presentation or pricing link. This context allows you to tailor your follow-up email precisely to their areas of interest.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Accelerating the B2B Sales Cycle</h2>
        <p>
          In B2B sales, the initial meeting is just the beginning of a complex relationship-building process. A standard paper business card provides zero value beyond basic contact information. A digital business card designed for B2B sales, however, acts as a personalized micro-site that accelerates the buyer's journey and provides critical intelligence to the sales rep.
        </p>
        <p>
          The core advantage lies in consolidation and tracking. Instead of sending a follow-up email with multiple attachments that might get caught in a spam filter, your digital card acts as a single, trusted gateway. You can include links to your company's master pitch deck, case studies relevant to the prospect's industry, and a direct Calendly link to book a discovery call. The prospect has everything they need to evaluate your solution in one place.
        </p>
        <p>
          The game-changer for sales professionals is the analytics. When you share your digital card, you gain visibility into engagement. Knowing that a VP of Procurement viewed your pricing sheet three times on a Tuesday afternoon gives you the perfect context to execute a timely, highly relevant follow-up call. This shifts your outreach from cold guessing to warm, data-driven engagement.
        </p>
        <p>
          For enterprise sales, projecting a polished image is crucial. A template like <Link href="/editor/corporate-blue">Corporate Blue</Link> provides the structured, professional aesthetic expected by B2B decision-makers. Start treating your business card as a vital part of your sales funnel, not just a formality.
        </p>
      </>
    )
  }
};


interface PageProps {
  params: Promise<{ 'use-case': string }>;
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams['use-case'];
  const override = useCaseOverrides[slug];

  const rawUseCase = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  if (override) {
    return {
      title: override.title,
      description: override.description,
      alternates: {
        canonical: `/use-cases/${slug}`,
      }
    };
  }

  return {
    title: `Digital Business Card for ${useCase} - BrandCard`,

    description: `Optimize your networking at your next ${useCase.toLowerCase()} with a customized digital business card. Share details instantly and capture leads.`,
    alternates: {
      canonical: `/use-cases/${resolvedParams['use-case']}`,
    }
  };
}


export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams['use-case'];
  const override = useCaseOverrides[slug];

  const rawUseCase = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": override ? override.q1 : `How to use a digital business card for a ${useCaseTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override ? override.a1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`
        }
      },
      {
        "@type": "Question",
        "name": override ? override.q2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override ? override.a2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
          {override ? override.title : `Digital Business Cards for ${useCaseTitle}`}
        </h1>
        <p className="text-xl text-muted-foreground">
          {override ? override.description : `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`}
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {override ? (
          override.content
        ) : (
          <>
            <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your {useCaseTitle} Networking</h2>
            <p>
              Networking environments like a {useCaseTitle.toLowerCase()} move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered.
            </p>

            <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins at {useCaseTitle}</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Speed:</strong> One scan of your QR code and your details are saved.</li>
              <li><strong>Lead Capture:</strong> Use our built-in forms to easily collect details from the people you meet.</li>
              <li><strong>Follow-up Context:</strong> See exactly who clicked what after the event to personalize your follow-ups.</li>
            </ul>
          </>
        )}

        <h2 className="text-3xl font-semibold mt-12 mb-6">{override ? override.faqHeader : "Frequently Asked Questions"}</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{override ? override.q1 : `How to use a digital business card for a ${useCaseTitle}?`}</h3>
        <p>{override ? override.a1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{override ? override.q2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`}</h3>
        <p>{override ? override.a2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`}</p>

        <div className="mt-12 text-center p-8 bg-muted rounded-xl">
          <h2 className="text-2xl font-bold mb-4">{override ? "Prepare for your next event" : `Prepare for your next ${useCaseTitle.toLowerCase()}`}</h2>
          <p className="mb-6">Create your custom digital business card in minutes.</p>
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors">
            Build Your Card
          </Link>
        </div>
      </div>
    </div>
  );
}
