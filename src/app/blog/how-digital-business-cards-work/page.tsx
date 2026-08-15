import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Does a Digital Business Card Work?",
  description: "Learn exactly how digital business cards function, from QR code scanning to data transfer and analytics.",
};

export default function HowItWorks() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "How Does a Digital Business Card Work?",
        "description": "Learn exactly how digital business cards function, from QR code scanning to data transfer and analytics.",
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
        "datePublished": "2024-05-25T08:00:00Z",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://brandcard.alfo.online/blog/how-digital-business-cards-work"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does a digital business card work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A digital business card works by hosting your contact information on a personalized web page. You share a link or a QR code, which others scan with their smartphones to instantly view your details and save them to their phone."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need an app to use a digital business card?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, most modern digital business cards are web-based and can be viewed in any standard smartphone browser."
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
          How Does a Digital Business Card Work?
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          <strong>Definition:</strong> A digital business card is a cloud-hosted profile containing your professional contact information, links, and media. It works by generating a unique URL and QR code that, when scanned or clicked, instantly displays your details on the recipient's smartphone browser, allowing them to save your contact info with a single tap.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">The Mechanics of Sharing</h2>
        <p>The process is incredibly straightforward and designed to eliminate the friction of traditional networking. Here is the step-by-step breakdown:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Creation:</strong> You build your profile using a platform like BrandCard, adding your details, photo, and links.</li>
          <li><strong>Generation:</strong> The platform automatically generates a unique URL and a <Link href="/blog/what-is-qr-code-business-card" className="text-primary hover:underline">dynamic QR code</Link>.</li>
          <li><strong>The Scan:</strong> At a networking event, you display the QR code on your phone screen (or printed on a physical accessory). The other person opens their smartphone camera and points it at the code.</li>
          <li><strong>The Display:</strong> A notification appears on their screen. Tapping it opens your digital business card directly in their web browser (Safari, Chrome, etc.). <em>No app download is required.</em></li>
          <li><strong>The Action:</strong> From there, they can click "Save Contact" to download a vCard file directly into their phone's address book, or they can click your links, view your portfolio, or fill out a lead capture form.</li>
        </ol>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Real-World Example in Sales</h2>
        <p>Imagine a sales representative at a busy trade show. Instead of fumbling with paper cards that prospects often lose, they use a digital card. When a prospect scans the code, they don't just get a phone number; they see a link to a product demo video and a calendar link to book a follow-up call immediately. The rep also uses the card's analytics to see if the prospect actually clicked the demo link later that evening, informing their follow-up strategy.</p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Digital Card vs Traditional vCard File</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse border border-gray-200 dark:border-gray-800">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-900">
                <th className="p-4 border-b">Feature</th>
                <th className="p-4 border-b">Digital Business Card Profile</th>
                <th className="p-4 border-b">Raw .vcf File (Traditional vCard)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b">Visual Design</td>
                <td className="p-4 border-b">Fully customizable, branded interface</td>
                <td className="p-4 border-b">None (Just raw text data)</td>
              </tr>
              <tr>
                <td className="p-4 border-b">Rich Media</td>
                <td className="p-4 border-b">Supports videos, complex links, forms</td>
                <td className="p-4 border-b">Text and a small photo only</td>
              </tr>
              <tr>
                <td className="p-4 border-b">Analytics</td>
                <td className="p-4 border-b">Tracks views and interactions</td>
                <td className="p-4 border-b">No tracking capabilities</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-8">Understanding how these cards work is the first step to modernizing your networking. To see how they compare to older methods, read our <Link href="/blog/digital-vs-physical-business-cards" className="text-primary hover:underline">Digital vs Physical comparison</Link> or start building yours <Link href="/" className="text-primary hover:underline">today</Link>.</p>
      </div>
    </article>
  );
}
