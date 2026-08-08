import { Metadata } from "next";
import Link from "next/link";
import { FAQPage, Article, WithContext } from "schema-dts";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "How Does a Digital Business Card Work? (Simple Guide)",
  description: "Understand the technology behind digital business cards. Learn how dynamic QR codes, NFC tags, and shareable links power modern professional networking.",
  path: "/blog/how-does-digital-business-card-work"
});

export default function HowItWorks() {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": ["Article", "FAQPage"],
    headline: "How Does a Digital Business Card Work?",
    description: "Understand the technology behind digital business cards. Learn how dynamic QR codes, NFC tags, and shareable links power modern professional networking.",
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
      "@id": "https://brandcard.alfo.online/blog/how-does-digital-business-card-work"
    },
    mainEntity: [
      {
        "@type": "Question",
        name: "How does a digital business card actually work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A digital business card is essentially a mini-website hosted on a platform. When you create your card, the platform generates a unique URL. You share this URL via a dynamic QR code, an NFC tap, or direct messaging. The recipient's phone simply opens that URL in their web browser."
        }
      },
      {
        "@type": "Question",
        name: "Does the recipient need an app to view my digital card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The vast majority of digital business cards open directly in the recipient's native mobile web browser (like Safari or Chrome). No app download is required to view your card or save your contact info."
        }
      },
      {
        "@type": "Question",
        name: "What happens when I update my information?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because you are using a 'dynamic' QR code that links to a URL rather than hardcoded data, updating your job title or phone number in your dashboard instantly updates your live profile. You do not need to print a new QR code."
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
          How Does a Digital Business Card Work?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          It feels like magic when you tap a phone and your entire professional profile appears, but the underlying technology is elegantly simple. Here is exactly how digital business cards work.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* AEO Box */}
        <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-primary">
          <h3 className="text-xl font-bold mt-0 mb-4">The 3-Step Process</h3>
          <ol className="m-0 space-y-2">
            <li><strong>Hosting:</strong> Your contact data, links, and branding are securely hosted on a platform (like BrandCard) at a unique URL.</li>
            <li><strong>Transmission:</strong> You share that URL in person using a QR Code or NFC tag, or online via a direct link.</li>
            <li><strong>Access:</strong> The recipient&apos;s phone uses its native web browser to open your profile. No app required.</li>
          </ol>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-6">The Technology: Dynamic URLs</h2>
        <p>
          At its core, a digital business card is just a specialized webpage. When you sign up for a service, a database stores your information (name, phone number, LinkedIn URL, etc.). The platform then generates a unique web address for you, such as <code>brandcard.alfo.online/yourname</code>.
        </p>
        <p>
          This is crucial because it allows for real-time updates. If you change jobs, you simply log in and update your title. The URL remains the same, meaning anyone who has your link or QR code will instantly see the new information.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Sharing Mechanisms Explained</h2>
        <p>
          The &quot;how it works&quot; question usually refers to the sharing process. There are three primary ways this URL gets from your device to theirs:
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">1. The Dynamic QR Code</h3>
        <p>
          Your platform generates a QR (Quick Response) code that points directly to your unique URL. When a prospect opens their phone camera and points it at your QR code, their phone translates the visual code back into the web link and prompts them to open it in Safari or Chrome.
        </p>
        <p>
          Learn more in our detailed <Link href="/blog/what-is-qr-code-business-card" className="text-primary hover:underline">QR code guide</Link>.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">2. NFC Tags (Smart Cards)</h3>
        <p>
          Near Field Communication (NFC) involves a tiny microchip embedded in a physical object (like a plastic card, metal card, or a sticker on the back of your phone). This chip is programmed with your URL. When it comes within an inch of a modern smartphone, the phone&apos;s NFC reader detects the chip, reads the URL, and opens the browser.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">3. Direct Sharing</h3>
        <p>
          Because it is just a web link, you can bypass physical sharing entirely. You can text the link, include it in your email signature, put it in your social media bio, or drop it into a Zoom chat.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">The &quot;Save to Contacts&quot; Magic</h2>
        <p>
          The most valuable feature of a digital card is the ability to bypass manual data entry. When a user views your digital profile, there is typically a prominent &quot;Save to Contacts&quot; button.
        </p>
        <p>
          When they click this, the platform generates a small file called a <code>.vcf</code> (Virtual Contact File). Both iOS and Android operating systems recognize this file type natively. It prompts the phone to open its address book app and pre-fill all the fields (Name, Phone, Email, Company) with your data, requiring only a single tap from the user to save it forever.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Summary</h2>
        <p>
          Digital business cards work by utilizing established web technologies—secure hosting, URLs, QR codes, and VCF files—and packaging them into a seamless, mobile-optimized experience. If you are ready to see it in action, check out our <Link href="/blog/ultimate-guide-digital-business-cards-2026" className="text-primary hover:underline">Ultimate Guide</Link> or start building your own today.
        </p>

      </div>
    </article>
  );
}
