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

const useCaseOverrides: Record<string, { title: string; description: string; faqHeader: string; q1: string; a1: string; q2: string; a2: string; content: React.ReactNode }> = {
  "trade-show-digital-business-card": {
    title: "Digital Business Cards for Trade Shows",
    description: "Maximize your lead generation at trade shows with a smart digital business card. Instantly capture details from hundreds of booth visitors.",
    faqHeader: "Frequently Asked Questions about Trade Show Networking",
    q1: "How to use a digital business card for a Trade Show?",
    a1: "For a trade show, embed your product catalogs, demo videos, and a lead capture form directly into your digital card. Display your QR code at your booth for passive lead generation.",
    q2: "Is a digital business card better than a physical one for a Trade Show?",
    a2: "Yes. Physical cards exchanged at trade shows often end up in a drawer. A digital card ensures your contact info is saved on the attendee's phone and automatically syncs their details to your CRM.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your Trade Show Networking</h2>
        <p>
          Trade shows are high-stakes networking environments. As an exhibitor or attendee, you are interacting with hundreds of people in a very short window. Relying on paper cards means you are hoping the other person will manually type your details into their system later. A dynamic digital business card streamlines this process, ensuring you are remembered and your data is captured immediately.
        </p>
        <p>
          Instead of running out of cards halfway through the event, your digital card is infinite. Furthermore, by linking directly to your trade show special offers or product demos, you provide immediate value to every person you meet.
        </p>
      </>
    )
  },
  "job-fair-digital-business-card": {
    title: "Digital Business Cards for Job Fairs",
    description: "Stand out to recruiters at your next job fair with a comprehensive digital business card linked directly to your resume and portfolio.",
    faqHeader: "Frequently Asked Questions about Job Fair Networking",
    q1: "How to use a digital business card for a Job Fair?",
    a1: "For a job fair, customize your digital card to feature a professional headshot, a direct link to your PDF resume, your LinkedIn profile, and a brief summary of your career goals.",
    q2: "Is a digital business card better than a physical one for a Job Fair?",
    a2: "Yes. Recruiters leave job fairs with hundreds of paper resumes. By offering a digital card, you ensure they have your information saved instantly, and you can track if they click your portfolio link later.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your Job Fair Networking</h2>
        <p>
          Job fairs are incredibly competitive. You have mere minutes to make an impression on a recruiter before they move on to the next candidate. While handing over a paper resume is standard practice, supplementing it with a digital business card instantly sets you apart as a modern, tech-savvy professional.
        </p>
        <p>
          Your digital card acts as a centralized hub for your professional identity. When a recruiter scans your QR code, they aren&apos;t just getting your phone number; they are getting immediate access to your GitHub, your design portfolio, or your published articles, providing them with immediate context on your capabilities.
        </p>
      </>
    )
  }
};

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const useCaseSlug = resolvedParams['use-case'];
  const rawUseCase = useCaseSlug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const override = useCaseOverrides[useCaseSlug];

  const pageTitle = override ? override.title : `Digital Business Cards for ${useCaseTitle}`;
  const pageDesc = override ? override.description : `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`;
  const pageFaqHeader = override ? override.faqHeader : "Frequently Asked Questions";

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
          {pageTitle}
        </h1>
        <p className="text-xl text-muted-foreground">
          {pageDesc}
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {override ? (
          override.content
        ) : (
          <>
            <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your {useCaseTitle} Networking</h2>
            <p>
              Networking environments like a {useCaseTitle.toLowerCase()} move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered.
            </p>
          </>
        )}

        <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins at {useCaseTitle}</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Speed:</strong> One scan of your QR code and your details are saved.</li>
          <li><strong>Lead Capture:</strong> Use our built-in forms to easily collect details from the people you meet.</li>
          <li><strong>Follow-up Context:</strong> See exactly who clicked what after the event to personalize your follow-ups.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">{pageFaqHeader}</h2>

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
