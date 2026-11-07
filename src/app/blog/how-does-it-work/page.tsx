import { constructMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import Script from "next/script";

export const metadata = constructMetadata({
  title: "How Does a Digital Business Card Work? | Quick Guide",
  description: "A quick micro-answer explaining exactly how digital business cards work using QR codes, NFC, and standard web technologies without needing an app.",
  path: "/blog/how-does-it-work",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does a digital business card actually work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A digital business card works by hosting your contact information on a secure web page. You share access to this page using a dynamic QR code or an NFC-enabled smart card. When a recipient scans or taps it, their smartphone browser opens your profile, allowing them to download your contact file directly into their phonebook."
      }
    }
  ]
};

export default function HowDoesItWorkMicro() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto py-12 px-4 sm:px-8 max-w-3xl">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">
            How Does a Digital Business Card Work?
          </h1>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8 shadow-sm">
            <h3 className="text-xl font-bold mb-2 text-primary">Direct Answer:</h3>
            <p className="mb-0 font-medium">
              A <Link href="/blog/what-is-a-digital-business-card" className="text-primary hover:underline">digital business card</Link> works by hosting your contact data on a mobile-optimized webpage. You share it via a QR code or NFC tap. The recipient&apos;s phone camera scans the code, opening your profile in their native browser, allowing them to tap &quot;Save Contact&quot; to instantly download your details without needing a specialized app.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">The Step-by-Step Mechanics</h2>
          <p>
            Understanding the underlying technology demystifies the magic of the instant contact transfer. Here is exactly what happens under the hood when you share your digital profile:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Data Hosting:</strong> Your profile is securely hosted in the cloud. It contains standard vCard (.vcf) data—name, email, phone number—alongside rich media like videos or your <Link href="/templates" className="text-primary hover:underline">custom template</Link> designs.</li>
            <li><strong>The Trigger Mechanism:</strong> To access the data, you present a trigger. This is most commonly a <Link href="/blog/what-is-a-qr-code-business-card" className="text-primary hover:underline">dynamic QR code</Link> displayed on your phone, or a physical NFC (Near Field Communication) card that you tap against the back of their device.</li>
            <li><strong>The Browser Handoff:</strong> When triggered, the recipient&apos;s phone reads the embedded URL and automatically opens it in their default browser (Safari, Chrome). Because it uses universal web protocols, there is zero friction—no app store downloads required.</li>
            <li><strong>The Contact Save:</strong> The profile contains a prominent &quot;Save Contact&quot; button. Clicking this triggers the browser to download a .vcf file. The phone&apos;s operating system recognizes this file type and seamlessly imports the data into the native Contacts app.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Real-World Example in Sales</h2>
          <p>
            Imagine a sales executive at a noisy trade show. Instead of shouting an email address over the crowd, they simply show their lock screen, which features their custom QR code. The prospect scans it, the profile loads instantly, and the prospect clicks &quot;Save Contact&quot;. In the same motion, the executive asks the prospect to fill out the quick lead-capture form on the profile. Within 15 seconds, the executive has acquired a qualified lead, automatically synced to their Salesforce dashboard, while the prospect has the executive&apos;s complete details securely saved.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Sharing Methods vs Friction</h2>
          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-card border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left font-bold text-sm">Method</th>
                  <th className="px-4 py-2 text-left font-bold text-sm">How it Works</th>
                  <th className="px-4 py-2 text-left font-bold text-sm">Friction Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="px-4 py-3 font-medium">QR Code Scan</td>
                  <td className="px-4 py-3">Open camera, point at code.</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">Very Low</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">NFC Tap</td>
                  <td className="px-4 py-3">Tap physical smart card to phone.</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">Very Low</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">URL Link (Text/Email)</td>
                  <td className="px-4 py-3">Click hyperlink in message.</td>
                  <td className="px-4 py-3 text-yellow-600 font-semibold">Low (requires prior contact)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-muted rounded-xl text-center">
            <p className="font-medium mb-4">Ready to see how it works for yourself?</p>
            <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
              Create Your Free Card
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
