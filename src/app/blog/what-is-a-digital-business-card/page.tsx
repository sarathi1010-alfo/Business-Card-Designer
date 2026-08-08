import { Metadata } from "next";
import Link from "next/link";
import { FAQPage, Article, WithContext } from "schema-dts";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "What is a Digital Business Card? Complete Guide",
  description: "A comprehensive guide explaining what digital business cards are, how they work, and why every professional needs one in 2026.",
  path: "/blog/what-is-a-digital-business-card"
});

export default function WhatIsDigitalBusinessCard() {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": ["Article", "FAQPage"],
    headline: "What is a Digital Business Card? Complete Guide",
    description: "A comprehensive guide explaining what digital business cards are, how they work, and why every professional needs one in 2026.",
    author: {
      "@type": "Organization",
      name: "BrandCard"
    },
    publisher: {
      "@type": "Organization",
      name: "BrandCard",
      logo: {
        "@type": "ImageObject",
        url: "https://brandcard.alfo.online/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://brandcard.alfo.online/blog/what-is-a-digital-business-card"
    },
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Digital Business Card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A digital business card (also known as a virtual or electronic business card) is an online profile that contains your professional contact information. Unlike traditional paper cards, they can hold unlimited details, rich media, and trackable links, instantly shareable via QR code, NFC, or a simple URL."
        }
      },
      {
        "@type": "Question",
        name: "How does a digital business card work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital business cards work by hosting your contact details on a unique webpage. You share this page using a dynamic QR code on your phone screen, an NFC-enabled smart card, or by sending the URL directly via text, email, or social media."
        }
      },
      {
        "@type": "Question",
        name: "Can I use a digital business card for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, many platforms offer basic digital business cards for free. However, premium features like custom domains, advanced analytics, and CRM integrations usually require a paid subscription."
        }
      },
      {
        "@type": "Question",
        name: "Are digital business cards better than paper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, for modern networking, digital cards are superior. They are eco-friendly, instantly updateable, allow for lead capture, provide scanning analytics, and never run out of stock."
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

      <header className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-primary">
          What is a Digital Business Card? (Complete 2026 Guide)
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The definition of a digital business card is simple: it&apos;s a dynamic, online version of your professional identity. With 82% of professionals now preferring digital sharing over physical paper, understanding this transition is critical for your networking ROI.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* AEO Box directly under H1/Intro */}
        <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-primary">
          <h3 className="text-xl font-bold mt-0 mb-4">Key Takeaways</h3>
          <ul className="m-0 space-y-2">
            <li><strong>Definition:</strong> An online profile replacing traditional paper cards with rich media and interactive links.</li>
            <li><strong>Sharing:</strong> Instantly transmitted via QR codes, NFC tags, or direct URLs.</li>
            <li><strong>Advantage:</strong> They never run out, can be updated in real-time, and offer powerful networking analytics.</li>
            <li><strong>Lead Gen:</strong> Built-in forms turn quick meetings into actionable CRM contacts.</li>
            <li><strong>Cost:</strong> Far more cost-effective long-term compared to continuously reprinting paper batches.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-6">What Exactly is a Digital Business Card?</h2>
        <p>
          A digital business card (frequently referred to as a virtual business card, electronic business card, or vCard) is a secure, web-based profile designed to quickly share your contact information and professional brand.
        </p>
        <p>
          Unlike a rigid 3.5 x 2 inch piece of cardstock, a digital card is boundless. It doesn&apos;t just hold your name, title, and phone number. It serves as a micro-website dedicated to your professional identity. You can include high-resolution profile pictures, company logos, direct links to your social media (LinkedIn, Twitter), your portfolio, scheduling links (like Calendly), embedded videos, and even downloadable files.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">How Does a Digital Business Card Work?</h2>
        <p>
          The underlying technology of a digital business card is straightforward. Your information is hosted on a secure server and accessed via a unique URL (e.g., <code>brandcard.alfo.online/your-name</code>). The magic happens in how you share that URL.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">1. The Dynamic QR Code</h3>
        <p>
          The most common sharing method is the <Link href="/blog/what-is-qr-code-business-card" className="text-primary hover:underline">dynamic QR code</Link>. You simply open your digital card app on your phone, display your unique QR code, and the person you are networking with points their smartphone camera at it. Within a second, your digital card opens in their mobile browser—no app installation required on their end.
        </p>
        <p>
          We use the term &quot;dynamic&quot; because the QR code doesn&apos;t hardcode your contact info; it hardcodes the URL. This means you can change your phone number or job title on your digital card, and your existing QR code will immediately point to the updated information.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">2. NFC Technology (Smart Cards)</h3>
        <p>
          Near Field Communication (NFC) is the same technology that powers Apple Pay. Many professionals carry a single physical &quot;smart card&quot; embedded with an NFC chip. When tapped against a compatible smartphone, it instantly beams the digital business card URL to the device.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">3. Direct URL Sharing</h3>
        <p>
          Because your card is a website, you can copy the link and paste it into text messages, WhatsApp, LinkedIn DMs, or add it to your email signature. It&apos;s universally accessible anywhere the internet exists.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Real-World Example in Real Estate</h2>
        <p>
          Consider a <Link href="/professions/real-estate-agent-digital-card" className="text-primary hover:underline">real estate agent</Link> hosting an open house. Instead of handing out paper cards that end up in the trash, they display their digital business card QR code on a placard near the entrance.
        </p>
        <p>
          When visitors scan it, they don&apos;t just get a phone number. They see the agent&apos;s current active listings, a link to schedule a private viewing, a mortgage calculator, and a lead capture form asking for their home-buying timeline. The digital card transforms from a static piece of paper into an active lead-generation engine.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Digital vs. Virtual vs. Electronic: Are They The Same?</h2>
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border-collapse border border-border text-left">
            <thead>
              <tr className="bg-muted">
                <th className="p-4 border border-border font-semibold">Term</th>
                <th className="p-4 border border-border font-semibold">Meaning / Context</th>
                <th className="p-4 border border-border font-semibold">Common Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-border font-medium">Digital Business Card</td>
                <td className="p-4 border border-border">A web-based profile designed for modern networking, featuring rich media and analytics.</td>
                <td className="p-4 border border-border">The modern, standard industry term used by platforms like BrandCard.</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="p-4 border border-border font-medium">Virtual Business Card</td>
                <td className="p-4 border border-border">Often used synonymously with &quot;Digital,&quot; sometimes referring specifically to vCard format files.</td>
                <td className="p-4 border border-border">Older terminology, heavily used in the early 2010s.</td>
              </tr>
              <tr>
                <td className="p-4 border border-border font-medium">Electronic Business Card</td>
                <td className="p-4 border border-border">The oldest terminology, heavily tied to the raw <code>.vcf</code> (Virtual Contact File) standard attached to emails.</td>
                <td className="p-4 border border-border">Corporate IT environments and email signatures.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          In 2026, these terms are largely interchangeable, but &quot;Digital Business Card&quot; is the accepted standard for modern, interactive profiles.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Why You Need One Today</h2>
        <p>
          The transition from paper to digital isn&apos;t just about saving trees (though that is a great benefit). It&apos;s about networking efficiency. As detailed in our <Link href="/blog/ultimate-guide-digital-business-cards-2026" className="text-primary hover:underline">Ultimate Guide to Digital Business Cards</Link>, the modern professional requires tools that integrate with their digital life.
        </p>
        <p>
          Paper cards require data entry. Digital cards automate it. When you share a digital card, the recipient can save your contact details directly to their phone&apos;s address book with a single tap. Furthermore, the built-in analytics allow you to see who actually viewed your profile, helping you qualify your networking leads.
        </p>

        <div className="mt-12 text-center">
          <Link href="/create" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2">
            Create Your Free Digital Business Card Today
          </Link>
        </div>

      </div>
    </article>
  );
}
