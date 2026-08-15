import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Do I Need a Digital Business Card?",
  description: "Discover the top reasons why professionals in every industry need a digital business card in 2026.",
};

export default function WhyNeedOne() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Why Do I Need a Digital Business Card?",
        "description": "Discover the top reasons why professionals in every industry need a digital business card in 2026.",
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
        "datePublished": "2024-05-26T08:00:00Z",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://brandcard.alfo.online/blog/why-do-i-need-digital-business-card"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do I need a digital business card?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You need a digital business card to ensure your contact information is saved instantly without data entry errors, to track your networking success via analytics, and to present a modern, tech-savvy professional image."
            }
          },
          {
            "@type": "Question",
            "name": "Is a digital business card worth it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it is highly cost-effective compared to constantly reprinting physical cards and provides a significantly higher return on investment for networking efforts."
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
          Why Do I Need a Digital Business Card?
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          <strong>Definition:</strong> You need a digital business card to solve the fundamental flaw of traditional networking: data loss. A digital card ensures your information goes directly into a prospect's phone instantly, allowing you to track engagement and update your details in real-time.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">The Core Problem with Traditional Networking</h2>
        <p>Think about the last time you handed out a physical paper card. What happened to it? Best case scenario, it sat on a desk for weeks before the person manually typed your email into their computer. Worst case, it went through the wash or straight into the trash.</p>
        <p>You need a digital business card because it guarantees data delivery. By utilizing <Link href="/blog/what-is-qr-code-business-card" className="text-primary hover:underline">QR technology</Link>, you bypass manual entry entirely. This single feature alone drastically increases the likelihood of a successful follow-up.</p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Real-World Example in Freelancing</h2>
        <p>Consider a freelance graphic designer attending a local meetup. If they hand out paper cards, they rely on the client remembering their conversation later. If they use a digital card, the client scans it and instantly sees the designer's online portfolio, past client testimonials, and a button to schedule a discovery call. The digital card does the selling for them right at the moment of connection.</p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Digital Efficiency vs Physical Waste</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse border border-gray-200 dark:border-gray-800">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-900">
                <th className="p-4 border-b">Scenario</th>
                <th className="p-4 border-b">With Digital Card</th>
                <th className="p-4 border-b">With Physical Card</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b">You get promoted/change jobs</td>
                <td className="p-4 border-b text-green-600">Update profile online instantly. Zero cost.</td>
                <td className="p-4 border-b text-red-600">Throw away old batch. Pay to reprint new ones.</td>
              </tr>
              <tr>
                <td className="p-4 border-b">You meet 50 people at a conference</td>
                <td className="p-4 border-b text-green-600">Scan QR code 50 times. Never run out.</td>
                <td className="p-4 border-b text-red-600">Hope you brought enough cards.</td>
              </tr>
              <tr>
                <td className="p-4 border-b">You want to know if someone looked at your portfolio</td>
                <td className="p-4 border-b text-green-600">Check your dashboard analytics for link clicks.</td>
                <td className="p-4 border-b text-red-600">Impossible to know.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-8">Upgrading to a digital profile is essential for modern professional growth. To learn how to make yours effective, read our guide on <Link href="/blog/how-to-design-digital-business-card" className="text-primary hover:underline">designing for conversion</Link> or create your profile on <Link href="/" className="text-primary hover:underline">BrandCard</Link>.</p>
      </div>
    </article>
  );
}
