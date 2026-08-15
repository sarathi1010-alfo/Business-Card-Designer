import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Design a Digital Business Card That Converts",
  description: "Learn the core design principles to make your digital business card stand out. Discover layout, fonts, colors, and CTA strategies for higher conversion rates.",
};

export default function HowToDesignDigitalBusinessCard() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "How to Design a Digital Business Card That Converts",
        "description": "Learn the core design principles to make your digital business card stand out. Discover layout, fonts, colors, and CTA strategies for higher conversion rates.",
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
        "datePublished": "2024-05-23T08:00:00Z",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://brandcard.alfo.online/blog/how-to-design-digital-business-card"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What should I include on my digital business card?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At a minimum, include your name, professional headshot, job title, company, a primary contact method (like email), and 1-2 key links such as a portfolio or booking calendar."
            }
          },
          {
            "@type": "Question",
            "name": "How many links should a digital business card have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For maximum conversion, stick to 3-5 high-priority links. Too many links cause decision fatigue and lower the chance that a user takes a meaningful action."
            }
          },
          {
            "@type": "Question",
            "name": "What makes a good digital business card design?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A good design focuses on clarity, contrast, and hierarchy. It uses high-quality images, legible typography, brand-aligned colors, and features a single, prominent Call to Action (CTA)."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mb-8">
        <Link href="/blog" className="text-primary hover:underline font-medium">← Back to Blog</Link>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          How to Design a Digital Business Card That Converts
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          A digital business card is not just a digital rolodex; it is a landing page for your personal brand. If designed poorly, people will scan it and immediately close the tab. If designed well, it becomes a powerful engine for lead generation and booked meetings. Here is the complete guide to designing a digital business card that actually converts.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">1. The Hierarchy of Information</h2>
        <p>
          The most common mistake people make when designing their card is treating it like a dumping ground for every link they have ever created. To maximize conversion, you must implement strict visual hierarchy.
        </p>
        <p>
          When a user lands on your profile after scanning your QR code, they should instantly understand who you are and what you do without scrolling. The top section (the "Hero" section) must contain:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>A High-Quality Headshot:</strong> Professional lighting, clean background, looking at the camera.</li>
          <li><strong>Your Name & Title:</strong> Clear, legible, and large enough to read instantly.</li>
          <li><strong>A Brief Value Proposition:</strong> A one-sentence summary of how you help people (e.g., "Helping startups scale their SaaS revenue").</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">2. Strategic Link Placement and CTAs</h2>
        <p>
          The goal of your digital business card is to drive a specific action. You can learn more about high-converting strategies in our <Link href="/blog/digital-business-card-guide" className="text-primary hover:underline">Ultimate Guide to Digital Business Cards</Link>.
        </p>
        <p>
          Do not list ten different social media profiles equally. Decide on your <strong>Primary Call to Action (CTA)</strong>. Is it booking a meeting? Downloading a whitepaper? Viewing your portfolio?
        </p>
        <p>
          Your primary CTA should be the largest, most visually distinct button on the page. Use a contrasting accent color to make it pop. Secondary links (like LinkedIn or a personal website) can be placed beneath it with less visual weight, perhaps as outlined buttons or text links.
        </p>
        <p>
          <em>Pro Tip: Use action-oriented text for your buttons. Instead of a button that says "Calendar," use "Book a 15-Min Intro."</em>
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">3. Typography and Legibility</h2>
        <p>
          Your digital business card will be viewed almost exclusively on mobile devices. If your fonts are too small or too decorative, your conversion rate will plummet.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Use Sans-Serif Fonts:</strong> Fonts like Inter, Roboto, or SF Pro offer superior legibility on small screens.</li>
          <li><strong>Maintain High Contrast:</strong> Ensure your text color stands out sharply against the background. Avoid light gray text on white backgrounds.</li>
          <li><strong>Size Matters:</strong> Body text should be no smaller than 16px to ensure comfortable reading without zooming.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">4. Brand Consistency (Colors and Aesthetics)</h2>
        <p>
          Your digital business card should feel like an extension of your company’s brand or your personal brand. If someone scans your card at an event, the colors and aesthetic should match the presentation you just gave or the website they will eventually visit.
        </p>
        <p>
          Stick to a constrained color palette: a primary background color, a highly legible text color, and one vibrant accent color reserved exclusively for your primary CTA button. If you need inspiration, you can browse our curated <Link href="/templates" className="text-primary hover:underline">template gallery</Link> to see examples of professionally balanced color schemes, ranging from minimalist modern to corporate blue.
        </p>

        <div className="bg-muted/30 p-6 rounded-xl border my-8">
          <h3 className="text-xl font-bold mb-4">Quick Reference: Design Tips for Conversion</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <th className="p-3">Element</th>
                  <th className="p-3">Best Practice</th>
                  <th className="p-3">What to Avoid</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="p-3 font-medium">Headshot</td>
                  <td className="p-3 text-green-600">Professional, well-lit, friendly</td>
                  <td className="p-3 text-red-600">Cropped group photos, low res</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="p-3 font-medium">Links</td>
                  <td className="p-3 text-green-600">3-5 highly curated links</td>
                  <td className="p-3 text-red-600">10+ links (Decision fatigue)</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="p-3 font-medium">Primary CTA</td>
                  <td className="p-3 text-green-600">High contrast, action-oriented text</td>
                  <td className="p-3 text-red-600">Blends in with background</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Typography</td>
                  <td className="p-3 text-green-600">Clean sans-serif, 16px minimum</td>
                  <td className="p-3 text-red-600">Script fonts, low contrast text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-6">5. The Power of Lead Capture</h2>
        <p>
          The ultimate conversion tool on a digital business card is the lead capture form. Instead of just hoping the person emails you later, a lead capture form allows them to input their details directly into your card, instantly syncing to your CRM or email list.
        </p>
        <p>
          When designing this section, keep the form fields to an absolute minimum. Ask for Name and Email only. Every additional field you add (like Phone Number or Company) will decrease your form completion rate.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Start Building Your High-Converting Card</h2>
        <p>
          You don't need to be a professional designer to create a card that converts. By starting with a strong foundation and focusing on clarity, you can significantly improve your networking outcomes.
        </p>
        <p>
          Ready to put these principles into practice? Head to our <Link href="/" className="text-primary hover:underline">homepage</Link> to start building your customized, high-converting digital business card today.
        </p>
      </div>
    </article>
  );
}
