import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

const useCaseOverrides: Record<string, { title: string, desc: string, h2: string, intro: string, q1: string, a1: string, q2: string, a2: string }> = {
  'tech-conference': {
    title: "Digital Business Cards for Tech Conferences",
    desc: "Maximize your networking at your next Tech Conference. Share your GitHub, demo links, and contact info instantly.",
    h2: "Master Your Tech Conference Networking",
    intro: "Tech conferences are fast-paced and packed with developers, investors, and founders. You need to share your technical portfolio instantly. A dynamic digital business card streamlines this process, allowing you to share repositories and contact info with a simple QR scan.",
    q1: "How to use a digital business card for a Tech Conference?",
    a1: "For a Tech Conference, add your GitHub link, recent project demos, and a calendar booking link to your digital card. Keep the QR code as your phone's lock screen for instant sharing.",
    q2: "Is a digital business card better than a physical one for a Tech Conference?",
    a2: "Absolutely. In the tech industry, paper cards are often viewed as outdated. A digital card proves you are tech-forward and allows you to track exactly who scanned your profile."
  },
  'medical-symposium': {
    title: "Digital Business Cards for Medical Symposiums",
    desc: "Network effectively at your next Medical Symposium. Share your credentials and research securely.",
    h2: "Master Your Medical Symposium Networking",
    intro: "Medical symposiums require professional, credential-focused networking. Exchanging information securely and hygienically is paramount. A digital business card allows you to share your clinical affiliations and published research instantly.",
    q1: "How to use a digital business card for a Medical Symposium?",
    a1: "For a Medical Symposium, ensure your digital card highlights your medical credentials, hospital affiliations, and links to your latest published research or clinical trials.",
    q2: "Is a digital business card better than a physical one for a Medical Symposium?",
    a2: "Yes. It offers a touch-free, hygienic way to exchange information while allowing you to include far more detail—such as direct links to medical publications—than a traditional paper card can hold."
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-card/g, '');
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const override = useCaseOverrides[rawUseCase];

  return {
    title: override ? override.title : `Digital Business Card for ${useCase} - BrandCard`,
    description: override ? override.desc : `Optimize your networking at your next ${useCase.toLowerCase()} with a customized digital business card. Share details instantly and capture leads.`,
    alternates: {
      canonical: `/use-cases/${resolvedParams['use-case']}`,
    }
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const override = useCaseOverrides[rawUseCase];

  const q1 = override ? override.q1 : `How to use a digital business card for a ${useCaseTitle}?`;
  const a1 = override ? override.a1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;
  const q2 = override ? override.q2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`;
  const a2 = override ? override.a2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;
  const h2 = override ? override.h2 : `Master Your ${useCaseTitle} Networking`;
  const intro = override ? override.intro : `Networking environments like a ${useCaseTitle.toLowerCase()} move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered.`;
  const title = override ? override.title : `Digital Business Cards for ${useCaseTitle}`;

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
          {title}
        </h1>
        <p className="text-xl text-muted-foreground">
          Maximize your connections at your next {useCaseTitle.toLowerCase()} with a smart, trackable digital business card.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">{h2}</h2>
        <p>{intro}</p>

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
