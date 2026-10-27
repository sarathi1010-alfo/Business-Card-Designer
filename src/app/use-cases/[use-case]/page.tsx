import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

const useCaseOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content?: React.ReactNode }> = {
  'tech-conference-digital-card': {
    title: "Digital Business Cards for Tech Conferences",
    description: "Optimize your networking at your next tech conference with a customized digital business card. Share GitHub links instantly and capture developer leads.",
    faqHeader: "Tech Conference Networking FAQs",
    q1: "How to use a digital business card for a Tech Conference?",
    a1: "For a tech conference, prepare your digital business card ahead of time by adding relevant links (like your GitHub, portfolio, or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.",
    q2: "Is a digital business card better than a physical one for a Tech Conference?",
    a2: "Yes. During a busy tech conference, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your repo.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Mastering Tech Conference Networking</h2>
        <p>Tech conferences move fast. Ensure your digital business card highlights your technical skills and links directly to your latest open-source projects.</p>
      </>
    )
  },
  'industry-meetup-digital-business-card': {
    title: "Digital Business Cards for Industry Meetups",
    description: "Optimize your networking at your next industry meetup with a customized digital business card. Share details instantly and capture leads.",
    faqHeader: "Industry Meetup Networking FAQs",
    q1: "How to use a digital business card for an Industry Meetup?",
    a1: "For an industry meetup, tailor your digital business card to the specific niche of the event by adding relevant case studies or portfolio pieces.",
    q2: "Is a digital business card better than a physical one for an Industry Meetup?",
    a2: "Yes. In a specialized industry meetup, a digital card allows you to share comprehensive information like whitepapers or specialized portfolios that wouldn't fit on a paper card.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Connecting at Industry Meetups</h2>
        <p>Industry meetups are highly focused. Use your digital business card to demonstrate deep expertise in your specific niche.</p>
      </>
    )
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const useCaseSlug = resolvedParams['use-case'];
  const override = useCaseOverrides[useCaseSlug];

  const rawUseCase = useCaseSlug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: override ? `${override.title} - BrandCard` : `Digital Business Card for ${useCase} - BrandCard`,
    description: override ? override.description : `Optimize your networking at your next ${useCase.toLowerCase()} with a customized digital business card. Share details instantly and capture leads.`,
    alternates: {
      canonical: `/use-cases/${useCaseSlug}`,
    }
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const useCaseSlug = resolvedParams['use-case'];
  const override = useCaseOverrides[useCaseSlug];

  const rawUseCase = useCaseSlug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
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
          {override ? override.title : `Digital Business Cards for ${useCaseTitle}`}
        </h1>
        <p className="text-xl text-muted-foreground">
          {override ? override.description : `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`}
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

        {override?.content && (
          <div className="my-8">
            {override.content}
          </div>
        )}

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
