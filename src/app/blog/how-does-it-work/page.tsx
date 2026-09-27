import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Does a Digital Business Card Work?',
  description: 'Discover the simple technology behind digital business cards, from NFC and dynamic QR codes to the underlying cloud architecture.',
  alternates: {
    canonical: '/blog/how-does-it-work',
  }
};

export default function HowDoesItWork() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does a digital business card work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital business cards work by hosting your professional information on a dedicated, mobile-optimized web page in the cloud. You share this page using a dynamic QR code, an NFC-enabled smart card, or a direct URL. When a recipient scans the code or taps the card, your profile opens directly in their smartphone's native web browser without requiring them to download any app."
        }
      },
      {
        "@type": "Question",
        "name": "What is the technology behind tap-to-share cards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tap-to-share cards utilize NFC (Near Field Communication) technology. A small microchip inside the physical card is programmed with your unique digital business card URL. When tapped against a compatible smartphone, the chip transmits the link wirelessly, prompting the phone to open your profile."
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

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
          How Does a Digital Business Card Work?
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover the simple technology behind digital business cards, from NFC and dynamic QR codes to the underlying cloud architecture.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          If you&apos;ve recently attended a networking event, you&apos;ve likely seen someone share their contact information by simply presenting a QR code on their phone screen or tapping a sleek plastic card against another person&apos;s device. This is a digital business card in action. But what is the underlying technology that makes this seamless exchange possible?
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">The Three Core Components</h2>
        <p>
          While the user experience feels like magic, a digital business card operates on three well-established, universally accessible technologies: Cloud Hosting, Dynamic QR Codes, and Near Field Communication (NFC).
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">1. The Cloud Profile (The Destination)</h3>
        <p>
          Unlike a vCard file that you email to someone as an attachment, a modern digital business card is actually a highly optimized mini-website hosted in the cloud. When you sign up for a digital card platform, you create a profile containing your photo, name, title, contact details, and links (LinkedIn, portfolio, Calendly, etc.).
        </p>
        <p>
          This data is stored on secure servers and displayed on a unique URL (e.g., <code>yourdomain.com/your-name</code>). Because it is web-based, it can be viewed on any device—iPhone, Android, tablet, or desktop—without the recipient needing to download a specific app. Furthermore, because it&apos;s in the cloud, any changes you make in your dashboard are instantly live. If you get a promotion today, anyone who views your card tomorrow sees the new title.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">2. Dynamic QR Codes (The Visual Bridge)</h3>
        <p>
          The most common way to direct someone to your cloud profile is via a Quick Response (QR) code. A QR code is a two-dimensional barcode that can be read by almost all modern smartphone camera apps natively.
        </p>
        <p>
          Professional digital cards utilize <strong>dynamic</strong> QR codes. A static QR code has the destination URL hardcoded into the black-and-white pattern. A dynamic QR code points to a tracking server, which then instantly redirects to your profile. This is crucial because it allows the platform to track analytics (how many times the code was scanned) and it allows you to change the destination URL in the future without having to reprint any physical materials displaying the QR code.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">3. NFC Technology (The Tap-to-Share Bridge)</h3>
        <p>
          Near Field Communication (NFC) provides the popular &quot;tap-to-share&quot; functionality. NFC is the exact same technology used by Apple Pay or contactless credit cards.
        </p>
        <p>
          You can purchase a physical &quot;smart card&quot; (often made of plastic, wood, or metal) that has an embedded NFC chip. This chip requires no battery; it draws a tiny amount of power from the smartphone when it comes within an inch of the device. The chip is programmed to transmit your unique digital card URL. When you tap the smart card against the back of a compatible smartphone, a notification pops up on the screen. Tapping the notification opens your digital profile in their browser.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Real-World Example in Real Estate</h2>
        <p>
          Imagine a real estate agent hosting an open house. Instead of leaving a stack of paper cards on the kitchen counter, they place a small acrylic sign displaying their dynamic QR code.
        </p>
        <p>
          A prospective buyer points their iPhone camera at the sign. A link appears on their screen. They tap it, and the agent&apos;s digital profile instantly loads, displaying their contact info, a link to the property&apos;s virtual tour, and a button to &quot;Save Contact.&quot; When the buyer taps &quot;Save Contact,&quot; the platform generates a standard .vcf file, seamlessly adding the agent to the buyer&apos;s phone book.
        </p>

        <div className="mt-12 p-6 bg-muted rounded-lg border">
          <h3 className="text-xl font-bold mb-4">Experience the Technology Yourself</h3>
          <p className="mb-4">
            Ready to see how easy it is to set up a cloud-hosted, QR-enabled professional profile?
          </p>
          <Link href="/templates" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            View Digital Card Templates
          </Link>
        </div>
      </div>
    </article>
  );
}
