import { constructMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import Script from "next/script";

export const metadata = constructMetadata({
  title: "Why Do I Need a Digital Business Card? | Benefits & ROI",
  description: "Discover the real-world benefits of digital business cards, including why professionals are abandoning paper for instant contact saving and lead generation.",
  path: "/blog/why-do-i-need-one",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why do I need a digital business card in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You need a digital business card because it ensures your contact information is actually saved in a prospect's phone rather than thrown away. It acts as a powerful lead generation tool, allows for infinite updates without printing costs, and integrates directly with modern CRMs."
      }
    }
  ]
};

export default function WhyNeedOneMicro() {
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
            Why Do I Need a Digital Business Card?
          </h1>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8 shadow-sm">
            <h3 className="text-xl font-bold mb-2 text-primary">Direct Answer:</h3>
            <p className="mb-0 font-medium">
              You need a <Link href="/blog/what-is-a-digital-business-card" className="text-primary hover:underline">digital business card</Link> to stop losing leads. 88% of physical paper cards are thrown away within a week. A digital card guarantees your data goes straight into a prospect&apos;s phonebook instantly, allows you to capture their info in return, and lets you track your networking ROI through analytics.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">The True Cost of Analog Networking</h2>
          <p>
            If you are still wondering if <Link href="/blog/digital-vs-physical-business-cards" className="text-primary hover:underline">digital or physical cards</Link> are better, consider the friction involved in paper networking. You hand someone a piece of paper. To actually connect with you, they must remember to pull it out of their pocket later, open their phone, manually type your difficult-to-spell name, input ten digits correctly, and add an email address without making a typo.
          </p>
          <p>
            That is a massive barrier to entry. In 2026, professionals expect immediate, frictionless data transfer. A digital profile solves this by delivering your complete contact payload (.vcf file) directly into their native contacts app with a single click.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Top 3 Reasons to Make the Switch</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong>You Control the Narrative:</strong> A paper card holds a name and number. A digital profile acts as a micro-landing page. You can embed an introductory video, link to your <Link href="/templates" className="text-primary hover:underline">best design portfolio</Link>, or provide a direct calendar link to book a meeting instantly.</li>
            <li><strong>Zero Reprint Costs:</strong> Got a promotion? Changed your company phone number? Rebranded? With a digital card, you log in, change the text, and instantly every person who scans your code sees the updated information. Say goodbye to throwing away boxes of obsolete paper stock.</li>
            <li><strong>Two-Way Lead Generation:</strong> The best digital business cards feature lead capture forms. When someone views your profile, they are prompted to submit their name and email back to you, which can automatically sync with your CRM. It turns a passive introduction into active pipeline generation.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-10 mb-4">Real-World Example in Recruiting</h2>
          <p>
            Consider an executive recruiter attending a massive industry mixer. Passing out paper cards yields almost zero actionable data—they have no idea who actually kept the card. By using a digital card, the recruiter can look at their analytics dashboard the next morning and see that their profile was viewed 42 times, their &quot;View Current Job Openings&quot; link was clicked 18 times, and 12 people used the lead capture form to request a follow-up call. That is measurable ROI.
          </p>

          <div className="mt-10 p-6 bg-muted rounded-xl text-center">
            <p className="font-medium mb-4">Stop throwing away opportunities. Digitize your networking today.</p>
            <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
              Build Your Digital Card
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
