import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Why Do I Need a Digital Business Card in 2026?',
  description: 'Discover the compelling reasons why every modern professional needs a digital business card, from cost savings to superior networking analytics.',
  path: '/blog/why-do-i-need-a-digital-business-card',
});

export default function WhyDoINeedOnePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do I need a digital business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need a digital business card because it ensures your contacts can save your information instantly without manual data entry, allows you to update your details in real-time, and provides analytics to measure your networking success."
        }
      },
      {
        "@type": "Question",
        "name": "Do digital business cards save money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While premium software has a small subscription cost, you eliminate the recurring expense of designing, printing, shipping, and ultimately discarding traditional paper cards whenever a detail changes."
        }
      }
    ]
  };

  return (
    <article className="container mx-auto py-12 px-4 sm:px-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-primary">
          Why Do I Need a Digital Business Card?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The practical, economic, and strategic reasons why paper cards are holding your career back.
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-2xl font-medium mb-8">
          If you are still handing out paper business cards, you are inadvertently creating work for the people you want to impress. In 2026, the question isn't whether digital cards are a neat gadget; the question is whether you can afford the friction paper cards create.
        </p>

        <p>
          Here are the primary reasons why transitioning to a digital business card is a non-negotiable step for modern professionals.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">1. Zero-Friction Contact Saving</h2>

        <p>
          When you hand someone a paper card, you are giving them a homework assignment. They have to remember to take it out of their pocket later, open their phone, type in your name, triple-check the spelling of your email, and save it.
        </p>
        <p>
          With a digital business card, they scan a QR code and press one button: "Save to Contacts." The friction drops to zero. This exponentially increases the likelihood that your contact information actually makes it into their phone, which is the entire point of networking.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">2. Real-Time Updates (Never Reprint Again)</h2>

        <p>
          Got a promotion? Changed your phone number? Company rebranded? If you use paper cards, your current stack is now garbage. You have to order new ones and wait two weeks for shipping.
        </p>
        <p>
          With a digital card, you log into your dashboard, update the text, and hit save. The change is instantly propagated to your live URL. Anyone who scans your existing QR code from that moment on will see the updated information.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">3. The Power of Analytics</h2>

        <p>
          How many of the 50 paper cards you handed out at the last conference were actually looked at? You have no idea.
        </p>
        <p>
          Digital business cards provide analytics. You can see how many times your card was viewed, what links were clicked, and where your audience is located. This data allows you to refine your networking strategy. If no one is clicking your portfolio link, perhaps you need to move it higher up on your digital card layout.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">4. Eco-Friendly Branding</h2>

        <p>
          Over 10 billion business cards are printed annually, and 88% are thrown away within a week. That is a staggering amount of waste. By switching to a digital card, you instantly reduce your carbon footprint. Furthermore, communicating to potential clients that you run a modern, paperless operation reflects positively on your brand values.
        </p>

      </div>

      <div className="mt-12 pt-8 border-t">
        <h3 className="text-lg font-semibold mb-4">Related Reading</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/digital-vs-physical-business-cards" className="text-primary hover:underline">
              Digital vs Physical Business Cards
            </Link>
          </li>
          <li>
            <Link href="/blog/ultimate-guide-digital-business-cards-2026" className="text-primary hover:underline">
              The Ultimate Guide to Digital Business Cards
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
