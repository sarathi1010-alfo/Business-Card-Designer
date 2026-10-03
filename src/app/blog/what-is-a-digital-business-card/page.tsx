import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";

const PAGE_TITLE = "What is a Digital Business Card? (Complete Guide)";
const PAGE_DESCRIPTION = "Learn everything you need to know about digital business cards, how they work, real-world examples, and why you need one in 2026.";
const PAGE_URL = "https://brandcard.alfo.online/blog/what-is-a-digital-business-card";

export const metadata: Metadata = constructMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/blog/what-is-a-digital-business-card",
});

export default function WhatIsADigitalBusinessCard() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": PAGE_TITLE,
        "description": PAGE_DESCRIPTION,
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
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": PAGE_URL
        },
        "datePublished": new Date().toISOString().split("T")[0],
        "dateModified": new Date().toISOString().split("T")[0]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a digital business card?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A digital business card is an electronic format of a traditional paper business card that allows professionals to instantly share contact information, portfolios, social media links, and digital content via a QR code, NFC tap, or direct URL link."
            }
          },
          {
            "@type": "Question",
            "name": "How does a digital business card work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Digital business cards work by hosting your contact details on a cloud-based web page. When someone scans your unique QR code or taps an NFC-enabled device, they are instantly directed to your customized profile where they can view and save your information directly to their phone."
            }
          }
        ]
      }
    ]
  };

  return (
    <article className="container mx-auto py-12 px-4 sm:px-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-8">
        <Link href="/blog" className="text-primary hover:underline font-medium mb-4 inline-block">
          ← Back to Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
          What is a Digital Business Card? (Complete Guide)
        </h1>
        <div className="flex items-center text-muted-foreground text-sm space-x-4 mb-8 border-b pb-8">
          <span>By BrandCard Team</span>
          <span>•</span>
          <span>Updated {new Date().toLocaleDateString()}</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground font-medium mb-8">
          A digital business card is a modern, electronic alternative to the traditional paper business card. It serves as a centralized hub for your professional identity, allowing you to instantly share your contact details, social media profiles, portfolio links, and other vital information through a simple scan or tap.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Understanding the Digital Shift</h2>
        <p>
          For decades, professionals relied on small, rectangular pieces of paper to exchange contact information. While this method was functional, it came with significant limitations. Paper cards are easily lost, often become outdated shortly after printing, and offer no analytics or interactive capabilities. In our increasingly digital world, relying solely on paper for professional networking is no longer the most efficient strategy.
        </p>
        <p>
          The transition to digital solutions has revolutionized how we connect. A digital business card is not just a digital replica of a paper card; it is a dynamic, interactive landing page designed specifically for lead generation and professional branding. It transforms a passive exchange into an active engagement opportunity.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">How Does a Digital Business Card Work?</h2>
        <p>
          The mechanics behind a digital business card are straightforward but incredibly powerful. When you create a digital card, your information is securely hosted on a cloud-based platform. You are then provided with various sharing mechanisms:
        </p>
        <ul>
          <li><strong>QR Codes:</strong> This is the most common method. Your digital card generates a unique Quick Response (QR) code. When another person scans this code with their smartphone camera, they are instantly redirected to your digital profile. No app installation is required.</li>
          <li><strong>NFC Technology:</strong> Near Field Communication (NFC) allows for "tap-to-share" functionality. You can embed an NFC chip into a physical item (like a plastic card, wristband, or phone sticker). When someone taps their phone against this item, your digital card appears on their screen.</li>
          <li><strong>Direct URL Links:</strong> Every digital card has a unique URL. You can share this link via email signatures, text messages, LinkedIn profiles, or any other digital communication channel.</li>
        </ul>
        <p>
          Once a recipient opens your digital card, they are presented with a streamlined interface where they can view your details and, most importantly, click a single button to save your contact information directly to their phone's address book (often as a .vcf file).
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Real-World Examples</h2>
        <p>
          The versatility of digital business cards makes them invaluable across various industries:
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Real Estate Professionals</h3>
        <p>
          At an open house, a real estate agent can display a QR code on a stand. Prospective buyers scan the code, which takes them to the agent's digital card. The card not only provides the agent's phone number and email but also features links to current property listings, a virtual tour of the home they are standing in, and a lead capture form to join the agent's newsletter.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Sales Executives</h3>
        <p>
          During a high-stakes meeting, a sales executive shares their digital card. Instead of just contact info, the card includes a prominent link to a personalized pitch deck, a calendar integration to book a follow-up call immediately, and a video introduction explaining the company's value proposition.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Freelancers and Creatives</h3>
        <p>
          A graphic designer attending a networking event shares their digital card. The card is designed to reflect their unique aesthetic and includes immediate links to their online portfolio, their latest Dribbble shots, and a contact form specifically for new project inquiries.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Digital vs. Physical: The Core Differences</h2>
        <p>
          To fully appreciate the value of a digital card, it is helpful to compare it directly to its physical counterpart:
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="p-4 border border-border font-semibold">Feature</th>
                <th className="p-4 border border-border font-semibold">Physical Card</th>
                <th className="p-4 border border-border font-semibold">Digital Card</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-border font-medium">Information Capacity</td>
                <td className="p-4 border border-border">Limited to the size of the paper.</td>
                <td className="p-4 border border-border">Virtually unlimited (videos, multiple links, portfolios).</td>
              </tr>
              <tr>
                <td className="p-4 border border-border font-medium">Updateability</td>
                <td className="p-4 border border-border">Requires reprinting and discarding old stock.</td>
                <td className="p-4 border border-border">Instant updates across all shared links.</td>
              </tr>
              <tr>
                <td className="p-4 border border-border font-medium">Analytics</td>
                <td className="p-4 border border-border">None.</td>
                <td className="p-4 border border-border">Tracks scans, clicks, and engagement metrics.</td>
              </tr>
              <tr>
                <td className="p-4 border border-border font-medium">Lead Capture</td>
                <td className="p-4 border border-border">Manual data entry required.</td>
                <td className="p-4 border border-border">Automated lead capture forms and CRM integrations.</td>
              </tr>
              <tr>
                <td className="p-4 border border-border font-medium">Environmental Impact</td>
                <td className="p-4 border border-border">Consumes paper, ink, and creates waste.</td>
                <td className="p-4 border border-border">Eco-friendly and sustainable.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Why You Need One in 2026</h2>
        <p>
          As we move further into the digital age, expectations around professional networking have shifted. A digital business card is no longer just a novelty; it is an expected standard for modern professionals.
        </p>
        <p>
          By adopting a digital card, you demonstrate tech-savviness, environmental consciousness, and a commitment to efficiency. Furthermore, the ability to track how people interact with your card provides invaluable data that can refine your networking strategy and significantly improve your lead conversion rates.
        </p>
        <p>
          Ready to make the switch? Explore our <Link href="/templates" className="text-primary hover:underline">premium templates</Link> or check out our <Link href="/blog/digital-business-card-guide" className="text-primary hover:underline">complete guide to creating a digital business card that converts</Link> to get started on building your modern professional identity.
        </p>
      </div>
    </article>
  );
}
