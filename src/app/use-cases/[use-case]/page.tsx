import { Metadata } from 'next';
import Link from 'next/link';

const useCaseOverrides: Record<string, { h1: string; intro: string; p1: string; p2: string; p3: string; faqHeader: string; q1: string; a1: string; q2: string; a2: string }> = {
  'networking-event': {
    h1: "Digital Cards for Networking Events: Never Lose a Contact",
    intro: "Networking events are high-energy, fast-paced environments where you meet dozens of potential partners or clients in a single evening. The standard practice of exchanging paper cards is fundamentally broken in this setting.",
    p1: "When you leave an event with a pocket full of paper cards, the friction of manual data entry usually means follow-ups are delayed or forgotten entirely. A digital business card changes the dynamic. When you scan your QR code with someone you just met, they don't just get your contact info—you get theirs via the native lead capture form. This ensures zero contacts slip through the cracks.",
    p2: "Furthermore, your digital card acts as an immediate icebreaker and portfolio. Instead of describing what your company does, you can direct them to a video introduction or a product demo directly on your profile. It's an instant credibility boost.",
    p3: "After the event, the analytics dashboard shows you exactly who scanned your card and what links they clicked. This allows you to prioritize your follow-ups based on actual engagement, reaching out to the hottest leads first with contextual messages.",
    faqHeader: "Networking Event FAQ",
    q1: "How do I share my digital card at a networking event?",
    a1: "The fastest way is to open your unique QR code on your phone screen and have the other person scan it with their camera. Alternatively, you can text or email them your link if they prefer.",
    q2: "Can I collect their information if they don't have a digital card?",
    a2: "Yes. BrandCard includes a lead capture form on your profile. When they scan your card, you can ask them to quickly drop their name and email in the form so you can follow up."
  },
  'conference': {
    h1: "Conference Digital Business Cards: Stand Out at Exhibitions",
    intro: "Conferences and exhibitions are massive investments of time and money. To maximize your ROI, you need to ensure that every conversation at your booth or in the hallway translates into a trackable connection.",
    p1: "At a busy conference, attendees are overwhelmed with swag, brochures, and paper cards. If you give them a physical card, it will likely end up at the bottom of a tote bag. A digital business card bypasses the clutter by placing your contact details and marketing materials directly into their smartphone.",
    p2: "For exhibitors, a digital card is indispensable. You can customize your profile specifically for the conference, linking to your presentation slides, exclusive event discounts, or whitepapers relevant to the conference theme. It transforms your personal profile into a targeted landing page.",
    p3: "The lead capture functionality is particularly powerful at conferences. Instead of renting an expensive badge scanner, you can simply have attendees scan your digital card and fill out a quick lead form to enter a giveaway or receive your slide deck, seamlessly building your email list.",
    faqHeader: "Conference Networking FAQ",
    q1: "Should I customize my digital card for specific conferences?",
    a1: "Absolutely. You can update your bio, links, and primary CTA to reflect the theme of the conference or offer exclusive content to attendees, making your card highly relevant.",
    q2: "Does it work without an internet connection?",
    a2: "While scanning the QR code requires the recipient to have an internet connection to view your profile, modern conferences typically have robust WiFi. You can also save your card as a vCard to text if necessary."
  }
};


interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const override = useCaseOverrides[rawUseCase];

  return {
    title: override ? override.h1 : `Digital Business Card for ${useCase} - BrandCard`,
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
  const override = useCaseOverrides[rawUseCase];

  const q1 = override ? override.q1 : `How to use a digital business card for a ${useCaseTitle}?`;
  const a1 = override ? override.a1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;
  const q2 = override ? override.q2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`;
  const a2 = override ? override.a2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;
  const faqHeader = override ? override.faqHeader : "Frequently Asked Questions";

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
          {override ? override.h1 : `Digital Business Cards for ${useCaseTitle}`}
        </h1>
        <p className="text-xl text-muted-foreground">
          Maximize your connections at your next {useCaseTitle.toLowerCase()} with a smart, trackable digital business card.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {override ? (
          <>
            <p>{override.intro}</p>
            <p>{override.p1}</p>
            <p>{override.p2}</p>
            <p>{override.p3}</p>
          </>
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

        <h2 className="text-3xl font-semibold mt-12 mb-6">{faqHeader}</h2>

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
