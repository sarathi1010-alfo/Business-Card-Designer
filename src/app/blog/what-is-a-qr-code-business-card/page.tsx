import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is a QR Code Business Card?',
  description: 'Learn how QR codes power modern networking, what dynamic QR codes are, and why they are essential for tracking scans.',
  alternates: {
    canonical: '/blog/what-is-a-qr-code-business-card',
  }
};

export default function WhatIsAQRCodeBusinessCard() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a QR code business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A QR code business card is a modern networking tool that uses a Quick Response (QR) code to share contact information. Instead of exchanging physical paper, you display a QR code on your phone, which the other person scans with their camera to instantly open your digital profile or download your contact details."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a static and dynamic QR code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A static QR code permanently encodes a specific URL directly into its pattern; if the URL changes, the code breaks. A dynamic QR code points to a tracking server that redirects to your URL. This allows you to update your destination link at any time without changing the QR code pattern, and it enables scan analytics."
        }
      }
    ]
  };

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
          What is a QR Code Business Card?
        </h1>
        <p className="text-xl text-muted-foreground">
          Learn how QR codes power modern networking, what dynamic QR codes are, and why they are essential for tracking scans.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          QR codes (Quick Response codes) have become an integral part of daily life, used for everything from restaurant menus to airline boarding passes. In the realm of professional networking, the QR code has sparked a revolution, serving as the bridge between in-person meetings and the digital world.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Defining the QR Code Business Card</h2>
        <p>
          A QR code business card is simply a digital business card that utilizes a QR code as its primary method of being shared. It eliminates the need to hand over a physical piece of paper. Instead, you generate a unique QR code linked to your professional online profile.
        </p>
        <p>
          When you meet someone at a conference, a meeting, or a coffee shop, you simply open the QR code on your smartphone screen (often saved in an Apple Wallet or Google Pay for quick access). The other person opens their smartphone camera, points it at the code, and a link appears. Tapping that link instantly opens your fully interactive digital profile in their mobile browser.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Static vs. Dynamic: Why It Matters</h2>
        <p>
          It is crucial to understand the difference between static and dynamic QR codes, as professional platforms rely exclusively on the latter.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Static QR Codes</h3>
        <p>
          A static QR code hardcodes the destination data (like a website URL) directly into the black-and-white pattern of the code itself. If you change your website address, that specific QR code will lead to a dead page. You would have to generate and distribute an entirely new QR code.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Dynamic QR Codes</h3>
        <p>
          A dynamic QR code, which powers premium digital business cards, works differently. The pattern encodes a short URL that points to a tracking server. That server then instantly redirects the user to your actual digital profile.
        </p>
        <p>
          Because of this intermediary step, you can change your profile URL in the backend at any time, and the printed or saved QR code will continue to work perfectly. More importantly, the tracking server records data during the redirect. This is what allows you to see analytics on how many times your card was scanned, when, and from what general geographic location.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Beyond the Smartphone Screen</h2>
        <p>
          While displaying a QR code on your phone is the most common use case, the versatility of the code means you can deploy it across various mediums to maximize your networking reach:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2"><strong>Virtual Backgrounds:</strong> Add your QR code to your Zoom or Microsoft Teams background so attendees can scan it during virtual presentations.</li>
          <li className="mb-2"><strong>Presentation Slides:</strong> Place the code on the final slide of your pitch deck or webinar to allow the audience to instantly download your contact information and resources.</li>
          <li className="mb-2"><strong>Email Signatures:</strong> Embed a small, clean QR code graphic alongside a clickable link in your email signature.</li>
          <li className="mb-2"><strong>Physical Collateral:</strong> Even if you use a digital profile, you can print the QR code on traditional marketing materials like flyers, brochures, or even the back of a legacy paper business card.</li>
        </ul>

        <div className="mt-12 p-6 bg-muted rounded-lg border">
          <h3 className="text-xl font-bold mb-4">Generate Your Dynamic QR Code</h3>
          <p className="mb-4">
            Build your professional profile and instantly generate a dynamic, trackable QR code to share it.
          </p>
          <Link href="/templates" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </article>
  );
}
