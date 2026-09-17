import React from 'react';
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

const useCaseOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  "trade-show-digital-business-card": {
    title: "Digital Business Cards for Trade Shows",
    description: "Maximize lead generation and networking at your next trade show with a professional digital business card.",
    faqHeader: "Trade Show Networking FAQ",
    q1: "Why use a digital card at a trade show?",
    a1: "Trade shows are fast-paced. A digital card lets you share your info instantly via QR code and capture leads directly into your CRM.",
    q2: "What should I include on my trade show digital card?",
    a2: "Include your booth number, product brochures, direct booking links for demos, and a clear call-to-action.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Dominate the Trade Show Floor</h2>
        <p>
          At a busy trade show, paper cards easily get lost in the shuffle. A digital business card ensures you make a lasting impression and seamlessly capture lead information right on the convention floor.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">The Trade Show Advantage</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Instant Lead Capture:</strong> Ditch the fishbowl. Use our integrated forms to gather attendee details on the spot.</li>
          <li><strong>Resource Sharing:</strong> Link directly to product catalogs, demo videos, and pricing sheets directly from your profile.</li>
          <li><strong>Post-Show Analytics:</strong> See exactly who viewed your card and clicked your links after the event ends, enabling highly targeted follow-ups.</li>
        </ul>
      </>
    )
  },
  "job-fair-digital-card": {
    title: "Digital Business Cards for Job Fairs",
    description: "Stand out to recruiters and hiring managers at job fairs with a dynamic digital business card.",
    faqHeader: "Job Fair Networking FAQ",
    q1: "Can a digital card replace my resume at a job fair?",
    a1: "While it doesn't replace a full resume, it's the perfect companion. It instantly provides recruiters with your contact info, LinkedIn profile, and a direct link to your digital portfolio.",
    q2: "How do I share my digital card with a recruiter?",
    a2: "Simply have your unique QR code open on your phone or tablet. The recruiter can scan it with their camera to instantly save your details.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Make Your Next Career Move</h2>
        <p>
          Job fairs are highly competitive. A digital business card sets you apart from the stack of paper resumes, showcasing your tech-savviness and professionalism the moment you meet a recruiter.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Why Job Seekers Need Digital Cards</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Instant Portfolio Access:</strong> Link recruiters directly to your GitHub, Behance, or personal website to showcase your work immediately.</li>
          <li><strong>Always Up-to-Date:</strong> Notice a typo on your resume? Your digital card can be updated instantly, ensuring you always present your best self.</li>
          <li><strong>Memorable Follow-ups:</strong> Stand out in their inbox by sharing your custom digital card link in your post-fair thank you email.</li>
        </ul>
      </>
    )
  }
};

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams['use-case'];
  const override = useCaseOverrides[slug];

  const rawUseCase = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const fallbackTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const useCaseTitle = override ? override.title : `Digital Business Cards for ${fallbackTitle}`;
  const description = override ? override.description : `Maximize your connections at your next ${fallbackTitle.toLowerCase()} with a smart, trackable digital business card.`;
  const faqHeader = override ? override.faqHeader : "Frequently Asked Questions";

  const q1 = override ? override.q1 : `How to use a digital business card for a ${fallbackTitle}?`;
  const a1 = override ? override.a1 : `For a ${fallbackTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;
  const q2 = override ? override.q2 : `Is a digital business card better than a physical one for a ${fallbackTitle}?`;
  const a2 = override ? override.a2 : `Yes. During a busy ${fallbackTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;

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
          {useCaseTitle}
        </h1>
        <p className="text-xl text-muted-foreground">
          {description}
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {override?.content ? (
          override.content
        ) : (
          <>
            <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your {fallbackTitle} Networking</h2>
            <p>
              Networking environments like a {fallbackTitle.toLowerCase()} move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered.
            </p>

            <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins at {fallbackTitle}</h3>
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
          <h2 className="text-2xl font-bold mb-4">Prepare for your next {fallbackTitle.toLowerCase()}</h2>
          <p className="mb-6">Create your custom digital business card in minutes.</p>
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors">
            Build Your Card
          </Link>
        </div>
      </div>
    </div>
  );
}
