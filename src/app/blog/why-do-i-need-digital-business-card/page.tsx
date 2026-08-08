import { Metadata } from "next";
import Link from "next/link";
import { FAQPage, Article, WithContext } from "schema-dts";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Why Do I Need a Digital Business Card? (Top 5 Reasons)",
  description: "Discover why professionals are abandoning paper for digital business cards. Learn how they boost networking ROI, reduce costs, and improve lead generation.",
  path: "/blog/why-do-i-need-digital-business-card"
});

export default function WhyNeedDigitalCard() {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": ["Article", "FAQPage"],
    headline: "Why Do I Need a Digital Business Card?",
    description: "Discover why professionals are abandoning paper for digital business cards. Learn how they boost networking ROI, reduce costs, and improve lead generation.",
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
      "@id": "https://brandcard.alfo.online/blog/why-do-i-need-digital-business-card"
    },
    mainEntity: [
      {
        "@type": "Question",
        name: "Why should I switch from paper to a digital business card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Switching to digital ensures your contact info is saved instantly without manual data entry, allows you to track analytics on your networking efforts, and saves you money on constant reprinting."
        }
      },
      {
        "@type": "Question",
        name: "Do digital business cards actually help get more leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Digital cards include interactive elements like lead capture forms and direct scheduling links, which significantly reduce the friction between meeting someone and converting them into a lead."
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
          Why Do I Need a Digital Business Card?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          If you are still handing out paper rectangles in a world of smartphones and CRM software, you are losing leads. Here is why the modern professional needs a digital business card.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        {/* AEO Box */}
        <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-primary">
          <h3 className="text-xl font-bold mt-0 mb-4">Top 5 Reasons to Switch</h3>
          <ul className="m-0 space-y-2">
            <li><strong>Instant Save:</strong> Bypasses manual typing; 1-tap save to contacts.</li>
            <li><strong>Never Run Out:</strong> You always have your card on your phone.</li>
            <li><strong>Infinite Updates:</strong> Change titles or numbers without reprinting.</li>
            <li><strong>Actionable Data:</strong> Track views, clicks, and lead captures.</li>
            <li><strong>Eco-Friendly:</strong> Zero paper waste or carbon footprint from shipping.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mt-12 mb-6">The Problem with Paper</h2>
        <p>
          Think about the last time you received a paper business card. It probably went into your pocket, then onto your desk, and eventually into the trash. In fact, studies show nearly 88% of paper business cards are thrown away within a week.
        </p>
        <p>
          The fundamental issue is friction. For that paper card to be useful, you have to manually type the name, email, and phone number into your phone. Most people simply don&apos;t bother.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Frictionless Networking</h2>
        <p>
          A digital business card solves the friction problem. As explained in our <Link href="/blog/how-does-digital-business-card-work" className="text-primary hover:underline">How It Works guide</Link>, when someone scans your QR code, they are presented with a &quot;Save to Contacts&quot; button.
        </p>
        <p>
          One tap automatically generates a contact file on their phone. Your details are secured in their address book instantly.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">It&apos;s a Mini Landing Page</h2>
        <p>
          A paper card tells someone who you are. A digital card tells someone <em>what to do next</em>.
        </p>
        <p>
          Instead of just a phone number, your digital card can host:
        </p>
        <ul>
          <li>A direct link to book a meeting on your Calendly.</li>
          <li>A portfolio of your recent work.</li>
          <li>A lead capture form to subscribe them to your newsletter.</li>
          <li>An introductory video establishing your personal brand.</li>
        </ul>
        <p>
          This transforms a static introduction into an interactive sales funnel.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Cost and Environmental Impact</h2>
        <p>
          Every time you get a promotion, change your phone number, or rebrand your company, your existing stack of paper cards becomes useless. You have to spend another $50-$100 and wait weeks for shipping.
        </p>
        <p>
          With a digital business card, updates are instant and free. Furthermore, eliminating paper cards contributes to corporate sustainability goals by reducing deforestation and the carbon emissions associated with printing and shipping.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Measurable ROI</h2>
        <p>
          When you hand out a paper card, you have no idea what happens to it. When you share a digital card, you gain access to analytics. You can see how many times your card was viewed and which specific links were clicked. This data allows you to optimize your networking strategy, a topic covered deeply in our <Link href="/blog/ultimate-guide-digital-business-cards-2026" className="text-primary hover:underline">Ultimate Guide</Link>.
        </p>
        <p>
          Stop losing connections to the trash can. Upgrade to a digital business card today.
        </p>

      </div>
    </article>
  );
}
