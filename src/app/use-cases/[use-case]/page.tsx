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

export const useCaseOverrides: Record<string, { q1?: string, a1?: string, q2?: string, a2?: string, customH1?: string, customH2?: string, extraContent?: string }> = {
  "trade-show": {
    q1: "How can I use a digital business card at a trade show?",
    a1: "At a trade show, you can display your QR code on a lanyard or phone screen, allowing attendees to instantly scan and save your contact information, product catalogs, and lead capture forms.",
    q2: "Is it better to use digital cards or paper cards at exhibitions?",
    a2: "Digital cards are vastly superior for exhibitions because they eliminate the need to carry thousands of paper cards, allow for instant CRM lead capture, and let you track exactly who viewed your follow-up materials.",
    customH1: "Digital Business Cards for Trade Shows & Exhibitions",
    customH2: "Maximize Your Event ROI",
    extraContent: "Trade shows are chaotic, fast-paced environments where every second counts. Handing out paper cards often results in them being lost in a bag of swag. A digital business card designed for trade shows changes the game. By offering a quick QR scan, you immediately capture the lead's information while providing them with direct links to your product demos, pricing sheets, and booking calendars. It's the most efficient way to ensure your booth visitors actually remember you and follow up."
  },
  "seminar": {
    q1: "Why should speakers use a digital business card at seminars?",
    a1: "Speakers can share their digital business card at the end of a presentation to instantly distribute slide decks, collect attendee emails, and provide links to their published work or upcoming events.",
    q2: "Can attendees save my contact info without an app?",
    a2: "Yes, BrandCard digital business cards open directly in the smartphone's native browser and can be saved to their contacts with a single click—no app download required.",
    customH1: "Seminar Digital Business Cards for Speakers",
    customH2: "Engage Your Audience Instantly",
    extraContent: "As a seminar speaker or attendee, your goal is to make lasting connections based on the knowledge shared. A digital business card allows you to seamlessly transition from an on-stage presentation to an ongoing digital relationship. Instead of spelling out your email address, you can display your QR code on your final slide. Attendees can scan it to download your presentation notes, sign up for your newsletter, and connect with you on LinkedIn—all before they even leave the room."
  }
};

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const override = useCaseOverrides[rawUseCase] || {};

  const q1 = override.q1 || `How to use a digital business card for a ${useCaseTitle}?`;
  const a1 = override.a1 || `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;
  const q2 = override.q2 || `Is a digital business card better than a physical one for a ${useCaseTitle}?`;
  const a2 = override.a2 || `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;

  const displayH1 = override.customH1 || `Digital Business Cards for ${useCaseTitle}`;
  const displayH2 = override.customH2 || `Master Your ${useCaseTitle} Networking`;

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
          {displayH1}
        </h1>
        <p className="text-xl text-muted-foreground">
          Maximize your connections at your next {useCaseTitle.toLowerCase()} with a smart, trackable digital business card.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">{displayH2}</h2>

        {override.extraContent ? (
          <p>{override.extraContent}</p>
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
