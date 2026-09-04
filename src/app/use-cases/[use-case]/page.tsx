import { Metadata } from 'next';
import Link from 'next/link';


export const useCaseOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: string }> = {
  'trade-show-digital-card': {
    title: 'Trade Show',
    description: 'Maximize your ROI at trade shows with a digital business card that captures leads instantly and automatically categorizes contacts.',
    faqHeader: 'Trade Show Networking FAQs',
    q1: 'Why are digital business cards better for trade shows?',
    a1: 'At trade shows, attendees collect hundreds of paper cards that end up in the trash. A digital card ensures your contact info is immediately saved to their phone and allows you to capture their details via a lead form instantly.',
    q2: 'Can I add specific product links for the trade show?',
    a2: 'Yes, you can customize your digital card to feature specific product brochures, demo videos, or landing pages relevant specifically to the trade show you are attending.',
    content: '<p>Trade shows are high-energy, fast-paced environments where every second counts. Fumbling with paper cards or running out of them midway through the event can cost you valuable leads. A digital business card designed for trade shows transforms your smartphone into a powerful lead-generation tool.</p><p>By having attendees scan your QR code, you eliminate manual data entry. Furthermore, by utilizing our built-in lead capture forms, you can instantly collect their information directly into your CRM. Prepare for your next exhibition by creating a custom card featuring links to your trade show specials, product demos, and booking calendar for post-show follow-ups.</p>'
  },
  'medical-conference-digital-business-card': {
    title: 'Medical Conference',
    description: 'Network securely and efficiently at medical conferences with a digital business card designed for healthcare professionals.',
    faqHeader: 'Medical Conference Networking FAQs',
    q1: 'How do digital cards help at medical conferences?',
    a1: 'They allow healthcare professionals, researchers, and pharmaceutical reps to instantly share contact details, published papers, and clinic information via a simple, hygienic QR code scan.',
    q2: 'Can I link to my published research?',
    a2: 'Yes, medical professionals frequently use their digital business cards to link directly to their PubMed articles, clinical trial data, or professional portfolios.',
    content: '<p>Networking at medical conferences requires a balance of professionalism, efficiency, and increasingly, hygiene. Digital business cards offer a contactless way to exchange information with peers, researchers, and industry representatives. Instead of exchanging physical items, a quick scan of a QR code seamlessly transfers your professional profile to their device.</p><p>For medical professionals, this digital profile can be customized to include links to your recent publications, your clinic’s website, or your academic credentials. This targeted approach ensures that the connections you make at a conference have immediate access to your professional background, facilitating better collaboration and post-conference communication.</p>'
  }
};

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const override = useCaseOverrides[resolvedParams['use-case']];

  return {
    title: override ? `Digital Business Card for ${override.title} - BrandCard` : `Digital Business Card for ${useCase} - BrandCard`,
    description: override ? override.description : `Optimize your networking at your next ${useCase.toLowerCase()} with a customized digital business card. Share details instantly and capture leads.`,
    alternates: {
      canonical: `/use-cases/${resolvedParams['use-case']}`,
    }
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');

  const override = useCaseOverrides[resolvedParams['use-case']];
  const useCaseTitle = override ? override.title : rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const q1 = override ? override.q1 : `How to use a digital business card for a ${useCaseTitle}?`;
  const a1 = override ? override.a1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;
  const q2 = override ? override.q2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`;
  const a2 = override ? override.a2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;
  const faqHeader = override ? override.faqHeader : "Frequently Asked Questions";
  const pageContent = override ? override.content : null;

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
          Maximize your connections at your next {useCaseTitle.toLowerCase()} with a smart, trackable digital business card.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {pageContent ? (
          <div dangerouslySetInnerHTML={{ __html: pageContent }} />
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
