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


const useCaseOverrides: Record<string, { title: string, subtitle: string, faqMap: any }> = {
  "medical-conference-digital-card": {
    title: "Digital Business Cards for Medical Conferences",
    subtitle: "Share your medical credentials, clinical research, and referral information instantly at your next medical symposium.",
    faqMap: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to use a digital business card at a medical conference?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a medical conference, include your hospital affiliations and links to published research. Share it easily by having your QR code open on your phone or printed on your badge."
          }
        },
        {
          "@type": "Question",
          "name": "Is a digital card HIPAA compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital business cards are for sharing your own professional contact details and public information, which does not contain protected health information (PHI) of patients."
          }
        }
      ]
    }
  },
  "legal-summit-digital-card": {
    title: "Digital Business Cards for Legal Summits",
    subtitle: "Exchange contact information securely and highlight your practice areas at your next legal industry event.",
    faqMap: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to use a digital business card at a legal summit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prepare your card with links to your law firm, key practice areas, and bar admissions. Use the QR code to seamlessly transfer this information to colleagues and potential clients."
          }
        },
        {
          "@type": "Question",
          "name": "Are digital business cards professional enough for lawyers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our premium templates ensure a highly professional appearance that reflects the prestige and trustworthiness expected in the legal profession."
          }
        }
      ]
    }
  }
};

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const override = useCaseOverrides[resolvedParams['use-case']];
  const pageTitle = override ? override.title : `Digital Business Cards for ${useCaseTitle}`;
  const pageSubtitle = override ? override.subtitle : `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`;

  const jsonLd = override ? override.faqMap : {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How to use a digital business card for a ${useCaseTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`
        }
      },
      {
        "@type": "Question",
        "name": `Is a digital business card better than a physical one for a ${useCaseTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`
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
          {pageTitle}
        </h1>
        <p className="text-xl text-muted-foreground">
          {pageSubtitle}
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

        <h3 className="text-2xl font-semibold mt-6 mb-2">How to use a digital business card for a {useCaseTitle}?</h3>
        <p>For a {useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Is a digital business card better than a physical one for a {useCaseTitle}?</h3>
        <p>Yes. During a busy {useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.</p>

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
