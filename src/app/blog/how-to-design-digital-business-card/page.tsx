import { Metadata } from "next";
import Link from "next/link";
import { FAQPage, Article, WithContext } from "schema-dts";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "How to Design a Digital Business Card That Converts",
  description: "Learn the core design principles to make your digital business card stand out, capture more leads, and elevate your professional brand.",
  path: "/blog/how-to-design-digital-business-card"
});

export default function HowToDesignDigitalCard() {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": ["Article", "FAQPage"],
    headline: "How to Design a Digital Business Card That Converts",
    description: "Learn the core design principles to make your digital business card stand out, capture more leads, and elevate your professional brand.",
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
      "@id": "https://brandcard.alfo.online/blog/how-to-design-digital-business-card"
    },
    mainEntity: [
      {
        "@type": "Question",
        name: "What should I include on my digital business card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Include your name, professional headshot, current title, company logo, best contact methods (email/phone), a primary call-to-action (like 'Book a Meeting'), and select social links like LinkedIn."
        }
      },
      {
        "@type": "Question",
        name: "What makes a digital business card convert well?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "High-converting cards have a clean, clutter-free design, a strong focal point (your headshot), and exactly one primary Call to Action (CTA) placed &quot;above the fold&quot; so users don't have to scroll to take action."
        }
      },
      {
        "@type": "Question",
        name: "Should I use a template for my digital card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, starting with a proven template ensures your design follows UX best practices for mobile devices while still allowing you to customize colors and fonts to match your brand."
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
          How to Design a Digital Business Card That Converts
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Your digital business card is often the first impression you make online. Here is how to design an aesthetic, high-converting profile that turns casual scans into concrete leads.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* AEO Box directly under H1/Intro */}
        <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-primary">
          <h3 className="text-xl font-bold mt-0 mb-4">Core Design Principles</h3>
          <ul className="m-0 space-y-2">
            <li><strong>Clarity Over Clutter:</strong> Limit yourself to 3-5 key links. Don&apos;t overwhelm the visitor.</li>
            <li><strong>Above the Fold:</strong> Your name, title, and primary CTA must be visible without scrolling.</li>
            <li><strong>Visual Hierarchy:</strong> Use size and contrast to guide the eye to the most important actions.</li>
            <li><strong>Brand Consistency:</strong> Colors and fonts should perfectly match your overarching professional or company brand.</li>
            <li><strong>Lead Capture:</strong> Always include a simple form to collect the recipient&apos;s information in exchange.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-6">The Anatomy of a Great Digital Card</h2>
        <p>
          Designing a digital business card is akin to designing a highly optimized landing page for your personal brand. Every element must serve a purpose. Let&apos;s break down the critical sections.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">1. The Hero Image & Headshot</h3>
        <p>
          People connect with people. Your headshot should be professional, well-lit, and high-resolution. Avoid overly casual photos unless it fits your specific brand (e.g., a creative agency). The background header image (if used) should complement, not distract from, your profile picture.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">2. The Name and Title</h3>
        <p>
          Keep this simple and legible. Use a clean sans-serif font for maximum readability on small mobile screens. Ensure your job title clearly communicates your value proposition.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">3. The Primary Call to Action (CTA)</h3>
        <p>
          This is the most important element of your design. What is the <em>one</em> thing you want someone to do after they scan your card?
        </p>
        <ul>
          <li><strong>Sales Rep:</strong> &quot;Book a Discovery Call&quot;</li>
          <li><strong>Designer:</strong> &quot;View My Portfolio&quot;</li>
          <li><strong>General Networking:</strong> &quot;Save to Contacts&quot;</li>
        </ul>
        <p>
          Make this button the most prominent color on your card to draw immediate attention.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Color Psychology and Branding</h2>
        <p>
          Consistency is key. If your company uses a specific shade of navy blue and a distinctive serif font, your digital card should reflect that. For independent professionals building a personal brand, choose colors that evoke the right emotion:
        </p>
        <ul>
          <li><strong>Blue:</strong> Trust, professionalism, security (Great for finance/legal).</li>
          <li><strong>Green:</strong> Growth, wealth, health (Great for consultants/wellness).</li>
          <li><strong>Black/White/Grey:</strong> Luxury, sophistication, minimalism (Great for high-end real estate or fashion).</li>
        </ul>
        <p>
          Check out our <Link href="/templates" className="text-primary hover:underline">Template Library</Link> to see how these color palettes are expertly applied in pre-built designs.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Avoiding the &quot;Link Dump&quot;</h2>
        <p>
          The biggest mistake professionals make is treating their digital card like a filing cabinet, stuffing it with every possible link (Twitter, Instagram, TikTok, 4 different websites, a YouTube channel, etc.).
        </p>
        <p>
          This creates paradox of choice. The visitor gets overwhelmed and leaves without taking any action. Curate your links. Only include the platforms where you are active and that are relevant to your professional goals.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Integrating Lead Capture</h2>
        <p>
          A beautiful design is useless if it doesn&apos;t generate business. A high-converting digital business card utilizes a lead capture form.
        </p>
        <p>
          When you network, you can ask the other person to fill out a quick two-field form (Name & Email) directly on your card to request a follow-up or a free resource. This turns your card from a passive informational tool into an active CRM funnel. Learn more about this in our <Link href="/blog/ultimate-guide-digital-business-cards-2026" className="text-primary hover:underline">Ultimate 2026 Guide</Link>.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Testing on Mobile</h2>
        <p>
          99% of people will view your digital business card on a mobile device after scanning a QR code or tapping an NFC tag. Always design mobile-first. Before you finalize your card, open it on your own phone. Are the buttons large enough to tap easily? Is the text readable without squinting? Does it load quickly?
        </p>

        <div className="mt-12 text-center">
          <Link href="/create" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2">
            Start Designing Your Card Now
          </Link>
        </div>

      </div>
    </article>
  );
}
