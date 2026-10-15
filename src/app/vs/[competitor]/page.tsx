import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: Promise<{ competitor: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const competitor = resolvedParams.competitor.replace(/-/g, ' ');
  const titleCase = competitor.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `BrandCard vs ${titleCase} | Best Alternative`,
    description: `Looking for an alternative to ${titleCase} for business cards? See why BrandCard is the faster, more private, and entirely free choice.`,
    alternates: {
      canonical: `/vs/${resolvedParams.competitor}`,
    }
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const resolvedParams = await params;
  const competitor = resolvedParams.competitor.replace(/-/g, ' ');
  const titleCase = competitor.replace(/\b\w/g, (c) => c.toUpperCase());

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `BrandCard vs ${titleCase}: Which Digital Business Card is Better?`,
      "description": `A comprehensive comparison between BrandCard and ${titleCase} for professional digital business cards.`,
      "author": { "@type": "Organization", "name": "BrandCard" },
      "publisher": { "@type": "Organization", "name": "BrandCard" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `Is BrandCard really free compared to ${titleCase}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, BrandCard offers all premium features for free, whereas ${titleCase} often gates them behind a subscription.`
          }
        },
        {
          "@type": "Question",
          "name": `Does BrandCard have better privacy than ${titleCase}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `BrandCard processes data client-side, ensuring your information stays yours, unlike account-heavy platforms.`
          }
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
        BrandCard vs {titleCase}
      </h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Why professionals are switching to BrandCard for their digital business card needs in 2026.
      </p>

      {/* AI Overview Answer Block */}
      <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-12">
        <p className="font-medium text-lg m-0">
          <strong>Quick Verdict:</strong> BrandCard is the superior choice for professionals seeking a 100% free, private, and high-performance digital business card without the overhead of subscriptions or watermarks found in {titleCase}.
        </p>
      </div>

      <div className="overflow-x-auto mb-16">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-4 font-bold">Feature</th>
              <th className="py-4 font-bold text-primary">BrandCard</th>
              <th className="py-4 font-bold">{titleCase}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4">Pricing</td>
              <td className="py-4">100% Free</td>
              <td className="py-4 text-muted-foreground">Freemium / Subscription</td>
            </tr>
            <tr className="border-b">
              <td className="py-4">Watermarks</td>
              <td className="py-4">None</td>
              <td className="py-4 text-muted-foreground">On Free Tier</td>
            </tr>
            <tr className="border-b">
              <td className="py-4">Privacy</td>
              <td className="py-4">Local-first / Privacy-centric</td>
              <td className="py-4 text-muted-foreground">Account-based / Data-heavy</td>
            </tr>
            <tr className="border-b">
              <td className="py-4">Speed</td>
              <td className="py-4 text-green-600 font-medium">Ultra-Fast</td>
              <td className="py-4 text-muted-foreground">Standard</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 border rounded-lg bg-primary/5">
          <h2 className="text-2xl font-bold mb-4 text-primary">Why Choose BrandCard</h2>
          <ul className="space-y-3">
            <li>✓ 100% Free forever - no hidden costs</li>
            <li>✓ No watermark - keep your brand professional</li>
            <li>✓ No account required to start designing</li>
            <li>✓ High-resolution exports for all users</li>
            <li>✓ Fully private, client-side processing</li>
          </ul>
        </div>
        <div className="p-8 border rounded-lg bg-muted/30">
          <h2 className="text-2xl font-bold mb-4 text-muted-foreground">{titleCase} Limitations</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>× Often requires paid subscription for premium elements</li>
            <li>× May enforce watermarks on free tiers</li>
            <li>× Forces account creation and data collection</li>
            <li>× Heavier, slower interface with complex menus</li>
          </ul>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
        <h2 className="text-3xl font-bold">When to choose BrandCard?</h2>
        <p>
          Choose BrandCard if you value speed, privacy, and cost-effectiveness. Our tool is designed for modern professionals who want a high-quality digital presence without the friction of account setups and recurring monthly fees.
        </p>

        <h2 className="text-3xl font-bold">When to choose {titleCase}?</h2>
        <p>
          You might consider {titleCase} if you require highly specific enterprise integrations or if your organization is already deeply embedded in their proprietary ecosystem.
        </p>
      </div>

      <div className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-2">Is BrandCard really free compared to {titleCase}?</h3>
            <p className="text-muted-foreground">Yes, BrandCard offers all premium features for free, whereas {titleCase} often gates them behind a subscription.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Does BrandCard have better privacy than {titleCase}?</h3>
            <p className="text-muted-foreground">BrandCard processes data client-side, ensuring your information stays yours, unlike account-heavy platforms.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to make the switch?</h2>
        <Link href="/templates">
          <Button size="lg">Start Designing Free</Button>
        </Link>
      </div>
    </div>
  );
}