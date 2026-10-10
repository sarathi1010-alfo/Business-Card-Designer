import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'What is a QR Code Business Card? | Complete Guide',
  description: 'Learn exactly what a QR code business card is, how it bridges the physical and digital worlds, and why it is essential for modern networking.',
  path: '/blog/what-is-a-qr-code-business-card',
});

export default function WhatIsAQRCodePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a QR code business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A QR code business card is a networking tool that displays a scannable barcode. When scanned with a smartphone camera, it instantly directs the user to a digital profile or automatically downloads the person's contact information."
        }
      },
      {
        "@type": "Question",
        "name": "How do I create a QR code business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can create one by signing up for a digital business card platform. You input your contact details, and the platform automatically generates a unique QR code linked to your new digital profile."
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
          What is a QR Code Business Card?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The ultimate bridge between offline interactions and online lead capture.
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-2xl font-medium mb-8">
          A QR code business card is essentially a digital business card that uses a Quick Response (QR) code as its primary method of distribution.
        </p>

        <p>
          Instead of handing someone a piece of paper with your email typed out, you present them with a scannable square. When they point their smartphone camera at this square, a notification pops up. Tapping it takes them directly to your personalized digital profile, allowing them to save your contact info in a single click.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">How QR Code Business Cards Are Used</h2>

        <p>
          The versatility of the QR code means it can be deployed in numerous ways depending on your networking style.
        </p>

        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong>On Your Phone Screen:</strong> The most common method. You simply open your digital business card app or Apple Wallet, display the QR code on your screen, and let the other person scan it.</li>
          <li><strong>Printed on Physical Cards:</strong> The "hybrid" approach. You print a traditional paper card, but instead of cluttering it with text, you feature a prominent QR code.</li>
          <li><strong>Virtual Backgrounds:</strong> For remote workers, embedding the QR code into a Zoom or Microsoft Teams background allows meeting attendees to scan your info directly from their computer screens.</li>
          <li><strong>Signage and Badges:</strong> At conferences, wearing a lanyard with your QR code printed on the badge facilitates rapid, hands-free networking.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Static vs. Dynamic QR Codes</h2>

        <p>
          It is crucial to understand the difference between the two types of QR codes when creating your card.
        </p>

        <p>
          <strong>Static QR Codes</strong> encode the actual destination data (like a raw URL or raw vCard text) directly into the image. If you need to change your phone number, the old QR code will point to the old number forever. You must generate a new code.
        </p>

        <p>
          <strong>Dynamic QR Codes</strong> encode a short "redirect" URL. This short URL points to your digital profile. If you change your phone number on your profile, the short URL remains exactly the same. Therefore, the physical QR code never breaks and never needs to be reprinted. Professional digital business card platforms exclusively use dynamic QR codes.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-10">
          <h3 className="text-xl font-bold mb-4 text-primary">Key Takeaway</h3>
          <p>
            A QR code business card is the fastest, most reliable way to transfer your professional identity from the physical world directly into someone else's smartphone address book.
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t">
        <h3 className="text-lg font-semibold mb-4">Related Reading</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/how-does-a-digital-business-card-work" className="text-primary hover:underline">
              How Does a Digital Business Card Work?
            </Link>
          </li>
          <li>
            <Link href="/blog/why-do-i-need-a-digital-business-card" className="text-primary hover:underline">
              Why Do I Need a Digital Business Card?
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
