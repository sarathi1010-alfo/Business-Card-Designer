import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Design a Digital Business Card That Converts',
  description: 'Learn the core design principles to make your digital business card stand out. Discover how to use colors, fonts, and clear CTAs to capture more leads.',
  alternates: {
    canonical: '/blog/how-to-design-a-digital-business-card-that-converts',
  }
};

export default function HowToDesignADigitalBusinessCard() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Design a Digital Business Card That Converts",
    "description": "Learn the core design principles to make your digital business card stand out. Discover how to use colors, fonts, and clear CTAs to capture more leads.",
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
      "@id": "https://brandcard.alfo.online/blog/how-to-design-a-digital-business-card-that-converts"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I include on my digital business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should include your name, job title, company, a professional headshot, primary contact methods (email/phone), a link to your website or portfolio, and a clear Call to Action (CTA)."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the right colors for my card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stick to your brand guidelines. Use 2-3 colors maximum: a dominant brand color for headers, a high-contrast accent color for buttons (CTAs), and a neutral background for readability."
        }
      },
      {
        "@type": "Question",
        "name": "What makes a digital business card convert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A high-converting card has a single, clear objective (e.g., 'Book a Meeting' or 'Save Contact'), high-contrast CTA buttons placed near the top, and minimal clutter."
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
          How to Design a Digital Business Card That Converts
        </h1>
        <p className="text-xl text-muted-foreground">
          Master the core design principles to make your profile stand out and capture more leads.
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-2xl font-medium mb-8">
          Having a digital business card is only the first step. If your card looks cluttered, lacks a clear objective, or is difficult to read on a mobile device, you are leaving leads on the table.
        </p>

        <p>
          Unlike a physical piece of paper, a <Link href="/blog/what-is-a-digital-business-card" className="text-primary hover:underline">digital business card</Link> acts as a micro-landing page. Its primary goal is not just to display information, but to drive a specific action—whether that is saving your contact info, booking a calendar appointment, or viewing your latest project. Here is how to design a card optimized for conversion.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">1. Prioritize Above-the-Fold Content</h2>

        <p>
          In web design, &quot;above the fold&quot; refers to the content a user sees before they have to scroll. When someone scans your QR code, they should immediately understand who you are and what they should do next without swiping down.
        </p>

        <p>
          Your top section should include:
        </p>
        <ul className="list-disc pl-6 mb-8">
          <li><strong>A High-Quality Headshot:</strong> People connect with faces. Ensure your photo is well-lit, professional, and clearly visible.</li>
          <li><strong>Clear Typography:</strong> Your Name (largest font) and your Job Title/Company directly below it.</li>
          <li><strong>The Primary CTA:</strong> A prominent button, such as &quot;Save Contact&quot; or &quot;Book a Call,&quot; placed immediately under your title.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">2. Master Color and Contrast for CTAs</h2>

        <p>
          Color is not just for aesthetics; it directs the user&apos;s eye. The biggest mistake people make is using a monochromatic color scheme that causes buttons to blend into the background.
        </p>

        <p>
          Follow the 60-30-10 rule for your digital card:
        </p>
        <ul className="list-disc pl-6 mb-8">
          <li><strong>60% Background:</strong> Use clean, neutral colors (white, light gray, or dark mode black/navy) to ensure text is highly readable.</li>
          <li><strong>30% Brand Color:</strong> Use this for headers, icons, and dividing lines to reinforce your brand identity.</li>
          <li><strong>10% Accent Color:</strong> This should be a high-contrast color used <em>exclusively</em> for your Call to Action (CTA) buttons. If your brand color is blue, a bright orange or green button will draw immediate attention.</li>
        </ul>

        <p>
          If you are using one of <Link href="/templates" className="text-primary hover:underline">BrandCard&apos;s premium templates</Link>, these color contrast ratios are already optimized for accessibility and conversion.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">3. Declutter and Group Information</h2>

        <p>
          Because digital cards offer unlimited space, there is a temptation to include every social media link, five different phone numbers, and three paragraphs of bio text. This creates cognitive overload. When faced with too many choices, users often take no action at all.
        </p>

        <p>
          Group your information logically:
        </p>
        <ul className="list-disc pl-6 mb-8">
          <li><strong>Primary Contacts:</strong> Email and Phone Number.</li>
          <li><strong>Professional Links:</strong> LinkedIn, Portfolio, or Company Website.</li>
          <li><strong>Secondary Socials (Optional):</strong> Only include Instagram or X (Twitter) if you actively use them for professional purposes.</li>
        </ul>
        <p>
          Use clear, recognizable icons instead of text labels to save space and create a cleaner UI.
        </p>

        <div className="my-12 p-8 bg-muted rounded-xl border">
          <h3 className="text-2xl font-bold mb-4">Design Checklist for Conversion</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span><strong>Legible Fonts:</strong> Stick to clean sans-serif fonts (like Inter or Roboto). Avoid script fonts.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span><strong>Action-Oriented Copy:</strong> Use verbs on buttons (e.g., &quot;View Portfolio&quot; instead of just &quot;Portfolio&quot;).</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span><strong>Whitespace:</strong> Leave ample space between buttons so users don&apos;t accidentally tap the wrong link on a mobile screen.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span><strong>Lead Capture Form:</strong> Include a simple form (Name, Email) at the bottom for inbound inquiries.</span>
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-6">4. Test on Mobile First</h2>

        <p>
          Remember that 99% of people will view your digital business card on a mobile device. While you might be designing it on a desktop monitor, you must constantly preview it in a mobile viewport. Ensure that text is large enough to read without squinting and that buttons are large enough to be easily tapped with a thumb (at least 44x44 pixels).
        </p>

        <div className="mt-16 mb-8">
          <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What should I include on my digital business card?</h3>
              <p className="text-muted-foreground">You should include your name, job title, company, a professional headshot, primary contact methods (email/phone), a link to your website or portfolio, and a clear Call to Action (CTA).</p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How do I choose the right colors for my card?</h3>
              <p className="text-muted-foreground">Stick to your brand guidelines. Use 2-3 colors maximum: a dominant brand color for headers, a high-contrast accent color for buttons (CTAs), and a neutral background for readability.</p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What makes a digital business card convert?</h3>
              <p className="text-muted-foreground">A high-converting card has a single, clear objective (e.g., &apos;Book a Meeting&apos; or &apos;Save Contact&apos;), high-contrast CTA buttons placed near the top, and minimal clutter.</p>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}