import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const useCaseOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  "trade-show-digital-card": {
    title: "Trade Show Digital Business Cards",
    description: "Capture leads efficiently on the busy trade show floor with a trackable digital business card.",
    faqHeader: "Trade Show Networking FAQ",
    q1: "How do I share my card at a busy trade show booth?",
    a1: "Simply display your QR code on your phone, a tablet, or a printed lanyard. Visitors can scan it in one second.",
    q2: "Can I collect emails from trade show attendees?",
    a2: "Yes, our lead capture forms allow you to instantly save attendee details directly to your CRM.",
    content: (
      <>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Trade Show Survival</h3>
        <p>A trade show floor is chaotic. A digital business card ensures you never run out of cards and immediately captures the contact information of interested prospects before they walk away.</p>
      </>
    )
  },
  "job-fair-digital-business-card": {
    title: "Digital Business Cards for Job Fairs",
    description: "Stand out to recruiters at your next job fair by instantly sharing your resume and portfolio digitally.",
    faqHeader: "Job Fair FAQ",
    q1: "Should I use a digital card instead of a paper resume?",
    a1: "You should use both. Hand them a paper resume if they ask, but offer your digital card so they have an instant link to your online portfolio and LinkedIn.",
    q2: "What should I include on my job fair digital card?",
    a2: "Your professional headshot, a link to your resume PDF, your GitHub or portfolio link, and your direct contact information.",
    content: (
      <>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Impress Recruiters Instantly</h3>
        <p>Recruiters collect hundreds of papers at job fairs. A digital card ensures your profile goes straight to their phone or ATS, keeping you top of mind.</p>
      </>
    )
  }
};

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const override = useCaseOverrides[resolvedParams['use-case']];
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: override ? override.title : `Digital Business Card for ${useCase} - BrandCard`,
    description: override ? override.description : `Optimize your networking at your next ${useCase.toLowerCase()} with a customized digital business card. Share details instantly and capture leads.`,
    alternates: {
      canonical: `/use-cases/${resolvedParams['use-case']}`,
    }
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const override = useCaseOverrides[resolvedParams['use-case']];
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const q1 = override ? override.q1 : `How to use a digital business card for a ${useCaseTitle}?`;
  const a1 = override ? override.a1 : `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;
  const q2 = override ? override.q2 : `Is a digital business card better than a physical one for a ${useCaseTitle}?`;
  const a2 = override ? override.a2 : `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;

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

        {override?.content}

        <h2 className="text-3xl font-semibold mt-12 mb-6">{override ? override.faqHeader : "Frequently Asked Questions"}</h2>

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
