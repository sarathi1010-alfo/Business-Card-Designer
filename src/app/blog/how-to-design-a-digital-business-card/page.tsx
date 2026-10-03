import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";

const PAGE_TITLE = "How to Design a Digital Business Card That Converts";
const PAGE_DESCRIPTION = "Learn the core design principles to make your digital business card stand out and capture more leads. Discover the best practices for fonts, colors, and CTAs in 2026.";
const PAGE_URL = "https://brandcard.alfo.online/blog/how-to-design-a-digital-business-card";

export const metadata: Metadata = constructMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/blog/how-to-design-a-digital-business-card",
});

export default function HowToDesignADigitalBusinessCard() {
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
            "name": "What is the most important element when designing a digital business card?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most important element is clarity. Your name, professional title, and a clear Call to Action (like 'Save Contact' or 'Book a Call') should be instantly visible without scrolling."
            }
          },
          {
            "@type": "Question",
            "name": "How many links should I include on my digital business card?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should limit your primary links to 3-5 to avoid overwhelming the user. Focus on the most important actions you want them to take, such as visiting your portfolio or booking a meeting."
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
          How to Design a Digital Business Card That Converts
        </h1>
        <div className="flex items-center text-muted-foreground text-sm space-x-4 mb-8 border-b pb-8">
          <span>By BrandCard Team</span>
          <span>•</span>
          <span>Updated {new Date().toLocaleDateString()}</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground font-medium mb-8">
          A digital business card is much more than a digital replica of paper; it is a high-performance landing page designed to turn passing interactions into valuable professional connections. However, simply having a digital card is not enough. To truly capture leads and make a lasting impression, you must design it with conversion in mind.
        </p>

        <p>
          In this guide, we will break down the core design principles that separate an average digital card from a lead-generating powerhouse. We will cover visual hierarchy, branding consistency, and the strategic placement of Calls to Action (CTAs).
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">1. Establish a Strong Visual Hierarchy</h2>
        <p>
          Visual hierarchy is the arrangement of elements in a way that implies importance. When someone scans your QR code and lands on your digital card, they should instinctively know where to look first, second, and third. You have mere seconds to capture their attention before they swipe away.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">The Hero Section</h3>
        <p>
          The top portion of your card (the "hero section") is critical. It must instantly communicate who you are. This area should include:
        </p>
        <ul>
          <li><strong>A High-Quality Headshot:</strong> Use a professional, well-lit photo. If you are representing a brand rather than yourself as an individual, a crisp, high-resolution company logo is essential.</li>
          <li><strong>Your Name and Title:</strong> These should be in the largest, most legible fonts on the page. Avoid cursive or overly stylized fonts that are difficult to read on small screens.</li>
          <li><strong>The Primary CTA:</strong> Directly below your title, place your most important Call to Action. For most professionals, this is a prominent "Save to Contacts" button.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">2. Strategic Link Placement and "Decision Fatigue"</h2>
        <p>
          One of the biggest mistakes people make when designing a digital business card is the "link dump." Because digital formats offer unlimited space, there is a temptation to link to every social media profile, every blog post, and every minor project you have ever worked on.
        </p>
        <p>
          This causes decision fatigue. When presented with too many options, users often choose none. To maximize conversions, you must curate your links ruthlessly.
        </p>
        <ul>
          <li><strong>Primary Links (Maximum 3):</strong> These are the actions that drive your business forward. Examples include "Book a Consultation," "View My Portfolio," or "Download My Resume." Style these as large, highly visible buttons.</li>
          <li><strong>Secondary Links:</strong> These are supportive links, such as your LinkedIn profile or Twitter account. Style these as smaller icons below your primary buttons.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">3. Master Brand Consistency</h2>
        <p>
          Your digital business card is an extension of your professional brand. If your card looks disjointed from your website or LinkedIn profile, it erodes trust. Consistency is key to appearing professional and authoritative.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Color Palette</h3>
        <p>
          Stick to 2-3 core colors. Use a dominant color for the background or header, a contrasting color for your CTA buttons to make them pop, and neutral colors (black, white, or dark gray) for the text to ensure high readability. If your company has brand guidelines, adhere to them strictly.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Typography</h3>
        <p>
          Do not use more than two fonts. Pair a strong, bold sans-serif font for your name and headings with a clean, highly legible font for your body copy and button text. Fonts like Inter, Roboto, or Space Grotesk perform exceptionally well on mobile screens.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">4. The Power of the Lead Capture Form</h2>
        <p>
          A digital card should not be a one-way street where you just broadcast information. To truly convert, you need to collect information in return. This is where the lead capture form becomes your most valuable design element.
        </p>
        <p>
          Instead of just hoping the recipient emails you later, integrate a simple form directly into your card.
        </p>
        <p><strong>Design Tip:</strong> Keep the form incredibly short. Ask only for Name and Email. Every additional field you add will significantly decrease the conversion rate. The goal is to capture the lead quickly, allowing you to follow up later to gather more detailed information.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">5. Optimize for Speed and Mobile Responsiveness</h2>
        <p>
          Over 90% of the time, your digital business card will be viewed on a mobile device, often over a cellular network rather than fast Wi-Fi. Therefore, speed and responsive design are non-negotiable.
        </p>
        <ul>
          <li><strong>Compress Images:</strong> Ensure your headshot and background images are compressed so they load instantly. A delay of even a few seconds will cause users to bounce.</li>
          <li><strong>Touch Targets:</strong> Ensure your buttons and links are large enough to be easily tapped with a thumb. There should be ample spacing between links to prevent accidental clicks.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Start Designing Today</h2>
        <p>
          Designing a high-converting digital business card doesn't require a degree in graphic design; it requires a strategic focus on clarity, branding, and usability. By following these principles, you can transform your digital presence into a powerful networking asset.
        </p>
        <p>
          If you are looking for inspiration or want to start with a proven layout, browse our <Link href="/templates" className="text-primary hover:underline">library of premium templates</Link>. Each template is pre-optimized for mobile viewing and lead conversion. For a deeper dive into the overall strategy, check out our <Link href="/blog/digital-business-card-guide" className="text-primary hover:underline">Complete Guide to Digital Business Cards</Link>.
        </p>
      </div>
    </article>
  );
}
