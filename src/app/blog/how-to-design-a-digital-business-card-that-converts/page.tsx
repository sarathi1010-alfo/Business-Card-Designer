import { constructMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import Script from "next/script";

export const metadata = constructMetadata({
  title: "How to Design a Digital Business Card That Converts",
  description: "Learn the core design principles, layout strategies, and CTA optimizations to make your digital business card stand out and capture more leads.",
  path: "/blog/how-to-design-a-digital-business-card-that-converts",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Design a Digital Business Card That Converts",
  "description": "A complete guide on designing a digital business card optimized for lead generation and professional networking.",
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
  "datePublished": "2024-11-01",
  "dateModified": new Date().toISOString().split("T")[0]
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What information should I include on my digital business card?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At a minimum, include your full name, professional title, company name, a high-quality headshot, your best contact email, phone number, and a link to your primary professional social network (usually LinkedIn)."
      }
    },
    {
      "@type": "Question",
      "name": "What is a CTA on a digital business card?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CTA (Call to Action) is a specific prompt encouraging the recipient to take the next step. Examples include 'Save My Contact', 'Book a Consultation', or 'View My Portfolio'."
      }
    },
    {
      "@type": "Question",
      "name": "Which template style is best for a corporate professional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Corporate professionals usually perform best with a 'Modern Minimal' or 'Clean Professional' template. These feature ample white space, standard serif or clean sans-serif fonts, and a muted, brand-aligned color palette."
      }
    }
  ]
};

export default function DesignThatConverts() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="container mx-auto py-12 px-4 sm:px-8 max-w-4xl">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">
            How to Design a Digital Business Card That Converts
          </h1>

          <p className="lead text-xl text-muted-foreground mb-8">
            Your digital business card is not just a digital rolodex—it is a hyper-focused landing page for your personal brand. If designed correctly, it can be your most powerful lead-generation tool. Here is how to build a card that doesn&apos;t just share info, but actually converts.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-primary">5 Core Design Principles</h3>
            <ul className="list-disc pl-6 space-y-2 mb-0">
              <li><strong>Prioritize the &apos;Save Contact&apos; Button:</strong> This should be the most prominent element on the screen.</li>
              <li><strong>Use a High-Quality Headshot:</strong> Faces build trust. Ensure your photo is professional, well-lit, and recent.</li>
              <li><strong>Keep the Layout Clean:</strong> Embrace whitespace. Don&apos;t overwhelm the user with 15 different links.</li>
              <li><strong>Align Colors with Your Brand:</strong> Use your exact hex codes to maintain brand consistency.</li>
              <li><strong>Include a Clear CTA:</strong> Tell them exactly what you want them to do next (e.g., &apos;Book a Demo&apos;).</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Choosing the Right Template Architecture</h2>
          <p>
            The foundation of a high-converting card is the underlying <Link href="/templates" className="text-primary hover:underline">template structure</Link>. The architecture dictates the user journey when someone scans your <Link href="/blog/what-is-a-qr-code-business-card" className="text-primary hover:underline">QR code</Link>.
          </p>
          <p>
            If you are a founder or sales executive, a top-heavy layout emphasizing immediate contact saving and calendar booking is ideal. If you are a freelancer or creative, a grid-based layout that prioritizes your visual portfolio above your phone number might yield better results.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Visual Hierarchy and Typography</h2>
          <p>
            When a new connection opens your profile, they should instinctively know where to look. This is achieved through visual hierarchy.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>H1 (Your Name):</strong> Should be the largest text on the screen, bold and legible.</li>
            <li><strong>H2 (Your Title/Company):</strong> Directly below your name, slightly smaller, often in a contrasting color or muted tone.</li>
            <li><strong>Body Text:</strong> Keep your bio short—under three sentences. Use a clean, sans-serif font (like Inter or Roboto) for maximum readability on small mobile screens.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Master the Call to Action (CTA)</h2>
          <p>
            A digital business card without a clear Call to Action is just a static flyer. To generate ROI, you must guide the recipient&apos;s behavior.
          </p>
          <p>
            Your primary CTA should always be <strong>&quot;Save Contact&quot;</strong>, which downloads your .vcf file. However, you should include a strategic secondary CTA based on your specific business goals:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><em>Sales Professionals:</em> &quot;Book a 15-Min Discovery Call&quot;</li>
            <li><em>Real Estate Agents:</em> &quot;View Active Listings&quot;</li>
            <li><em>Consultants:</em> &quot;Download My Free Strategy Guide&quot;</li>
            <li><em>Creatives:</em> &quot;View My Latest Case Study&quot;</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. The Power of Rich Media Integration</h2>
          <p>
            Because you are no longer limited by physical ink, you can leverage rich media to build authority instantly.
          </p>
          <p>
            Embed a short, 30-second introductory video near the top of your profile. Statistics show that profiles featuring a video introduction have a significantly higher contact-save rate than those without. Additionally, embedding dynamic tools like a Calendly widget directly onto the card removes friction, allowing prospects to book time with you before they even close the tab.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Testing and Optimization</h2>
          <p>
            The greatest advantage of a digital platform is analytics. Don&apos;t just guess what works—test it.
          </p>
          <p>
            If you notice a high view count but a low &quot;Save Contact&quot; rate, try moving the save button higher up the page or changing its color to a brighter, more contrasting hue. If your secondary links aren&apos;t getting clicked, try consolidating them or rewriting the anchor text to be more action-oriented.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-xl font-bold">What information should I include on my digital business card?</h3>
              <p className="mt-2 text-muted-foreground">At a minimum, include your full name, professional title, company name, a high-quality headshot, your best contact email, phone number, and a link to your primary professional social network (usually LinkedIn).</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">What is a CTA on a digital business card?</h3>
              <p className="mt-2 text-muted-foreground">A CTA (Call to Action) is a specific prompt encouraging the recipient to take the next step. Examples include &apos;Save My Contact&apos;, &apos;Book a Consultation&apos;, or &apos;View My Portfolio&apos;.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Which template style is best for a corporate professional?</h3>
              <p className="mt-2 text-muted-foreground">Corporate professionals usually perform best with a &apos;Modern Minimal&apos; or &apos;Clean Professional&apos; template. These feature ample white space, standard serif or clean sans-serif fonts, and a muted, brand-aligned color palette.</p>
            </div>
          </div>

          <div className="mt-12 bg-muted p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Put These Principles Into Practice</h2>
            <p className="mb-6">Use our drag-and-drop editor to build a high-converting profile today.</p>
            <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 py-2">
              Start Building Now
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
