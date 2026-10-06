import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

const useCaseOverrides: Record<string, {
  title: string;
  description: string;
  faqHeader: string;
  q1: string;
  a1: string;
  q2: string;
  a2: string;
  content: React.ReactNode;
}> = {
  'networking-event-digital-card': {
    title: 'Digital Cards for Networking Events',
    description: 'Never lose a contact again. Transform your networking event strategy with a dynamic digital business card. Share details instantly and capture leads.',
    faqHeader: 'Networking Event Digital Card FAQs',
    q1: 'Why use a digital card at a networking event?',
    a1: 'Digital cards allow you to instantly share your profile, save contacts directly to their phone, and gather leads automatically without dealing with stacks of paper cards.',
    q2: 'How do I share my digital card at a busy event?',
    a2: 'Simply open your BrandCard QR code on your phone screen and have the other person scan it with their camera. It takes two seconds.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Never Lose a Contact at Your Next Event</h2>
        <p>
          Networking events are fast-paced. You are constantly shaking hands and exchanging pleasantries. Relying on paper cards means your details might get lost in the shuffle. A digital card ensures your contact info is saved immediately into the recipient&apos;s phone, preventing lost opportunities and helping you stand out.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Core Features for Events</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Instant QR Sharing:</strong> Your QR code works anywhere, no app required.</li>
          <li><strong>Lead Capture:</strong> Let your new connection type their email into your card to automatically save their info.</li>
          <li><strong>Scan Analytics:</strong> See exactly how many people saved your card after the event.</li>
        </ul>
        <p>
          By upgrading your networking strategy, you are guaranteed to get more value out of every conversation.
        </p>
      </>
    )
  },
  'conference-digital-business-card': {
    title: 'Conference Digital Business Cards',
    description: 'Stand out at exhibitions and conferences. Share your professional portfolio instantly and track your networking performance.',
    faqHeader: 'Conference Networking FAQs',
    q1: 'Is a digital business card better than a physical one for a conference?',
    a1: 'Yes. During a busy conference, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.',
    q2: 'What should I link to on my conference digital card?',
    a2: 'Link to your calendar for booking meetings, your latest case studies, presentation slides, or a specific landing page for the conference.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Stand Out at Exhibitions and Conferences</h2>
        <p>
          Conferences are overwhelming. Attendees are bombarded with information and paper handouts. To ensure you remain memorable, you need a smart, trackable digital business card. BrandCard allows you to embed links to your presentation, product demo, or calendar scheduling tool, right inside your contact card.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins at Conferences</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Dynamic Updates:</strong> Update your links in real-time if your booth location or schedule changes.</li>
          <li><strong>Rich Media:</strong> Embed videos or PDFs directly in your profile.</li>
          <li><strong>Follow-up Context:</strong> See exactly who clicked what after the event to personalize your follow-ups.</li>
        </ul>
        <p>
          Don&apos;t just attend the conference; dominate the networking floor with a professional, interactive digital presence.
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
    title: override ? `${override.title} - BrandCard` : `Digital Business Card for ${useCase} - BrandCard`,
    description: override ? override.description : `Optimize your networking at your next ${useCase.toLowerCase()} with a customized digital business card. Share details instantly and capture leads.`,
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
        {override ? override.content : (
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

        <h2 className="text-3xl font-semibold mt-12 mb-6">{override ? override.faqHeader : 'Frequently Asked Questions'}</h2>

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
