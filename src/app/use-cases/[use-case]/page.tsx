import { Metadata } from 'next';
import Link from 'next/link';


const useCaseOverrides: Record<string, { title: string, desc: string, q1: string, a1: string, q2: string, a2: string }> = {
  'trade-show': {
    title: 'Digital Business Card for Trade Shows',
    desc: 'Capture leads efficiently at your next trade show with a dynamic digital business card.',
    q1: 'How do digital cards help at trade shows?',
    a1: 'Digital cards allow you to quickly exchange information with hundreds of attendees without running out of physical cards, while simultaneously capturing their contact details in a CRM.',
    q2: 'What should I link to on my trade show digital card?',
    a2: 'Link directly to your product demonstrations, spec sheets, and a meeting booking calendar to capitalize on the immediate interest generated at the booth.'
  },
  'corporate-event': {
    title: 'Digital Business Card for Corporate Events',
    desc: 'Network professionally at corporate events using a customized digital business card.',
    q1: 'Why use a digital card at a corporate event?',
    a1: 'Corporate events require a high level of professionalism. A digital card ensures your details are accurate, up-to-date, and instantly saved to the recipient\'s phone.',
    q2: 'Can my whole team use digital cards at a corporate event?',
    a2: 'Yes, teams can use standardized templates to ensure brand consistency across all interactions during the corporate event.'
  }
};


interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());


  const overrideKey = rawUseCase;
  const overrideData = useCaseOverrides[overrideKey];
  return {
    title: overrideData ? `${overrideData.title} - BrandCard` : `Digital Business Card for ${useCase} - BrandCard`,
    description: overrideData ? overrideData.desc : `Optimize your networking at your next ${useCase.toLowerCase()} with a customized digital business card. Share details instantly and capture leads.`,
    alternates: {
      canonical: `/use-cases/${resolvedParams['use-case']}`,
    }
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const overrideKey = rawUseCase;
  const overrideData = useCaseOverrides[overrideKey];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": overrideData ? overrideData.q1 : `How to use a digital business card for a ${useCaseTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": overrideData ? overrideData.a1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`
        }
      },
      {
        "@type": "Question",
        "name": overrideData ? overrideData.q2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": overrideData ? overrideData.a2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`
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
          {overrideData ? overrideData.title : `Digital Business Cards for ${useCaseTitle}`}
        </h1>
        <p className="text-xl text-muted-foreground">
          Maximize your connections at your next {useCaseTitle.toLowerCase()} with a smart, trackable digital business card.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
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

        <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{overrideData ? overrideData.q1 : `How to use a digital business card for a ${useCaseTitle}?`}</h3>
        <p>{overrideData ? overrideData.a1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{overrideData ? overrideData.q2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`}</h3>
        <p>{overrideData ? overrideData.a2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`}</p>

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
