import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'How Does a Digital Business Card Work? | The Mechanics',
  description: 'Understand the technical mechanics behind digital business cards. Learn how vCards, QR codes, and NFC technology work together for instant networking.',
  path: '/blog/how-does-a-digital-business-card-work',
});

export default function HowDoesItWorkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does a digital business card work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A digital business card works by hosting your contact details on a mobile-friendly web page. When shared via a QR code, NFC tap, or link, the recipient's phone opens the page, allowing them to download your contact info directly as a vCard (.vcf) file."
        }
      },
      {
        "@type": "Question",
        "name": "What is a vCard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A vCard (Virtual Contact File) is a standard file format for electronic business cards. It contains information like name, address, phone numbers, e-mail addresses, and URLs, which smartphones natively understand and import."
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
          How Does a Digital Business Card Work?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A clear, technical breakdown of the magic behind instant contact sharing.
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-2xl font-medium mb-8">
          The seamless experience of tapping a card or scanning a code and having a contact instantly appear in your phone feels like magic. But behind the scenes, it relies on a few fundamental, well-established web technologies working in harmony.
        </p>

        <p>
          At its simplest, a digital business card is a mobile-optimized webpage. The process of how it works can be broken down into three main phases: Hosting, Transmission, and Parsing.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Phase 1: Hosting (The Profile)</h2>

        <p>
          When you create a digital business card, the platform provisions a unique URL for you (e.g., `brandcard.alfo.online/john-doe`). This URL points to a secure cloud server that hosts your data—your name, phone number, headshot, social links, and any other widgets you've added. Because this is cloud-based, any changes you make in the backend editor are instantly reflected on the live webpage.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Phase 2: Transmission (Sharing the Link)</h2>

        <p>
          The next step is getting that URL onto the recipient's device. This is where the "physical" aspect often comes into play. The transmission can happen in several ways:
        </p>

        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong>QR Code Scan:</strong> A QR code is essentially a 2D barcode that, when scanned by a smartphone camera, translates the visual pattern back into your URL and automatically opens the browser.</li>
          <li><strong>NFC Tap:</strong> Near Field Communication (NFC) involves a tiny chip embedded in a physical card or tag. When tapped against an NFC-enabled phone (which includes almost all modern smartphones), it transmits the URL via radio waves over a very short distance.</li>
          <li><strong>Direct Link:</strong> You can simply paste the URL into an SMS, an email signature, or a WhatsApp message.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Phase 3: Parsing (The vCard Standard)</h2>

        <p>
          Once the recipient's phone opens the webpage, they see your designed profile. The magic happens when they click "Save to Contacts."
        </p>
        <p>
          Clicking this button triggers the server to generate a `.vcf` (vCard) file on the fly, populated with all your information. Both iOS and Android natively recognize `.vcf` files. When the phone detects this file download, it automatically intercepts it and opens the native Contacts app, asking the user to confirm saving the new contact.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-10">
          <h3 className="text-xl font-bold mb-4 text-primary">No Apps Required</h3>
          <p>
            The most critical aspect of how digital business cards work is that they leverage native smartphone capabilities (cameras for QR, NFC readers, and vCard parsing). This means the recipient <strong>does not need to download an app</strong> to receive your information, eliminating the biggest point of friction in digital networking.
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t">
        <h3 className="text-lg font-semibold mb-4">Related Reading</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/what-is-a-digital-business-card" className="text-primary hover:underline">
              What is a Digital Business Card?
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
