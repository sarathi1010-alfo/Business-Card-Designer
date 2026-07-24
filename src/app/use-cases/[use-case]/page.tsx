import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

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
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  // Specific content overrides
  let titleOverride = `Digital Business Cards for ${useCaseTitle}`;
  let subtitleOverride = `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`;
  let h2Override = `Master Your ${useCaseTitle} Networking`;
  let p1Override = `Networking environments like a ${useCaseTitle.toLowerCase()} move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered.`;
  let h3Override = `Why Digital Wins at ${useCaseTitle}`;

  if (useCaseTitle === 'Trade Show') {
    titleOverride = 'Digital Business Cards for Trade Shows & Expos';
    subtitleOverride = 'Capture leads instantly on the crowded convention floor with a fast-scanning QR digital card.';
    h2Override = 'Dominate the Trade Show Floor';
    p1Override = 'Trade shows are chaotic, high-volume environments where traditional paper cards get lost or thrown away. A digital business card designed specifically for trade show exhibitors and attendees allows you to capture prospect information securely and directly into your CRM, bypassing manual data entry and ensuring you never miss a follow-up opportunity.';
    h3Override = 'Why Exhibitors Need Digital Cards';
  } else if (useCaseTitle === 'Sales Pitch') {
    titleOverride = 'Digital Business Cards for Sales Professionals';
    subtitleOverride = 'Close more deals by leaving a professional, trackable digital footprint after every pitch.';
    h2Override = 'Elevate Your Sales Pitch Experience';
    p1Override = 'A successful sales pitch does not end when you leave the room; it ends when the deal is signed. Handing over a static paper card is a missed opportunity. A digital business card allows you to embed your calendar link, attach relevant product sheets, and most importantly, track exactly when your prospect views your information post-meeting.';
    h3Override = 'The Sales Advantage of Digital Cards';
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How to use a digital business card for a ${useCaseTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`
        }
      },
      {
        "@type": "Question",
        "name": `Is a digital business card better than a physical one for a ${useCaseTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`
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
          {titleOverride}
        </h1>
        <p className="text-xl text-muted-foreground">
          {subtitleOverride}
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">{h2Override}</h2>
        <p>
          {p1Override}
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">{h3Override}</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Speed:</strong> One scan of your QR code and your details are saved.</li>
          <li><strong>Lead Capture:</strong> Use our built-in forms to easily collect details from the people you meet.</li>
          <li><strong>Follow-up Context:</strong> See exactly who clicked what after the event to personalize your follow-ups.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">How to use a digital business card for a {useCaseTitle}?</h3>
        <p>For a {useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Is a digital business card better than a physical one for a {useCaseTitle}?</h3>
        <p>Yes. During a busy {useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.</p>

        <div className="mt-12 text-center p-8 bg-muted rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Prepare for your next {useCaseTitle.toLowerCase()}</h2>
          <p className="mb-6">Create your custom digital business card in minutes.</p>
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors">
            Build Your Card
          </Link>
        </div>
      </div>
    </div>
  );
}
