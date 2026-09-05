import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';


const useCaseOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  'tech-meetup-digital-card': {
    title: 'Digital Cards for Tech Meetups',
    description: 'Optimize your networking at your next tech meetup with a customized digital business card. Share details instantly and capture leads.',
    faqHeader: 'Tech Meetup Networking FAQs',
    q1: 'How to use a digital business card at a tech meetup?',
    a1: 'Keep your QR code readily available on your phone screen or smartwatch. When you connect with a fellow developer or founder, simply have them scan it to instantly share your GitHub, portfolio, and contact details.',
    q2: 'Is a digital business card better than a physical one for a tech meetup?',
    a2: 'Absolutely. Tech professionals prefer digital solutions. A digital card allows you to share clickable links to your repositories and LinkedIn, which is impossible with paper cards.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Navigating Tech Meetups with Ease</h2>
        <p>Tech meetups are fast-paced environments filled with developers, designers, founders, and investors. Traditional paper business cards often feel outdated in these settings and are easily lost. A digital business card tailored for a tech meetup allows you to share your most relevant professional information—like your GitHub profile, technical blog, and LinkedIn—instantly and securely.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Showcase Your Stack and Projects</h3>
        <p>When networking at a tech event, people want to know what you build. A digital business card allows you to include direct links to your latest projects, open-source contributions, or your personal website. This immediate access provides a much richer understanding of your skills than a simple job title on a piece of paper.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Effortless Follow-Up</h3>
        <p>After a busy meetup, following up with new contacts can be a chore. With a digital business card, the people you meet can instantly save your contact details directly to their phone's address book. Furthermore, if you utilize lead capture features, you can collect their information on the spot, making your post-event follow-up organized and highly effective.</p>
      </>
    )
  },
  'trade-show-digital-business-card': {
    title: 'Trade Show Digital Business Cards',
    description: 'Maximize your ROI at your next trade show with a smart, trackable digital business card that captures leads instantly.',
    faqHeader: 'Trade Show Networking FAQs',
    q1: 'How to use a digital business card at a trade show?',
    a1: 'Display your QR code on your booth signage, wear it on a lanyard, or have it ready on your mobile device to quickly capture leads and share product information.',
    q2: 'Is a digital business card better than a physical one for a trade show?',
    a2: 'Yes. It eliminates the cost and hassle of printing thousands of paper cards, allows for instant lead capture, and provides analytics on how many attendees viewed your information.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Revolutionizing Trade Show Lead Capture</h2>
        <p>Trade shows are high-stakes environments where maximizing lead capture is critical. Exchanging physical business cards is slow, prone to errors, and makes follow-up difficult. A digital business card transforms your networking approach, allowing you to quickly share your company's promotional materials, product catalogs, and your direct contact information with a single scan.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Streamlined Data Collection</h3>
        <p>The true power of a digital business card at a trade show lies in its ability to capture data. Instead of collecting a stack of physical cards that need to be manually entered into a CRM, you can use your digital card's built-in lead capture form. Attendees can input their information directly into your digital interface, ensuring accurate and immediate data collection.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Trackable Engagement Metrics</h3>
        <p>Understanding your ROI from a trade show is notoriously difficult. Digital business cards offer built-in analytics. You can track exactly how many times your card was scanned, which links were clicked the most (such as a specific product brochure or a demo booking link), and use this data to refine your strategy for future events.</p>
      </>
    )
  }
};


interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams['use-case'];
  const override = useCaseOverrides[slug];

  const rawUseCase = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: override ? override.title : `Digital Business Card for ${useCase} - BrandCard`,
    description: override ? override.description : `Optimize your networking at your next ${useCase.toLowerCase()} with a customized digital business card. Share details instantly and capture leads.`,
    alternates: {
      canonical: `/use-cases/${slug}`,
    }
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams['use-case'];
  const override = useCaseOverrides[slug];

  const rawUseCase = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const title = override ? override.title : `Digital Business Cards for ${useCaseTitle}`;
  const desc = override ? override.description : `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`;
  const faqHeader = override ? override.faqHeader : "Frequently Asked Questions";
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
          {title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {desc}
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {!override && (
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

        {override && override.content && (
          <div className="mb-12">
            {override.content}
          </div>
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
