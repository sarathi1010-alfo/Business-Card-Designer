import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Do I Need a Digital Business Card?',
  description: 'Explore the core benefits, ROI, and networking advantages of moving from paper to a modern digital profile in 2026.',
  alternates: {
    canonical: '/blog/why-do-i-need-one',
  }
};

export default function WhyDoINeedOne() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do I need a digital business card in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need a digital business card because it allows you to instantly share comprehensive professional information, track networking analytics, capture leads directly into your CRM, and easily update your details without the environmental waste or cost of reprinting paper cards."
        }
      },
      {
        "@type": "Question",
        "name": "What is the ROI of a digital business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ROI of a digital business card comes from time saved on manual CRM data entry, increased conversion rates from direct calendar booking links, and the elimination of recurring printing costs for outdated paper cards."
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
          Why Do I Need a Digital Business Card?
        </h1>
        <p className="text-xl text-muted-foreground">
          Explore the core benefits, ROI, and networking advantages of moving from paper to a modern digital profile.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          If you have successfully networked using paper business cards for years, you might be wondering why you should change now. The short answer: the business world has moved on, and a paper card is no longer sufficient to capture and maintain modern professional relationships.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">The True Cost of Paper</h2>
        <p>
          Think about the lifecycle of a traditional business card. You hand it to a prospect. Best case scenario, they take the time to manually type your email address into their phone, inevitably make a typo, and then throw the card away. Worst case scenario, the card goes directly into the trash or gets lost in a desk drawer. You have zero visibility into what happens after the handoff.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Four Reasons You Need to Go Digital</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">1. Instant CRM Integration</h3>
        <p>
          For sales professionals and founders, time is money. A digital business card acts as a lead generation tool. When you meet a prospect, they can input their details directly into your card&apos;s interface. This data is instantly synced to your CRM (Customer Relationship Management) system. This eliminates hours of tedious manual data entry and ensures that every lead is immediately placed into your follow-up funnel.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">2. Actionable Analytics</h3>
        <p>
          A paper card provides zero feedback. A digital card provides a wealth of data. You can see how many times your card has been scanned, which links were clicked, and which days generated the most activity. If you notice that your &quot;Book a Meeting&quot; link gets ten times more clicks than your &quot;View Portfolio&quot; link, you can redesign your card to prioritize the calendar booking.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">3. Infinite Updates</h3>
        <p>
          Your professional life is dynamic. You might get a promotion, change your phone number, or rebrand your company. With a physical card, any change requires throwing away your existing stock and ordering hundreds of new ones. With a digital card, you simply log into your dashboard, update the field, and the change is instantly reflected for anyone who views your card moving forward.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">4. Projecting a Modern Brand Image</h3>
        <p>
          Handing someone a paper card in 2026 can inadvertently signal that you or your company are lagging behind the technology curve. Sharing a sleek digital profile via a QR code scan or an NFC tap demonstrates that you are modern, efficient, and environmentally conscious.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">The Bottom Line</h2>
        <p>
          You need a digital business card because it transitions your networking from a passive exchange of contact details into an active, measurable, and highly efficient business process. It saves time, saves money, and most importantly, it helps you close more deals.
        </p>

        <div className="mt-12 p-6 bg-muted rounded-lg border">
          <h3 className="text-xl font-bold mb-4">Make the Switch Today</h3>
          <p className="mb-4">
            Join thousands of professionals who have upgraded their networking.
          </p>
          <Link href="/templates" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Create Your Card
          </Link>
        </div>
      </div>
    </article>
  );
}
