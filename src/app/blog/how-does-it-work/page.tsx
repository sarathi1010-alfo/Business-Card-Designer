import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Does a Digital Business Card Work? Explained',
  description: 'A simple, step-by-step breakdown of how digital business cards use QR codes, NFC, and cloud technology to instantly share your professional details.',
  alternates: {
    canonical: '/blog/how-does-it-work',
  }
};

export default function HowDoesItWork() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does a digital business card work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It works by hosting your contact profile on a cloud server and providing you with a unique URL or QR code. When someone scans your code, their phone's browser opens your profile, allowing them to instantly save your details."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to download an app to receive a digital business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The vast majority of modern digital business cards operate via the mobile web. You just scan the QR code with your standard camera app, and the profile loads in your default browser like Safari or Chrome."
        }
      }
    ]
  };

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
          How Does a Digital Business Card Work?
        </h1>
        <p className="text-xl text-muted-foreground">
          A concise, jargon-free explanation of the technology powering modern professional networking.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          You have likely seen professionals tapping phones or scanning QR codes at recent events, bypassing the traditional exchange of paper cards. But how exactly does this "magic" work behind the scenes?
        </p>
        <p>
          At its core, a <Link href="/blog/what-is-a-digital-business-card" className="text-primary hover:underline font-medium">digital business card</Link> relies on three simple, ubiquitous technologies working in harmony: Cloud Hosting, Unique Identifiers (URLs/QR Codes), and Mobile Web Browsers.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">The 3-Step Process</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: The Cloud Profile</h3>
        <p>
          When you create a digital business card using a platform like BrandCard, you are essentially building a highly optimized micro-website. All your data—your headshot, title, phone number, and social links—are stored securely on a cloud server. This is what allows you to update your information instantly; you are just changing the data on the server, not reprinting physical stock.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: The Unique Identifier (The QR Code)</h3>
        <p>
          To help people find your specific cloud profile, the system generates a unique URL just for you. Because typing out a URL during a fast-paced networking event is tedious, this URL is encoded into a visual format: a <Link href="/blog/what-is-a-qr-code-business-card" className="text-primary hover:underline font-medium">QR (Quick Response) Code</Link>. Alternatively, the URL can be written to a small microchip inside a physical plastic card (this is known as NFC, or Near Field Communication).
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Step 3: The Scan and Save</h3>
        <p>
          When you meet a prospect, you display your QR code (on your phone screen, Apple Wallet, or a printed badge). The prospect opens their phone's native camera app and points it at the code. The camera instantly recognizes the pattern, decodes the URL, and prompts the user to open the link in their web browser (like Safari or Chrome).
        </p>
        <p>
          Your profile loads instantly. With a single tap on the "Save Contact" button, a standard .vcf (vCard) file is downloaded, seamlessly importing all your rich data directly into their phone's native contact book. No typing required.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Real-World Example in B2B Sales</h2>
        <p>
          Imagine a B2B sales rep at a busy tech conference. They are having 50+ conversations a day. Instead of collecting paper cards (which must be manually entered into a CRM later), the rep displays their digital card QR code.
        </p>
        <p>
          The prospect scans the code. Not only do they get the rep's contact info, but the rep's digital profile includes a brief "Lead Capture" form. The prospect types in their email to receive a product demo video. Instantly, that data is routed from the digital card's cloud server directly into the rep's Salesforce account via an API integration.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Digital Card vs NFC Smart Card</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 font-semibold">Feature</th>
                <th className="py-4 px-6 font-semibold">QR Code (Digital)</th>
                <th className="py-4 px-6 font-semibold">NFC Smart Card (Physical)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6">How it works</td>
                <td className="py-4 px-6">Camera scans visual code</td>
                <td className="py-4 px-6">Phone taps physical microchip</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Cost</td>
                <td className="py-4 px-6">Usually free/low subscription</td>
                <td className="py-4 px-6">Requires purchasing hardware</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Compatibility</td>
                <td className="py-4 px-6">100% of smartphones with cameras</td>
                <td className="py-4 px-6">Most modern phones (some older models require settings changes)</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </article>
  );
}
