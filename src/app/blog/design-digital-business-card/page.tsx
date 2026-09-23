import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Design a Digital Business Card That Converts',
  description: 'Learn the core design principles, from layout and color psychology to strategic CTAs, to make your digital business card stand out and capture more leads.',
  alternates: {
    canonical: '/blog/design-digital-business-card',
  }
};

export default function DesignDigitalBusinessCard() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Design a Digital Business Card That Converts",
    "description": "Learn the core design principles, from layout and color psychology to strategic CTAs, to make your digital business card stand out and capture more leads.",
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
      "@id": "https://brandcard.alfo.online/blog/design-digital-business-card"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What information should I include on a digital business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At a minimum, include your name, professional title, company, a high-quality headshot, your best contact email/phone, and a clear Call to Action (CTA)."
        }
      },
      {
        "@type": "Question",
        "name": "How important is color in digital business card design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Extremely important. Color drives brand recognition and user behavior. Ensure high contrast for readability and use colors that align with your industry."
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

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
          How to Design a Digital Business Card
        </h1>
        <p className="text-xl text-muted-foreground">
          Define the digital concept. State why it is critical for modern professionals' networking ROI. With 82% of professionals preferring digital sharing over physical cards, the shift is undeniable.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Design is More Than Aesthetics</h2>
        <p>
          When you hand someone a physical business card, the interaction is over the moment they put it in their pocket. A <Link href="/blog/what-is-a-digital-business-card" className="text-primary hover:underline font-medium">digital business card</Link>, however, is an interactive micro-website. Therefore, designing a digital business card requires a shift in mindset. You are no longer just arranging text on a 3.5x2 inch rectangle; you are designing a user experience (UX) optimized for lead capture and conversion.
        </p>

        <p>
          In this guide, we will explore the fundamental design principles that ensure your digital business card not only looks professional but actively works to grow your network and generate leads.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">1. The Hero Section: First Impressions Matter</h2>
        <p>
          The "Hero Section" is the very top of your digital card—the first thing a person sees immediately after scanning your QR code. You have roughly three seconds to communicate who you are and establish credibility.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Imagery and Branding</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Professional Headshot:</strong> Do not use a cropped photo from a wedding. Invest in a high-resolution, well-lit professional headshot. Your face builds trust faster than any logo.</li>
          <li><strong>Cover Photo / Banner:</strong> Use the banner area to establish context. If you are a <Link href="/professions/real-estate-agent-digital-card" className="text-primary hover:underline font-medium">real estate agent</Link>, feature a high-quality property photo. If you are a designer, showcase a clean piece of abstract art or your portfolio branding.</li>
          <li><strong>Typography Hierarchy:</strong> Your Name should be the largest text element (H1), followed by your Title and Company (H2). Ensure high contrast between the text and the background for immediate readability.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">2. Strategic Information Architecture</h2>
        <p>
          One of the biggest mistakes professionals make with digital cards is "link dumping." Just because you <em>can</em> add 25 links doesn't mean you <em>should</em>. Too many options lead to decision fatigue, causing the user to click nothing at all.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">The Rule of Three</h3>
        <p>
          Aim to feature a maximum of three primary Call to Action (CTA) buttons prominently above the fold (visible without scrolling). Organize your links logically:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Primary Actions:</strong> "Save to Contacts" and "Book a Meeting."</li>
          <li><strong>Secondary Actions:</strong> "View Portfolio," "Company Website," or "Latest Listing."</li>
          <li><strong>Social Proof:</strong> LinkedIn is usually the only essential social link for B2B networking. Hide Twitter, Instagram, or TikTok under a collapsible menu unless they are strictly relevant to your profession.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">3. Designing for Conversion (Lead Capture)</h2>
        <p>
          A digital card that only displays information is a digital rolodex. A digital card with a lead capture form is an active sales tool.
        </p>
        <p>
          Design your lead capture form to be as frictionless as possible. Ask only for the absolute necessities: <strong>Name</strong> and <strong>Email</strong>. Every additional field you add (Phone Number, Company, Budget) drastically reduces the conversion rate. Place this form prominently, perhaps right below your hero section, and incentivize it: "Drop your email below and I'll send you a copy of my latest industry report."
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">4. Color Psychology and UI/UX</h2>
        <p>
          Your color palette should strictly adhere to your personal or company brand guidelines. However, you must also consider basic UI principles:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>High Contrast CTAs:</strong> Your primary button (e.g., "Save to Contacts") should be a contrasting color to the rest of the card so it immediately draws the eye.</li>
          <li><strong>Dark Mode Support:</strong> Ensure your design looks equally good on devices set to Dark Mode. Avoid using transparent PNG logos with dark text, as they will disappear on a dark background.</li>
          <li><strong>Touch Targets:</strong> Design for "fat fingers." Ensure buttons and links have enough padding (at least 44x44 pixels) so they are easy to tap on a mobile screen without accidentally hitting adjacent links.</li>
        </ul>

        <div className="bg-muted p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">Quick Ref Table: Design Checklist</h3>
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr className="border-b border-muted-foreground/20">
                <th className="py-2">Element</th>
                <th className="py-2">Best Practice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-muted-foreground/10">
                <td className="py-2 font-medium">Headshot</td>
                <td className="py-2">High-res, professional lighting, centered.</td>
              </tr>
              <tr className="border-b border-muted-foreground/10">
                <td className="py-2 font-medium">Typography</td>
                <td className="py-2">Sans-serif fonts for legibility (e.g., Inter, Roboto).</td>
              </tr>
              <tr className="border-b border-muted-foreground/10">
                <td className="py-2 font-medium">Buttons</td>
                <td className="py-2">Contrasting colors, large touch targets (44px+).</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Links</td>
                <td className="py-2">Maximum 3-5 primary links. Avoid clutter.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Conclusion</h2>
        <p>
          A well-designed digital business card is the ultimate modern networking tool. By focusing on a clean hero section, strategic link architecture, and frictionless lead capture, you ensure that every networking interaction has the highest possible chance of converting into a valuable professional relationship. Don't start from scratch; explore our <Link href="/templates" className="text-primary hover:underline font-medium">optimized templates</Link> to build a card designed to convert.
        </p>

      </div>
    </article>
  );
}
