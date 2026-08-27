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

const useCaseOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: string }> = {
  'trade-show': {
    title: 'Trade Show',
    description: 'Dominate the expo floor with a digital business card tailored for trade shows. Instantly capture booth visitor leads and track ROI.',
    faqHeader: 'Trade Show Networking FAQs',
    q1: 'Why use a digital business card at a trade show?',
    a1: 'Trade shows are chaotic. Paper cards get lost. A digital card ensures your contact info is immediately saved to the attendee’s phone, and you can capture their details instantly using built-in forms.',
    q2: 'How can a digital card improve trade show lead generation?',
    a2: 'By integrating a lead capture form into your digital card, you can collect names, emails, and specific notes about the conversation, funneling them directly into your CRM for rapid follow-up.',
    content: '<p>Trade shows are high-stakes environments where every connection counts. Handing out paper cards is an outdated method that results in lost leads and missed opportunities.</p><h3>Maximize Booth ROI</h3><p>Equip your sales team with trade show specific digital business cards. They can quickly share product sheets, demo videos, and booking links while simultaneously capturing attendee information. This two-way exchange ensures you leave the event with actionable data, not just a stack of unorganized business cards.</p>'
  },
  'gallery-opening': {
    title: 'Gallery Opening',
    description: 'Connect with collectors and curators seamlessly. A digital business card for gallery openings lets you share your full portfolio instantly.',
    faqHeader: 'Gallery Opening FAQs',
    q1: 'How do artists use digital business cards at gallery openings?',
    a1: 'Artists use digital cards to provide attendees with instant access to their full online portfolio, pricing lists, and upcoming exhibition schedules without needing to carry physical materials.',
    q2: 'Is a digital card professional enough for fine art networking?',
    a2: 'Absolutely. A minimalist, well-designed digital card demonstrates modern professionalism and allows for high-resolution sharing of your artwork, which a paper card simply cannot do.',
    content: '<p>At a gallery opening, the focus should be on the art, not administrative tasks. A digital business card allows you to effortlessly share your contact details and portfolio with interested collectors and curators.</p><h3>Make a Lasting Impression</h3><p>Instead of disrupting the flow of conversation to exchange physical cards, simply have them scan your QR code. Your digital card can feature a curated selection of your work, a bio, and a direct link for purchasing inquiries, ensuring that the connection you make at the opening translates into long-term patronage.</p>'
  }
};

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const override = useCaseOverrides[rawUseCase];
  const useCaseTitle = override ? override.title : rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const description = override ? override.description : `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`;
  const faqHeader = override ? override.faqHeader : 'Frequently Asked Questions';

  const q1 = override ? override.q1 : `How to use a digital business card for a ${useCaseTitle}?`;
  const a1 = override ? override.a1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;

  const q2 = override ? override.q2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`;
  const a2 = override ? override.a2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;

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
          Digital Business Cards for {useCaseTitle}
        </h1>
        <p className="text-xl text-muted-foreground">
          {description}
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {override ? (
          <div dangerouslySetInnerHTML={{ __html: override.content }} />
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
