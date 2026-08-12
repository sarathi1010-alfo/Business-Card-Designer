import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

export const useCaseOverrides: Record<string, { h1?: string, h2?: string, content?: React.ReactNode, q1?: string, a1?: string, q2?: string, a2?: string }> = {
  'trade-show': {
    h1: 'Digital Business Cards for Trade Shows: Stand Out on the Floor',
    h2: 'Capture Leads Automatically at Busy Exhibitions',
    content: (
      <>
        <p>Trade shows are chaotic. You are competing for attention with hundreds of other booths, and attendees are overwhelmed with physical collateral. A digital business card cuts through the noise. Instead of handing out a paper card that will likely end up in the trash, you offer a seamless digital experience.</p>
        <p>When an attendee scans your QR code at your booth, they are immediately presented with your key links, product demos, and a lead capture form. This ensures you collect their information efficiently while they are still engaged with your brand, vastly improving your post-show follow-up rates.</p>
      </>
    ),
    q1: 'How do you use a digital business card at a trade show?',
    a1: 'Print your digital business card\'s unique QR code on your booth signage, lanyards, or tablet displays. Encourage attendees to scan it to instantly save your contact info and access exclusive trade show materials.',
    q2: 'Why is it better than badge scanning?',
    a2: 'While badge scanning is useful for the exhibitor, a digital business card provides immediate, interactive value to the attendee, allowing them to access your resources while giving you their contact information.'
  },
  'investor-pitch': {
    h1: 'Digital Business Cards for Investor Pitches: Close the Deal',
    h2: 'Present Your Metrics with Confidence',
    content: (
      <>
        <p>When pitching to venture capitalists or angel investors, professionalism and data are everything. A digital business card allows you to present a polished, comprehensive overview of your startup immediately after your pitch.</p>
        <p>Instead of a standard email follow-up, your digital card can link directly to your pitch deck, your data room, your live traction dashboard, and your product demo. By using BrandCard\'s analytics, you can even see when an investor reviews your materials, allowing you to time your follow-up perfectly.</p>
      </>
    ),
    q1: 'What links should a founder include for an investor pitch?',
    a1: 'For an investor pitch, your digital business card should prominently feature links to your pitch deck, a one-pager, your live product or demo video, and a calendar link for scheduling a follow-up meeting.',
    q2: 'Can I track if an investor views my digital card?',
    a2: 'Yes, with dynamic digital cards, you can track scan rates and link clicks, providing valuable data on investor engagement after your initial meeting.'
  }
};

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

  const override = useCaseOverrides[rawUseCase] || {};

  const q1 = override.q1 || `How to use a digital business card for a ${useCaseTitle}?`;
  const a1 = override.a1 || `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;
  const q2 = override.q2 || `Is a digital business card better than a physical one for a ${useCaseTitle}?`;
  const a2 = override.a2 || `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": q1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a1
        }
      },
      {
        "@type": "Question",
        "name": q2,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a2
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
          {override.h1 || `Digital Business Cards for ${useCaseTitle}`}
        </h1>
        <p className="text-xl text-muted-foreground">
          Maximize your connections at your next {useCaseTitle.toLowerCase()} with a smart, trackable digital business card.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">{override.h2 || `Master Your ${useCaseTitle} Networking`}</h2>

        {override.content ? (
          override.content
        ) : (
          <p>
            Networking environments like a {useCaseTitle.toLowerCase()} move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered.
          </p>
        )}

        <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins at {useCaseTitle}</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Speed:</strong> One scan of your QR code and your details are saved.</li>
          <li><strong>Lead Capture:</strong> Use our built-in forms to easily collect details from the people you meet.</li>
          <li><strong>Follow-up Context:</strong> See exactly who clicked what after the event to personalize your follow-ups.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
        <p>{a1}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
        <p>{a2}</p>

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
