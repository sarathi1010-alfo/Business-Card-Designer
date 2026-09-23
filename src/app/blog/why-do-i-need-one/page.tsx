import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Do I Need a Digital Business Card? Top 5 Reasons',
  description: 'Explore the critical reasons why adopting a digital business card is essential for networking ROI, lead generation, and personal branding in 2026.',
  alternates: {
    canonical: '/blog/why-do-i-need-one',
  }
};

export default function WhyDoINeedOne() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do I need a digital business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need a digital business card to ensure your contact information is instantly saved into a prospect's phone, to track networking analytics, and to integrate lead capture directly into your CRM."
        }
      },
      {
        "@type": "Question",
        "name": "Is it unprofessional to not have a physical business card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In modern networking, it is increasingly viewed as outdated to rely solely on physical cards. Offering a digital card demonstrates tech-savviness and respect for the recipient's convenience and time."
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
          Why Do I Need a Digital Business Card?
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover why clinging to paper cards is costing you leads, and why the transition to digital networking is mandatory for modern professionals.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          If you have been successfully using paper business cards for years, you might be wondering: "If it isn't broken, why fix it?"
        </p>
        <p>
          The reality is, the traditional paper business card <em>is</em> broken. The vast majority of paper cards handed out at conferences, trade shows, and meetings end up in the trash or lost at the bottom of a briefcase. The data on them rarely makes it into a CRM or a phonebook. A <Link href="/blog/what-is-a-digital-business-card" className="text-primary hover:underline font-medium">digital business card</Link> fixes this broken pipeline.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Top Reasons You Must Go Digital</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-4">1. The Guarantee of Data Entry</h3>
        <p>
          The primary goal of a business card is to get your contact info into someone else's database. With a paper card, you are relying on the recipient to manually type your email and phone number into their phone—a high-friction task they will likely procrastinate.
        </p>
        <p>
          With a digital card, the recipient scans your <Link href="/blog/what-is-a-qr-code-business-card" className="text-primary hover:underline font-medium">QR code</Link> and taps a single "Save to Contacts" button. The friction is zero. Your data is instantly secured in their phonebook.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">2. Real-Time Information Updates</h3>
        <p>
          Got a promotion? Changed your phone number? Rebranded your company? If you use paper cards, your current batch is now garbage, and you must pay for a reprint. With a digital profile, you simply log into your dashboard, update the text field, and hit save. The next person who scans your QR code instantly sees the updated information.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">3. Active Lead Generation (Not Passive Display)</h3>
        <p>
          Paper cards are passive; they only broadcast information. Digital cards are active; they can collect information. By embedding a lead capture form on your digital profile, you can ask prospects to submit their email address in exchange for a whitepaper, a consultation booking, or a newsletter subscription. This transforms a simple introduction into a measurable marketing conversion.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Real-World Example in Freelancing</h2>
        <p>
          Consider a freelance web developer attending a local tech meetup. They meet a potential client looking for a website redesign. If the freelancer hands over a paper card, the client has to remember to email them later.
        </p>
        <p>
          If the freelancer uses a digital card, the client scans it and sees not only the contact info, but a prominent button linking directly to the freelancer's portfolio and a calendar link to "Book a 15-Min Discovery Call." The client books the meeting right there on their phone before they even walk away. The digital card facilitated an immediate micro-commitment.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Digital vs Physical ROI</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 font-semibold">Metric</th>
                <th className="py-4 px-6 font-semibold">Digital Card</th>
                <th className="py-4 px-6 font-semibold">Paper Card</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6">Contact Save Rate</td>
                <td className="py-4 px-6">High (1-tap download)</td>
                <td className="py-4 px-6">Low (Requires manual typing)</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Analytics Tracking</td>
                <td className="py-4 px-6">Yes (Scans, clicks, saves)</td>
                <td className="py-4 px-6">No visibility</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Rich Media Capacity</td>
                <td className="py-4 px-6">Unlimited (Videos, PDFs, Links)</td>
                <td className="py-4 px-6">None</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </article>
  );
}
