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
          Digital Business Cards for {useCaseTitle}
        </h1>
        <p className="text-xl text-muted-foreground">
          Maximize your connections at your next {useCaseTitle.toLowerCase()} with a smart, trackable digital business card.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your {useCaseTitle} Networking</h2>
        <p>
          Networking environments like a {useCaseTitle.toLowerCase()} move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins at {useCaseTitle}</h3>
        <p>
          In traditional networking settings, exchanging information often means fumbling for physical cards that are easily misplaced or discarded. For a {useCaseTitle.toLowerCase()}, where you might interact with dozens or hundreds of individuals, this inefficiency can result in lost opportunities. A digital approach transforms this dynamic entirely, ensuring that every connection you make is immediately actionable and securely stored.
        </p>
        <p>
          By leveraging a dynamic digital profile, you are not just sharing your contact details; you are providing a comprehensive, interactive snapshot of your professional brand. This is especially critical for a {useCaseTitle.toLowerCase()}, where providing immediate context—such as recent projects, portfolio links, or company presentations—can be the deciding factor in securing a crucial follow-up meeting.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Essential Features for Your {useCaseTitle}</h3>
        <p>
          To truly stand out, your digital presence must be optimized for the specific demands of a {useCaseTitle.toLowerCase()}. Consider integrating a prominent call-to-action (CTA) that aligns with your primary goal for the event, such as scheduling a demo or booking a consultation call directly through your calendar link.
        </p>
        <p>
          Additionally, utilizing our platform’s real-time analytics allows you to track exactly which connections engaged with your card after the event. This data empowers you to prioritize your follow-up strategy, focusing on the warmest leads who demonstrated genuine interest in your profile.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 mt-6">
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
