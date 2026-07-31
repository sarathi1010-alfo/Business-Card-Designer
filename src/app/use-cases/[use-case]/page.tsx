import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}


const useCaseOverrides: Record<string, { title: string, subtitle: string, content: string, q1: string, a1: string, q2: string, a2: string }> = {
  'trade-show': {
    title: 'Trade Shows',
    subtitle: 'Maximize your lead generation at large trade shows.',
    content: 'Trade shows are high-traffic environments where efficiency is key. A digital business card allows you to seamlessly share your contact details and marketing materials, ensuring no potential lead falls through the cracks amidst the hustle. Trade shows are high-traffic environments where efficiency is key. A digital business card allows you to seamlessly share your contact details and marketing materials, ensuring no potential lead falls through the cracks amidst the hustle.',
    q1: 'How do digital cards help at trade shows?',
    a1: 'They allow instant sharing via QR codes, helping you quickly exchange info without running out of paper cards.',
    q2: 'Can I capture leads at a trade show?',
    a2: 'Yes, our platform includes a built-in lead capture form to gather prospects directly to your CRM.'
  },
  'sales-pitch': {
    title: 'Sales Pitches',
    subtitle: 'Leave a lasting impression after every sales pitch.',
    content: 'A successful sales pitch requires a memorable follow-up. Sharing a digital business card provides your prospects with a comprehensive, professional summary of your offering, complete with clickable links to presentations, demos, and your direct contact information, accelerating the sales cycle.',
    q1: 'What should a sales pitch digital card include?',
    a1: 'It should include your direct contact info, a link to your calendar for booking follow-ups, and key presentation materials.',
    q2: 'Does it look professional?',
    a2: 'Absolutely. A well-designed digital card signals that you are modern, organized, and tech-savvy.'
  }
};

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

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const override = useCaseOverrides[rawUseCase];
  const useCaseTitle = override ? override.title : rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const subtitle = override ? override.subtitle : `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `${override ? override.q1 : `How to use a digital business card for a ${useCaseTitle}?`}`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${override ? override.a1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`}`
        }
      },
      {
        "@type": "Question",
        "name": `${override ? override.q2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`}`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${override ? override.a2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`}`
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
          {subtitle}
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
