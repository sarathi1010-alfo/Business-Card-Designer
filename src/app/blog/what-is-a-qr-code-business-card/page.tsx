import { constructMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import Script from "next/script";

export const metadata = constructMetadata({
  title: "What is a QR Code Business Card? | Complete Micro-Guide",
  description: "Learn exactly what a QR code business card is, the difference between static and dynamic codes, and how they simplify professional networking.",
  path: "/blog/what-is-a-qr-code-business-card",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a QR code business card?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A QR code business card uses a Quick Response matrix barcode that, when scanned by a smartphone camera, instantly directs the user to a digital profile or directly downloads a contact file (.vcf) without requiring any manual data entry."
      }
    }
  ]
};

export default function WhatIsQRCodeCardMicro() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto py-12 px-4 sm:px-8 max-w-3xl">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">
            What is a QR Code Business Card?
          </h1>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8 shadow-sm">
            <h3 className="text-xl font-bold mb-2 text-primary">Direct Answer:</h3>
            <p className="mb-0 font-medium">
              A QR code business card is a networking tool that uses a scannable matrix barcode to instantly transfer contact information. When scanned by a standard smartphone camera, it automatically opens a <Link href="/blog/what-is-a-digital-business-card" className="text-primary hover:underline">digital profile</Link> or prompts the phone to save a .vcf contact file, completely eliminating manual typing.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Static vs Dynamic QR Codes</h2>
          <p>
            When utilizing QR codes for networking, it is vital to understand the difference between static and dynamic configurations.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Static QR Codes:</strong> The data (like a URL or a phone number) is permanently hard-coded into the actual pattern of the black and white squares. If you need to change the destination URL, you must generate a completely new image.</li>
            <li><strong>Dynamic QR Codes:</strong> This is the standard for modern <Link href="/templates" className="text-primary hover:underline">digital business cards</Link>. A dynamic code points to a short redirect URL. This means you can log into your dashboard, change your final destination profile, and the printed or displayed QR code remains exactly the same.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">How It Transforms Networking</h2>
          <p>
            Unlike <Link href="/blog/digital-vs-physical-business-cards" className="text-primary hover:underline">physical business cards</Link>, a QR-based card acts as a frictionless bridge to the digital world.
          </p>
          <p>
            Instead of carrying paper, many professionals simply save their unique QR code as their phone&apos;s lock screen wallpaper, or add it to their Apple Wallet. When they meet a prospect, they show their screen. The prospect scans it, and within three seconds, the connection is solidified inside the prospect&apos;s phone directory.
          </p>
          <p>
            Furthermore, you can embed your QR code into Zoom virtual backgrounds, presentation slides, or email signatures, ensuring you can distribute your contact data seamlessly whether you are networking in a ballroom in New York or on a video call from your home office.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Real-World Example in Event Management</h2>
          <p>
            An event coordinator is managing a booth at a crowded tech expo. Instead of handing out 500 paper brochures and cards that will likely end up in the hotel trash, they display a large iPad on a stand featuring a prominent dynamic QR code. Attendees walking by scan the code, which instantly delivers a rich digital profile featuring the company&apos;s contact details, a promotional video, and a lead-capture form to win a prize.
          </p>

          <div className="mt-10 p-6 bg-muted rounded-xl text-center">
            <p className="font-medium mb-4">Generate your custom QR code profile in seconds.</p>
            <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
              Start Designing Now
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
