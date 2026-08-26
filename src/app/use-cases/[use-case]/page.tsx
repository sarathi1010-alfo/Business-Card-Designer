import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}


const useCaseOverrides: Record<string, { title: string; description: string; faqHeader: string; q1: string; a1: string; q2: string; a2: string; content: string }> = {
  'networking-event': {
    title: 'Digital Cards for Networking Events: Never Lose a Contact',
    description: 'Optimize your networking at your next networking event with a customized digital business card. Share details instantly and capture leads.',
    faqHeader: 'Networking Event Frequently Asked Questions',
    q1: 'How to use a digital business card for a networking event?',
    a1: 'For a networking event, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.',
    q2: 'Is a digital business card better than a physical one for a networking event?',
    a2: 'Yes. During a busy networking event, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.',
    content: `
      <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your Networking Event Strategy</h2>
      <p>
        Networking environments like a networking event move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered.
        When you use a digital card, you eliminate the friction of manually entering contact details. You just display your QR code, your new contact scans it, and your profile opens instantly in their browser.
      </p>
      <p className="mt-4">
        Furthermore, paper cards are frequently misplaced, forgotten in hotel rooms, or accidentally discarded. According to recent statistics, a staggering 88% of paper business cards handed out are thrown away within a week. By digitizing your credentials, you bypass the physical limitations of paper and ensure your information lives directly in the place your contacts check most often: their smartphones. This permanent digital footprint dramatically increases the likelihood of a successful post-event connection.
      </p>
      <p className="mt-4">
        A standout feature of using a digital business card at a networking event is the ability to leverage a two-way lead capture form. Instead of just giving away your information and hoping they email you, your BrandCard can prompt the viewer to enter their own name and email directly on your profile. This transforms a passive exchange into an active lead generation opportunity. You walk away from the event not with a pocketful of flimsy paper, but with an organized, digital list of qualified leads ready for your follow-up sequence.
      </p>
      <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins at Networking Events</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Speed:</strong> One scan of your QR code and your details are saved, saving precious time in rapid-fire conversations.</li>
        <li><strong>Lead Capture:</strong> Use our built-in forms to easily collect details from the people you meet instantly.</li>
        <li><strong>Follow-up Context:</strong> See exactly who clicked what after the event to personalize your follow-ups based on analytics.</li>
        <li><strong>Eco-Friendly:</strong> Avoid the waste of ordering hundreds of paper cards that will likely end up in the trash.</li>
      </ul>
      <p>
        To maximize your success, ensure your digital card is updated before the networking event begins. Add links to your latest projects, a tailored welcome message for the event attendees, and a clear call to action, such as 'Book a 15-minute intro call.' By setting up your digital card purposefully, you position yourself as a forward-thinking professional who values efficiency and modern communication.
      </p>
    `
  },
  'conference': {
    title: 'Conference Digital Business Cards: Stand Out at Exhibitions',
    description: 'Optimize your networking at your next conference with a customized digital business card. Share details instantly and capture leads.',
    faqHeader: 'Conference Networking Frequently Asked Questions',
    q1: 'How to use a digital business card for a conference?',
    a1: 'For a conference, prepare your digital business card ahead of time by adding relevant links (like a presentation or event-specific landing page) and easily share it by having your unique QR code open on your phone screen.',
    q2: 'Is a digital business card better than a physical one for a conference?',
    a2: 'Yes. During a busy conference, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.',
    content: `
      <h2 className="text-3xl font-semibold mt-12 mb-6">Master Your Conference Networking</h2>
      <p>
        Networking environments like a conference move fast. You have seconds to make an impression and exchange contact information. A dynamic digital business card streamlines this process and ensures you are remembered among thousands of attendees.
        Whether you are walking the exhibition floor, speaking at a breakout session, or attending a VIP mixer, a digital card provides a versatile, always-accessible way to share your professional identity without lugging around stacks of paper.
      </p>
      <p className="mt-4">
        Conferences are marathon events. Attendees are bombarded with information, promotional materials, and introductions. In this high-noise environment, standing out is critical. A beautifully designed, interactive digital business card acts as a pattern interrupt. When you present a sleek QR code instead of a traditional paper card, you immediately signal that you are tech-savvy and modern. Furthermore, your digital profile can include rich media—such as embedded video pitches, slide decks from your presentations, or links to specific product demos—that a physical card simply cannot support.
      </p>
      <p className="mt-4">
        Another massive advantage of digital cards at conferences is real-time analytics. BrandCard allows you to track scans and link clicks. Imagine returning to your hotel room after a long day at the conference and being able to see exactly which contacts engaged with your profile, what links they clicked, and when they viewed them. This data empowers you to prioritize your follow-ups, reaching out first to the hottest leads who showed the most interest in your offerings. It takes the guesswork out of post-conference networking.
      </p>
      <h3 className="text-2xl font-semibold mt-10 mb-4">Why Digital Wins at Conferences</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Speed:</strong> One scan of your QR code and your details are saved, perfect for quick encounters in the hallway.</li>
        <li><strong>Lead Capture:</strong> Use our built-in forms to easily collect details from the people you meet and sync them to your CRM.</li>
        <li><strong>Follow-up Context:</strong> See exactly who clicked what after the event to personalize your follow-ups and reference specific interactions.</li>
        <li><strong>Endless Supply:</strong> You never have to worry about running out of cards halfway through a multi-day conference.</li>
      </ul>
      <p>
        To get the most out of your digital card at a conference, consider setting your QR code as your phone's lock screen wallpaper for instant access. You can also print the QR code on your conference badge or lanyard. By removing all barriers to sharing your information, you drastically increase the number of meaningful connections you can forge during the event.
      </p>
    `
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCase = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const override = useCaseOverrides[rawUseCase];
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
  const rawUseCase = resolvedParams['use-case'].replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const useCaseTitle = rawUseCase.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const overrideKey = rawUseCase;
  const override = useCaseOverrides[overrideKey];

  const pageTitle = override?.title || `Digital Business Cards for ${useCaseTitle}`;
  const pageDescription = override?.description || `Maximize your connections at your next ${useCaseTitle.toLowerCase()} with a smart, trackable digital business card.`;

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
          {pageTitle}
        </h1>
        <p className="text-xl text-muted-foreground">
          {pageDescription}
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {override ? (
          <div dangerouslySetInnerHTML={{ __html: override.content }} />
        ) : (
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
