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

const useCaseOverrides: Record<string, { title: string, desc: string, q1: string, a1: string, q2: string, a2: string }> = {
  "trade-show": {
    title: "Digital Business Cards for Trade Shows",
    desc: "Maximize your lead generation at your next trade show with a dynamic, trackable digital business card. Ditch the paper and start scanning.",
    q1: "Why use a digital business card at a trade show?",
    a1: "Trade shows are high-volume events where paper cards are easily lost or ignored. A digital business card allows you to capture leads instantly and follow up with data-backed insights on who interacted with your profile.",
    q2: "How can I capture leads at a booth?",
    a2: "With BrandCard, you can embed a native lead capture form directly into your digital card. When someone scans your QR code at your booth, they can easily submit their contact info straight into your dashboard."
  },
  "sales-pitch": {
    title: "Digital Business Cards for Sales Pitches",
    desc: "Close more deals by leaving a memorable, professional digital footprint after your next sales pitch. Track engagement and follow up smarter.",
    q1: "How does a digital business card improve my sales pitch?",
    a1: "It allows you to consolidate all your pitch materials (slide decks, calendars, contact info) into one dynamic link. Plus, built-in analytics let you see if the prospect actually clicked your follow-up materials.",
    q2: "Can I customize my card for different prospects?",
    a2: "Yes! Because BrandCard uses dynamic QR codes, you can instantly update the links on your card to point to a personalized proposal or pitch deck before walking into the meeting."
  }
};

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const customData = useCaseOverrides[rawUseCase];
  const displayTitle = customData?.title || `Digital Business Cards for ${useCaseTitle}`;
  const displayDesc = customData?.desc || `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`;
  const q1 = customData?.q1 || `How to use a digital business card for a ${useCaseTitle}?`;
  const a1 = customData?.a1 || `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;
  const q2 = customData?.q2 || `Is a digital business card better than a physical one for a ${useCaseTitle}?`;
  const a2 = customData?.a2 || `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;

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
          {displayTitle}
        </h1>
        <p className="text-xl text-muted-foreground">
          {displayDesc}
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
