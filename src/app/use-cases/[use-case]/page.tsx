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

const useCaseOverrides: Record<string, {
  title: string,
  desc: string,
  q1: string,
  a1: string,
  q2: string,
  a2: string,
  intro: string,
  benefit1: string,
  benefit1desc: string,
  benefit2: string,
  benefit2desc: string,
  benefit3: string,
  benefit3desc: string,
}> = {
  'trade-show': {
    title: "Digital Business Cards for Trade Shows",
    desc: "Maximize your lead generation and follow-ups at your next trade show with a smart, trackable digital business card.",
    q1: "How to use a digital business card for a Trade Show?",
    a1: "For a Trade Show, set up your digital business card to prominently feature a lead capture form, a link to your booth's specific landing page, and a calendar link for scheduling post-event demos.",
    q2: "Is a digital business card better than a physical one for a Trade Show?",
    a2: "Absolutely. Trade shows are chaotic, and physical cards easily get lost or thrown away. A digital card ensures your contact info is saved directly to attendees' phones and provides analytics on who engaged with your content.",
    intro: "Trade shows are high-stakes environments where every interaction counts. You only have a few minutes to capture attention, qualify a lead, and exchange information. A dynamic digital business card streamlines this entire process, transforming casual booth visitors into actionable leads in seconds.",
    benefit1: "Instant Lead Capture",
    benefit1desc: "Ditch the fishbowl. Use our built-in forms to collect attendee details instantly directly from your card.",
    benefit2: "Post-Event Analytics",
    benefit2desc: "Track which links attendees clicked after leaving your booth to personalize your follow-up emails.",
    benefit3: "Seamless CRM Integration",
    benefit3desc: "Export captured leads directly into your sales pipeline, saving hours of manual data entry."
  },
  'corporate-event': {
    title: "Digital Business Cards for Corporate Events",
    desc: "Elevate your professional presence and streamline networking at your next corporate event.",
    q1: "How to use a digital business card for a Corporate Event?",
    a1: "At a corporate event, customize your digital card to align with the event's theme, including links to your presentation slides, relevant company initiatives, or your specific departmental contact details.",
    q2: "Is a digital business card better than a physical one for a Corporate Event?",
    a2: "Yes. It conveys a modern, tech-savvy image and eliminates the need to carry stacks of paper cards. Plus, the ability to instantly share calendar links makes scheduling follow-up meetings incredibly efficient.",
    intro: "Corporate events require a balance of professionalism and efficiency. Whether you're attending a company-wide retreat, a partner summit, or an executive roundtable, a digital business card ensures your contact information is shared flawlessly and your professional brand is consistently represented.",
    benefit1: "Professional Branding",
    benefit1desc: "Maintain strict brand guidelines with customizable templates that reflect your company's aesthetic perfectly.",
    benefit2: "Effortless Sharing",
    benefit2desc: "Share your details via QR code, NFC, or email link in seconds, without interrupting the flow of conversation.",
    benefit3: "Dynamic Updates",
    benefit3desc: "Need to change your title or add a link to your session slides? Update your card in real-time, even during the event."
  }
};

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseKey = rawUseCase;
  const defaultTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const override = useCaseOverrides[useCaseKey];
  const useCaseTitle = override ? override.title : `Digital Business Cards for ${defaultTitle}`;
  const desc = override ? override.desc : `Maximize your connections at your next ${defaultTitle.toLowerCase()} with a smart, trackable digital business card.`;
  const q1 = override ? override.q1 : `How to use a digital business card for a ${defaultTitle}?`;
  const a1 = override ? override.a1 : `For a ${defaultTitle}, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.`;
  const q2 = override ? override.q2 : `Is a digital business card better than a physical one for a ${defaultTitle}?`;
  const a2 = override ? override.a2 : `Yes. During a busy ${defaultTitle}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`;
  const intro = override ? override.intro : `Networking environments like a ${defaultTitle.toLowerCase()} move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered.`;

  const benefit1 = override ? override.benefit1 : "Speed";
  const benefit1desc = override ? override.benefit1desc : "One scan of your QR code and your details are saved.";
  const benefit2 = override ? override.benefit2 : "Lead Capture";
  const benefit2desc = override ? override.benefit2desc : "Use our built-in forms to easily collect details from the people you meet.";
  const benefit3 = override ? override.benefit3 : "Follow-up Context";
  const benefit3desc = override ? override.benefit3desc : "See exactly who clicked what after the event to personalize your follow-ups.";

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
          {desc}
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your Networking</h2>
        <p>
          {intro}
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>{benefit1}:</strong> {benefit1desc}</li>
          <li><strong>{benefit2}:</strong> {benefit2desc}</li>
          <li><strong>{benefit3}:</strong> {benefit3desc}</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
        <p>{a1}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
        <p>{a2}</p>

        <div className="mt-12 text-center p-8 bg-muted rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Prepare for your next event</h2>
          <p className="mb-6">Create your custom digital business card in minutes.</p>
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors">
            Build Your Card
          </Link>
        </div>
      </div>
    </div>
  );
}
