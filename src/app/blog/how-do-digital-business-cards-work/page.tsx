import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Do Digital Business Cards Work? (A Quick Guide)',
  description: 'Understand the simple technology behind digital business cards. Learn how they use dynamic QR codes, NFC, and cloud hosting to transform networking.',
  alternates: {
    canonical: '/blog/how-do-digital-business-cards-work',
  }
};

export default function HowDoDigitalBusinessCardsWork() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Do Digital Business Cards Work?",
    "description": "Understand the simple technology behind digital business cards. Learn how they use dynamic QR codes, NFC, and cloud hosting to transform networking.",
    "author": {
      "@type": "Organization",
      "name": "BrandCard"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BrandCard",
      "logo": {
        "@type": "ImageObject",
        "url": "https://brandcard.alfo.online/logo.png"
      }
    },
    "datePublished": "2024-05-20T08:00:00Z",
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://brandcard.alfo.online/blog/how-do-digital-business-cards-work"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does a digital business card actually work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It works by hosting your contact details on a mobile-optimized webpage. When you share your unique QR code or link, the recipient's phone opens that page, allowing them to view your info and save it directly to their contacts."
        }
      },
      {
        "@type": "Question",
        "name": "Do they need an app to scan my card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Modern digital business cards run on the web. Anyone with a standard smartphone camera can scan your QR code and open your profile in their native web browser (like Safari or Chrome)."
        }
      },
      {
        "@type": "Question",
        "name": "How does the contact saving work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When a user taps 'Save Contact' on your profile, the browser downloads a tiny .VCF (Virtual Contact File). The smartphone automatically recognizes this file and opens the default Contacts app to save your details."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-primary">
          How Do Digital Business Cards Work?
        </h1>
        <p className="text-xl text-muted-foreground">
          The simple technology behind modern networking, explained in under 3 minutes.
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <div className="bg-primary/5 p-6 rounded-lg mb-8 border border-primary/10">
          <p className="lead text-xl font-medium m-0">
            A digital business card is essentially a highly-optimized, mobile-friendly webpage that hosts your professional identity. It uses <Link href="/blog/what-is-a-qr-code-business-card" className="text-primary hover:underline">dynamic QR codes</Link> and VCF technology to instantly transfer your contact information directly into someone else&apos;s phone.
          </p>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-6">The Three-Step Process</h2>

        <p>
          While the technology sounds complex, the user experience is incredibly simple and happens in three distinct phases:
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: The Cloud Profile</h3>
        <p>
          First, you create an account on a platform like <Link href="/" className="text-primary hover:underline">BrandCard</Link>. You input your data: name, phone number, email, LinkedIn URL, and perhaps a profile photo. The platform generates a unique, secure webpage dedicated entirely to you. Because this data lives in the cloud, you can log in at any time to update your phone number, and the changes are reflected instantly on your live profile.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: The Sharing Mechanism (QR & NFC)</h3>
        <p>
          Once your profile is active, the platform generates a unique sharing mechanism, most commonly a <strong>Dynamic QR Code</strong>. When you are at a networking event, you display this QR code on your phone screen (or printed on a physical accessory).
        </p>
        <p>
          The person you are meeting simply opens their smartphone camera and points it at your code. Their phone instantly recognizes the URL embedded in the code and prompts them to open it in their web browser (Safari, Chrome, etc.). <em>Crucially, they do not need to download an app to do this.</em>
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 3: The Data Transfer (VCF)</h3>
        <p>
          Now they are looking at your beautiful digital profile on their screen. They see your photo, your title, and a big button that says &quot;Save Contact.&quot;
        </p>
        <p>
          When they tap that button, the website generates a tiny file called a <strong>.VCF (Virtual Contact File)</strong> or vCard. Smartphones are universally programmed to recognize this file type. When the .VCF file downloads, their phone automatically asks, &quot;Would you like to add this person to your Contacts?&quot; They tap yes, and your name, number, and email are permanently saved in their address book.
        </p>

        <div className="my-12 p-8 bg-muted rounded-xl border">
          <h3 className="text-2xl font-bold mb-4">Real-World Application: The Conference</h3>
          <p>
            Imagine Sarah, a software developer, at a tech conference. She meets a recruiter. Instead of handing over a piece of paper that might get lost, she pulls up her digital card on her phone.
          </p>
          <ul className="list-disc pl-6">
            <li>The recruiter scans the QR code.</li>
            <li>The recruiter sees Sarah&apos;s <Link href="/professions/software-engineer-digital-business-card" className="text-primary hover:underline">developer-focused digital card</Link>, complete with a link to her GitHub repository.</li>
            <li>The recruiter taps &quot;Save Contact&quot; and has Sarah&apos;s details stored instantly.</li>
            <li>Sarah later checks her analytics dashboard and sees exactly when her card was viewed.</li>
          </ul>
        </div>

        <p>
          By removing the friction of manual data entry, <Link href="/blog/ultimate-guide-digital-business-cards-2026" className="text-primary hover:underline">digital business cards</Link> ensure that you actually make it into the recipient&apos;s phone, dramatically increasing your chances of a successful follow-up.
        </p>

      </div>
    </article>
  );
}