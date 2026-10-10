import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'What is a Digital Business Card? | Complete Guide',
  description: 'Learn the fundamentals of digital business cards, how they compare to physical cards, and why you need one in 2026. Increase networking ROI.',
  path: '/blog/what-is-a-digital-business-card',
});

export default function WhatIsADigitalBusinessCardPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a digital business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A digital business card, also known as a virtual or electronic business card, is a modern, paperless way to share your professional contact information. It typically takes the form of a personalized URL, a mobile app profile, or a scannable QR code."
        }
      },
      {
        "@type": "Question",
        "name": "How does a digital business card work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital business cards work by hosting your contact details, social links, and portfolio on a dedicated web page. You can share this page via a QR code, an NFC tag, a text message, or an email signature, allowing the recipient to instantly save your information to their phone."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I need a digital business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need a digital business card because it is eco-friendly, easily updatable, and provides tracking analytics. It ensures you never run out of cards at networking events and allows for instant lead capture directly to your CRM."
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
          What is a Digital Business Card?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A concise, jargon-free definition of the modern networking tool that is replacing paper.
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-2xl font-medium mb-8">
          A digital business card is an electronic, interactive profile that stores and shares your professional contact information, social links, and portfolio in a single tap or scan.
        </p>

        <p>
          In today's fast-paced networking environment, the traditional paper business card is rapidly becoming obsolete. A digital business card (often referred to as an electronic business card, virtual business card, or smart business card) modernizes this exchange. Instead of handing someone a piece of paper that is likely to be lost or thrown away, you share a dynamic link or a QR code.
        </p>

        <p>
          This link directs the recipient to a beautifully designed, mobile-optimized landing page containing your name, title, company, phone number, email, website, and even custom calls-to-action (CTAs) like "Book a Meeting" or "Download My Resume." The shift is undeniable, with 82% of professionals preferring digital sharing over physical cards to maximize their networking ROI.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">How Does a Digital Business Card Work?</h2>

        <p>
          The mechanics of a digital business card are incredibly straightforward, focusing on friction-less sharing and instant data capture.
        </p>

        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong>Creation:</strong> You use a platform like BrandCard to input your details, choose a design template, and add interactive elements.</li>
          <li><strong>Hosting:</strong> The platform generates a unique URL (e.g., brandcard.alfo.online/your-name) where your card lives securely on the cloud.</li>
          <li><strong>Sharing:</strong> You share your card via a generated QR code on your phone screen, an NFC-enabled smart card, an email signature link, or via text message.</li>
          <li><strong>Saving:</strong> The recipient scans or clicks the link. They do not need to download an app. They can instantly view your profile and click "Save to Contacts" to download a standard VCF file directly to their phone's address book.</li>
        </ul>

        <p>
          Furthermore, advanced digital business cards include "Lead Capture" forms. When you share your card, you can prompt the recipient to enter their information in return, instantly sending their details to your email or CRM system.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Real-World Example in Real Estate</h2>

        <p>
          Consider a real estate agent hosting a busy open house. Dozens of potential buyers walk through the door. Instead of fumbling with stacks of paper cards—which the buyers will likely misplace—the agent displays a high-quality QR code on a sleek acrylic sign on the entryway table.
        </p>

        <p>
          As buyers scan the code with their smartphone cameras, they are instantly taken to the agent's digital business card. This card not only has the agent's contact info but also includes a gallery of the property they are viewing, links to other current listings, and a calendar link to book a private showing. It transforms a simple contact exchange into an immersive, interactive marketing experience.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Digital vs. Physical Business Cards</h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="p-4 border font-semibold">Feature</th>
                <th className="p-4 border font-semibold">Digital Business Card</th>
                <th className="p-4 border font-semibold">Physical Business Card</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border font-medium">Updates</td>
                <td className="p-4 border">Instant and free across all shared links.</td>
                <td className="p-4 border">Requires reprinting and discarding old stock.</td>
              </tr>
              <tr>
                <td className="p-4 border font-medium">Eco-Friendly</td>
                <td className="p-4 border">100% paperless and sustainable.</td>
                <td className="p-4 border">Contributes to deforestation and waste.</td>
              </tr>
              <tr>
                <td className="p-4 border font-medium">Analytics</td>
                <td className="p-4 border">Track views, link clicks, and engagement.</td>
                <td className="p-4 border">Zero tracking capabilities.</td>
              </tr>
              <tr>
                <td className="p-4 border font-medium">Interactivity</td>
                <td className="p-4 border">Clickable links, videos, and calendar booking.</td>
                <td className="p-4 border">Static text only.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-10">
          <h3 className="text-xl font-bold mb-4 text-primary">Key Takeaways for Modern Professionals</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Digital cards are dynamic, interactive profiles, not just static images.</li>
            <li>They allow for instant saving to a smartphone's contact book via VCF.</li>
            <li>They enable two-way networking through integrated lead capture forms.</li>
            <li>They provide actionable analytics to measure your networking success.</li>
            <li>They are highly adaptable for any industry, from real estate to tech startups.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Do recipients need an app to view my digital business card?</h3>
            <p>No. Modern digital business cards open directly in the smartphone's native web browser (like Safari or Chrome). This frictionless experience is crucial for high conversion rates.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Are digital business cards secure?</h3>
            <p>Yes. Reputable platforms use secure hosting and give you control over what information is public. You only share the information you choose to put on your card.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Can I use a digital business card if I still want to use paper?</h3>
            <p>Absolutely. Many professionals use a hybrid approach. You can print the QR code of your digital business card onto a physical card, giving the recipient the option to scan and save your details instantly while still handing them a physical memento.</p>
          </div>
        </div>

      </div>

      <div className="mt-12 pt-8 border-t">
        <h3 className="text-lg font-semibold mb-4">Related Reading</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/ultimate-guide-digital-business-cards-2026" className="text-primary hover:underline">
              Ultimate Guide to Digital Business Cards 2026
            </Link>
          </li>
          <li>
            <Link href="/blog/digital-vs-physical-business-cards" className="text-primary hover:underline">
              Digital vs Physical Business Cards: Which is Better?
            </Link>
          </li>
          <li>
            <Link href="/templates/minimalist-digital-business-card" className="text-primary hover:underline">
              Explore Minimalist Templates
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
