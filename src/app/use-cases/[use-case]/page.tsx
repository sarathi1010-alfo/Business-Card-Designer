import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}


const useCaseOverrides: Record<string, { h1: string; p1: string; p2: string; q1: string; a1: string; q2: string; a2: string }> = {
  "networking-event": {
    h1: "Digital Cards for Networking Events: Never Lose a Contact",
    p1: "Networking events are chaotic. Handing out paper cards often means your contact information ends up in the trash or forgotten in a wallet. A digital business card designed for networking events ensures you capture and retain leads effortlessly. With a quick scan of a QR code, you can transfer your contact details directly into their phone's address book.",
    p2: "Beyond just sharing information, our networking event digital cards feature integrated lead capture forms. Instead of just giving your details away, you can collect their information on the spot. Combined with scan analytics, you'll have all the data you need to execute perfectly timed, personalized follow-ups that convert conversations into real opportunities.",
    q1: "How do I use a digital business card at a networking event?",
    a1: "Simply display your card's QR code on your phone screen. When someone scans it, they can instantly save your contact details and share theirs with you via a lead capture form.",
    q2: "Can I track who scanned my card at the event?",
    a2: "Yes, our digital business cards include analytics that track when and where your card was scanned, helping you measure the success of your networking efforts."
  },
  "conference": {
    h1: "Conference Digital Business Cards: Stand Out at Exhibitions",
    p1: "At conferences and trade shows, standing out is critical. A conference digital business card elevates your professional presence, offering an interactive experience that paper simply can't match. You can embed presentation slides, product demos, and booth maps directly onto your card, providing immense value to everyone you meet.",
    p2: "Stop fumbling with stacks of paper cards at your exhibition booth. A conference digital card streamlines lead generation, allowing you to quickly qualify prospects and capture their details. The eco-friendly approach not only saves money on printing but also positions your brand as modern and forward-thinking in a crowded exhibition hall.",
    q1: "Why is a digital business card better for conferences?",
    a1: "It allows you to share rich media like presentation links and product videos, captures leads instantly, and eliminates the need to carry hundreds of paper cards around the exhibition hall.",
    q2: "Can I customize the card for a specific conference?",
    a2: "Absolutely. You can easily update your digital business card in real-time to include event-specific branding, schedules, or special offers tailored to the conference attendees."
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const override = useCaseOverrides[rawUseCase];
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

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
  const override = useCaseOverrides[rawUseCase];
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
          {override ? override.h1 : `Digital Business Cards for ${useCaseTitle}`}
        </h1>
        <p className="text-xl text-muted-foreground">
          Maximize your connections at your next {useCaseTitle.toLowerCase()} with a smart, trackable digital business card.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your {useCaseTitle} Networking</h2>
        {override ? (
          <>
            <p>{override.p1}</p>
            <p className="mt-4">{override.p2}</p>
          </>
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

        <h3 className="text-2xl font-semibold mt-6 mb-2">{override ? override.q1 : `How to use a digital business card for a ${useCaseTitle}?`}</h3>
        <p>{override ? override.a1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{override ? override.q2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`}</h3>
        <p>{override ? override.a2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`}</p>

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
