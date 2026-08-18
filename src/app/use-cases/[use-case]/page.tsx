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


const useCaseOverrides: Record<string, { h1: string }> = {
  "networking-event": { h1: "Digital Cards for Networking Events: Never Lose a Contact" },
  "conference": { h1: "Conference Digital Business Cards: Stand Out at Exhibitions" }
};

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const jsonLd = {
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
          {useCaseOverrides[rawUseCase]?.h1 || `Digital Business Cards for ${useCaseTitle}`}
        </h1>
        <p className="text-xl text-muted-foreground">
          Maximize your connections at your next {useCaseTitle.toLowerCase()} with a smart, trackable digital business card.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your {useCaseTitle} Networking</h2>
        <p>
          Networking environments like a {useCaseTitle.toLowerCase()} move incredibly fast. You often have only a few seconds to make a lasting impression and successfully exchange contact information before the conversation naturally moves on or you are interrupted. A dynamic digital business card streamlines this critical process and ensures you are remembered long after the event has concluded. When you use a digital card at a {useCaseTitle.toLowerCase()}, you eliminate the awkwardness of running out of paper cards or fumbling to find a pen. Instead, you present a sleek, instantly scannable QR code that transfers your comprehensive professional profile directly into the other person's smartphone contacts.
        </p>
        <p>
          Moreover, preparing for a {useCaseTitle.toLowerCase()} requires strategic foresight. By utilizing a digital business card, you can tailor your shared links and featured content specifically to the audience you expect to meet. For instance, you can highlight a specific project, link to a presentation you are delivering, or include a tailored lead capture form. This level of customization ensures that every interaction is highly relevant and maximizes your return on investment for attending the event. Don't leave your networking success to chance or rely on outdated analog tools; embrace digital solutions to network smarter and build stronger connections.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins at {useCaseTitle}</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Speed:</strong> One scan of your QR code and your details are saved.</li>
          <li><strong>Lead Capture:</strong> Use our built-in forms to easily collect details from the people you meet.</li>
          <li><strong>Follow-up Context:</strong> See exactly who clicked what after the event to personalize your follow-ups.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">How to use a digital business card for a {useCaseTitle}?</h3>
        <p>For a {useCaseTitle}, prepare your digital business card ahead of time by adding highly relevant links—such as a copy of your presentation, an event-specific landing page, or a special promotional offer. Practice quickly accessing your card on your phone, perhaps by saving it to your digital wallet or setting it as a widget, so you can easily share your unique QR code without interrupting the flow of conversation.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Is a digital business card better than a physical one for a {useCaseTitle}?</h3>
        <p>Absolutely. During a busy {useCaseTitle}, physical cards are frequently lost, damaged, or simply thrown away. A digital card ensures your contact info goes straight into their phone's address book immediately. Furthermore, it allows you to track analytics, seeing exactly who viewed your profile and which links they clicked, enabling highly targeted and effective post-event follow-ups.</p>

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
