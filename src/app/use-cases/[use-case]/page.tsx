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

const useCaseOverrides: Record<string, { title: string, content: string, faqQ1: string, faqA1: string, faqQ2: string, faqA2: string }> = {
  "healthcare-networking-card": {
    title: "Healthcare Networking",
    content: "Networking environments in healthcare move fast, and trust is essential. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered, allowing you to highlight your credentials and medical expertise.",
    faqQ1: "How to use a digital business card for Healthcare Networking?",
    faqA1: "For Healthcare Networking, prepare your digital business card ahead of time by adding relevant links to your clinic or hospital profile and easily share it by having your unique QR code open on your phone screen.",
    faqQ2: "Is a digital business card better than a physical one for Healthcare Networking?",
    faqA2: "Yes. During a busy Healthcare Networking event, physical cards often get lost or do not convey trust. A digital card ensures your contact info goes straight into their phone and lets you highlight your credentials."
  },
  "legal-digital-business-card": {
    title: "Legal Networking",
    content: "In the legal field, professionalism and gravitas win. Networking environments move fast, and exchanging contact information efficiently is crucial. A dynamic digital business card streamlines this process and ensures you are remembered, allowing you to highlight your practice areas securely.",
    faqQ1: "How to use a digital business card for Legal Networking?",
    faqA1: "For Legal Networking, prepare your digital business card ahead of time by adding relevant links (like your practice areas or law firm website) and easily share it by having your unique QR code open.",
    faqQ2: "Is a digital business card better than a physical one for Legal Networking?",
    faqA2: "Yes. During a busy Legal Networking event, a digital card ensures your contact info is securely saved into their phone, preventing loss of vital connections."
  },
  "tech-digital-card": {
    title: "Tech Networking",
    content: "Tech networking is all about innovation and showcasing your skills. A dynamic digital business card allows you to share your GitHub, portfolio, and project links instantly with a QR code, ensuring you make a memorable impression.",
    faqQ1: "How to use a digital business card for Tech Networking?",
    faqA1: "For Tech Networking, ensure your digital business card features links to your open-source projects, personal portfolio, or LinkedIn profile. Use the QR code feature to share it instantly with other developers or recruiters.",
    faqQ2: "Is a digital business card better than a physical one for Tech Networking?",
    faqA2: "Absolutely. Tech professionals expect modern solutions. A digital business card tracks engagement and demonstrates that you are up-to-date with current technologies, unlike a paper card."
  },
  "finance-digital-card": {
    title: "Finance Networking",
    content: "In the finance industry, projecting stability and success is key. Networking events require efficient exchange of contact information. A dynamic digital business card streamlines this process, allowing you to highlight your financial services, credentials, and client success stories.",
    faqQ1: "How to use a digital business card for Finance Networking?",
    faqA1: "For Finance Networking, prepare your digital business card by adding links to your financial firm, client testimonials, and a clear value proposition. Share it via your unique QR code at conferences or meetings.",
    faqQ2: "Is a digital business card better than a physical one for Finance Networking?",
    faqA2: "Yes. A digital card provides a modern, professional edge. It ensures your contact information is accurately captured in potential clients' devices and allows you to track engagement with your profile."
  }
};

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const slug = resolvedParams['use-case'];
  const override = useCaseOverrides[slug];
  const useCaseTitle = override ? override.title : rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": override ? override.faqQ1 : `How to use a digital business card for a ${useCaseTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override ? override.faqA1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`
        }
      },
      {
        "@type": "Question",
        "name": override ? override.faqQ2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override ? override.faqA2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`
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
          Maximize your connections at your next {useCaseTitle.toLowerCase()} with a smart, trackable digital business card.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your {useCaseTitle} Networking</h2>
        <p>
          {override ? override.content : `Networking environments like a ${useCaseTitle.toLowerCase()} move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered.`}
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins at {useCaseTitle}</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Speed:</strong> One scan of your QR code and your details are saved.</li>
          <li><strong>Lead Capture:</strong> Use our built-in forms to easily collect details from the people you meet.</li>
          <li><strong>Follow-up Context:</strong> See exactly who clicked what after the event to personalize your follow-ups.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{override ? override.faqQ1 : `How to use a digital business card for a ${useCaseTitle}?`}</h3>
        <p>{override ? override.faqA1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{override ? override.faqQ2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`}</h3>
        <p>{override ? override.faqA2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`}</p>

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
