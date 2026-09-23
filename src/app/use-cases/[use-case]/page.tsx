import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

const useCaseOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  'medical-conference-digital-card': {
    title: 'Digital Business Cards for Medical Conferences',
    description: 'Optimize your networking at medical conferences with a HIPAA-compliant, professional digital business card.',
    faqHeader: 'Medical Conference Networking FAQs',
    q1: 'Why use a digital card at a medical conference?',
    a1: 'Medical conferences are fast-paced and require sharing complex information like research papers, practice details, and secure contact info. A digital card handles this seamlessly.',
    q2: 'Can I include links to my publications?',
    a2: 'Absolutely. A digital business card allows you to link directly to PubMed, Google Scholar, or your personal research portfolio.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Networking in Healthcare and Medicine</h2>
        <p>
          Medical conferences are essential for staying up-to-date with the latest research, meeting peers, and finding new opportunities. However, exchanging physical cards often leads to lost connections or outdated information.
          A digital business card designed specifically for medical professionals ensures your credentials, practice details, and research are always accessible.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Key Features for Medical Professionals</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Secure Information Sharing:</strong> Ensure your contact methods align with your practice's privacy standards.</li>
          <li><strong>Research Links:</strong> Easily direct peers to your latest peer-reviewed publications.</li>
          <li><strong>Practice Details:</strong> Share your clinic's location, hours, and specialty instantly.</li>
        </ul>
        <p>
          By adopting a digital approach at your next medical conference, you position yourself as a modern, efficient practitioner or researcher, ready to collaborate.
        </p>
      </>
    )
  },
  'legal-networking-digital-card': {
    title: 'Digital Business Cards for Legal Networking',
    description: 'Elevate your legal practice and networking with a secure, professional digital business card.',
    faqHeader: 'Legal Networking FAQs',
    q1: 'Is a digital business card professional enough for a lawyer?',
    a1: 'Yes. Modern digital business cards offer conservative, premium templates that convey authority and trust, which are critical in the legal profession.',
    q2: 'How can a digital card help me acquire clients?',
    a2: 'By integrating a secure lead capture form or a direct link to your consultation scheduling system, a digital card turns a brief interaction into a booked meeting.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Modernizing Legal Networking</h2>
        <p>
          The legal profession is built on trust, authority, and confidentiality. While traditional paper cards have been the standard for decades, they offer no tracking, no immediate actionability, and are easily lost.
          A digital business card allows lawyers to present a pristine, professional image while offering immediate ways for potential clients or partners to connect.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Why Lawyers Need Digital Cards</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Instant Authority:</strong> Link directly to your firm's profile, your specific practice areas, and past case studies or publications.</li>
          <li><strong>Seamless Scheduling:</strong> Include a link to book a confidential consultation right from the card.</li>
          <li><strong>Analytics:</strong> See when someone views your card, helping you time your follow-up perfectly.</li>
        </ul>
        <p>
          Whether you are at a bar association event or meeting a prospective client, a digital business card ensures you leave a memorable, professional, and actionable impression.
        </p>
      </>
    )
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams['use-case'];
  const override = useCaseOverrides[slug];
  const rawUseCase = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: override?.title || `Digital Business Card for ${useCase} - BrandCard`,
    description: override?.description || `Optimize your networking at your next ${useCase.toLowerCase()} with a customized digital business card. Share details instantly and capture leads.`,
    alternates: {
      canonical: `/use-cases/${resolvedParams['use-case']}`,
    }
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams['use-case'];
  const override = useCaseOverrides[slug];
  const rawUseCase = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const q1 = override?.q1 || `How to use a digital business card for a ${useCaseTitle}?`;
  const a1 = override?.a1 || `For a ${useCaseTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;
  const q2 = override?.q2 || `Is a digital business card better than a physical one for a ${useCaseTitle}?`;
  const a2 = override?.a2 || `Yes. During a busy ${useCaseTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;
  const faqHeader = override?.faqHeader || 'Frequently Asked Questions';

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
          {override?.title || `Digital Business Cards for ${useCaseTitle}`}
        </h1>
        <p className="text-xl text-muted-foreground">
          {override?.description || `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`}
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {override?.content ? override.content : (
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
