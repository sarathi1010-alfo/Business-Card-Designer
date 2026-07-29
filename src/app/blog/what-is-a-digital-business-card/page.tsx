import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a Digital Business Card? | Complete 2026 Guide",
  description: "Learn what a digital business card is, how it works, and why it's the future of professional networking. Replace your paper cards today.",
};

export default function WhatIsDigitalBusinessCard() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is a Digital Business Card? | Complete 2026 Guide",
    "description": "Learn what a digital business card is, how it works, and why it's the future of professional networking.",
    "author": {
      "@type": "Organization",
      "name": "BrandCard"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BrandCard"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://brandcard.alfo.online/blog/what-is-a-digital-business-card"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a digital business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A digital business card is an online profile that contains all your professional contact information, social links, and interactive elements, designed to be easily shared via a link, QR code, or NFC tag."
        }
      },
      {
        "@type": "Question",
        "name": "How does a digital business card work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It works by hosting your details on a centralized page. When you share the link or someone scans your QR code, they are directed to this page where they can save your contact details directly to their phone."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I need a digital business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It saves money on printing, allows for instant updates, tracks sharing analytics, and provides an interactive experience that physical cards cannot match."
        }
      }
    ]
  };

  return (
    <article className="container mx-auto py-12 px-4 sm:px-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary">
          What is a Digital Business Card? (Direct Question)
        </h1>
        <p className="text-xl text-muted-foreground">
          The concise, jargon-free definition and why it is essential for modern networking.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          A digital business card is an interactive online profile that consolidates all your professional information—contact details, social media links, portfolios, and even lead capture forms—into a single, easily shareable link or QR code. Unlike physical cards that get lost or outdated, a digital card lives on the web or in an app, ensuring your network always has your most current information at their fingertips.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">How Does a Digital Business Card Work?</h2>
        <p>
          The mechanics of a digital business card are straightforward but powerful. You create your profile using a platform like BrandCard, adding your details and customizing the design. The platform then generates a unique URL and a corresponding QR code.
        </p>
        <p>
          When you meet someone, you can share your card in several ways:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>QR Code Scan:</strong> Have them scan the QR code on your phone screen.</li>
          <li><strong>Text or Email:</strong> Send the link directly to their device.</li>
          <li><strong>NFC Tags:</strong> Tap an NFC-enabled device to instantly transmit your card&apos;s link to their phone.</li>
          <li><strong>Social Media Bios:</strong> Place the link in your Instagram, Twitter, or LinkedIn bio.</li>
        </ul>
        <p>
          Upon accessing your card, the recipient can usually save your contact information directly to their phone&apos;s address book with a single click—eliminating the friction of manual data entry.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Real-World Example in Real Estate</h2>
        <p>
          Imagine a real estate agent hosting an open house. Instead of handing out paper cards that end up in the trash, the agent displays a dynamic QR code on a standee. Visitors scan the code and are instantly taken to the agent&apos;s digital business card.
        </p>
        <p>
          This card doesn&apos;t just have a phone number; it features a lead capture form asking for their home-buying preferences, links to other active listings, and a calendar integration to book a private viewing. The agent can also use the analytics to see how many people saved their contact info, making follow-ups more targeted and effective.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Digital Business Card vs. Traditional Website</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Feature</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Digital Business Card</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Traditional Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">Primary Purpose</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Instant networking and contact sharing</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Comprehensive brand or company information</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">Setup Time</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Minutes (using <Link href="/" className="text-primary hover:underline font-medium">platforms like BrandCard</Link>)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Days to Weeks</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">Key Action</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">&quot;Save to Contacts&quot; button</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Navigation and content consumption</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">Cost</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Often free or low-cost subscription</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Hosting, domain, and development costs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
            Whether you choose a digital card or a website, starting with a strong design is crucial. You can explore various <Link href="/templates" className="text-primary hover:underline font-medium">professional templates</Link> to find a design that fits your brand.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">What is a digital business card?</h3>
            <p className="text-muted-foreground">A digital business card is an online profile that contains all your professional contact information, social links, and interactive elements, designed to be easily shared via a link, QR code, or NFC tag.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">How does a digital business card work?</h3>
            <p className="text-muted-foreground">It works by hosting your details on a centralized page. When you share the link or someone scans your QR code, they are directed to this page where they can save your contact details directly to their phone.</p>
          </div>
           <div>
            <h3 className="font-semibold text-lg">Why do I need a digital business card?</h3>
            <p className="text-muted-foreground">It saves money on printing, allows for instant updates, tracks sharing analytics, and provides an interactive experience that physical cards cannot match.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
