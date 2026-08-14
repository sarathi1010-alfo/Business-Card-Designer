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

type OverrideData = {
  heroText?: string;
  introText?: string;
  benefits?: string[];
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
};

const useCaseOverrides: Record<string, OverrideData> = {
  "trade-show": {
    heroText: "Capture leads and track engagement seamlessly at your next trade show.",
    introText: "Trade shows are chaotic, high-volume networking environments. Handing out paper cards means your contact info ends up in the trash. A digital business card designed for a Trade Show ensures that you capture the attendee's details right then and there using a native lead capture form, while giving them instant access to your product brochures and scheduling links.",
    benefits: [
      "Lead Capture Forms: Automatically collect emails and names on the show floor.",
      "Instant Resource Delivery: Link directly to product specs or demo videos.",
      "QR Code Tracking: See exactly how many people scanned your booth's QR code."
    ],
    q1: "How do I use a digital card at a busy trade show booth?",
    a1: "Print your digital card's QR code on your booth signage or have it open on a tablet. Attendees can scan it to instantly get your info and fill out a lead form.",
    q2: "Can I track which trade show generated the most leads?",
    a2: "Yes, you can create a specific digital card URL for each trade show and track the unique analytics for that event."
  },
  "alumni-event": {
    heroText: "Reconnect and network smarter at your next university alumni event.",
    introText: "Alumni events are all about rekindling old connections and building new professional bridges. A digital business card for an Alumni Event allows you to seamlessly share where you are now in your career. You can include links to your current company, your LinkedIn profile, and easily save the contact details of fellow alumni you reconnect with.",
    benefits: [
      "LinkedIn Integration: Drive traffic directly to your professional profile.",
      "Career Updates: Easily showcase your current role and company.",
      "Effortless Saving: Let fellow alumni download your contact info directly to their phones."
    ],
    q1: "Is a digital business card appropriate for a casual alumni mixer?",
    a1: "Absolutely. It's faster and less formal than handing out paper cards, and people always appreciate the ease of scanning a QR code to connect on LinkedIn.",
    q2: "What links should I include for an alumni event?",
    a2: "Your LinkedIn profile, your current company website, and a direct email or phone number are the most important elements to include."
  }
};

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  // Clean raw key
  const rawKey = rawUseCase.toLowerCase();
  const override = useCaseOverrides[rawKey];

  const heroDesc = override?.heroText || `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`;
  const introText = override?.introText || `Networking environments like a ${useCaseTitle.toLowerCase()} move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered.`;
  const benefitsList = override?.benefits || [
    "Speed: One scan of your QR code and your details are saved.",
    "Lead Capture: Use our built-in forms to easily collect details from the people you meet.",
    "Follow-up Context: See exactly who clicked what after the event to personalize your follow-ups."
  ];

  const q1 = override?.q1 || `How to use a digital business card for a ${useCaseTitle}?`;
  const a1 = override?.a1 || `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;
  const q2 = override?.q2 || `Is a digital business card better than a physical one for a ${useCaseTitle}?`;
  const a2 = override?.a2 || `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;

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
          {heroDesc}
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your {useCaseTitle} Networking</h2>
        <p>
          {introText}
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins at {useCaseTitle}</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {benefitsList.map((benefit, idx) => (
            <li key={idx}><strong>{benefit.split(':')[0]}:</strong> {benefit.split(':')[1] || benefit.split(':')[0]}</li>
          ))}
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
