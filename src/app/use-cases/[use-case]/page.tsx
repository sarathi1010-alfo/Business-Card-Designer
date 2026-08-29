import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

const useCaseOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  "networking-event": {
    title: "Digital Cards for Networking Events: Never Lose a Contact",
    description: "Exchange information instantly and track follow-ups at your next networking event.",
    faqHeader: "Networking Event FAQ",
    q1: "How do I share my digital card at a networking event?",
    a1: "The easiest way is to have your unique QR code saved to your phone's lock screen or Apple/Google Wallet. When you meet someone, they simply point their camera at your screen.",
    q2: "What if the person I meet doesn't have a digital card?",
    a2: "That's the best part! With BrandCard's native lead capture, after they scan your code, a form prompts them to enter their details, which syncs directly back to you.",
    content: (
      <>
        <p>Networking events are chaotic. You meet dozens of people, shake countless hands, and return home with a pocket full of paper cards that you will likely never look at again. A digital business card changes the dynamic entirely. Instead of participating in an outdated exchange, you offer a seamless, modern experience that guarantees your contact info is saved directly into their phone.</p>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Mastering the Room</h2>
        <p>Success at a networking event is all about the follow-up. By using a digital card, you gain access to scan analytics. You can see exactly how many people viewed your profile and which of your links were most popular. This data allows you to prioritize your outreach the following day.</p>
        <p>Furthermore, setting up your card specific to the event—perhaps highlighting a relevant project or a specific \"Nice to meet you at [Event Name]\" message—shows a level of preparation and professionalism that paper cards simply cannot match.</p>
      </>
    )
  },
  "conference": {
    title: "Conference Digital Business Cards: Stand Out at Exhibitions",
    description: "Capture leads and share presentation materials effortlessly at industry conferences.",
    faqHeader: "Conference Digital Card FAQ",
    q1: "How can speakers use digital cards at conferences?",
    a1: "Speakers can include their QR code on their final presentation slide. Attendees scan it to download the slide deck and automatically share their contact info with the speaker.",
    q2: "Is it better than badge scanning?",
    a2: "Badge scanners provided by events are often expensive and data is locked to the event platform. Your digital business card is free, universal, and you own the data immediately.",
    content: (
      <>
        <p>Conferences and trade shows are high-stakes environments where making a lasting impression is difficult. The standard practice of badge scanning is impersonal and often leads to generic, ignored follow-up emails. A conference-optimized digital business card allows you to curate the exact experience you want a prospect or peer to have.</p>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Exhibitor and Attendee Success</h2>
        <p>If you are an exhibitor, placing your QR code at your booth allows attendees to instantly access product specs, pricing, and demo booking links without having to wait in line to speak with a rep. If you are an attendee, a digital card ensures that when you meet a potential partner in the hallway, you can exchange information in seconds.</p>
        <p>The ability to integrate lead capture forms directly into your card means that you can qualify leads on the spot, gathering crucial information that will dictate how you follow up once the conference concludes.</p>
      </>
    )
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const override = useCaseOverrides[rawUseCase];

  if (override) {
    return {
      title: override.title,
      description: override.description,
      alternates: {
        canonical: `/use-cases/${resolvedParams['use-case']}`,
      }
    };
  }

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
  const override = useCaseOverrides[rawUseCase];
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

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
