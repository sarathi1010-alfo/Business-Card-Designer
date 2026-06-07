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
    title: `CardStudio vs ${titleCase} | Best Business Card Maker Alternative`,
    description: `Looking for an alternative to ${titleCase} for business cards? See why CardStudio is the faster, more private, and entirely free choice.`,
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const resolvedParams = await params;
  const competitor = resolvedParams.competitor.replace(/-/g, ' ');
  const titleCase = competitor.replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
        CardStudio vs {titleCase}
      </h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Why professionals are switching to CardStudio for their business card design needs.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 border rounded-lg bg-primary/5">
          <h2 className="text-2xl font-bold mb-4 text-primary">CardStudio</h2>
          <ul className="space-y-3">
            <li>✓ 100% Free forever</li>
            <li>✓ No watermark</li>
            <li>✓ No account required to start</li>
            <li>✓ High-resolution exports</li>
            <li>✓ Fully private, runs in browser</li>
          </ul>
        </div>
        <div className="p-8 border rounded-lg bg-muted/30">
          <h2 className="text-2xl font-bold mb-4 text-muted-foreground">{titleCase}</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>× Often requires paid subscription for premium elements</li>
            <li>× May enforce watermarks on free tiers</li>
            <li>× Forces account creation</li>
            <li>× Heavier, slower interface</li>
          </ul>
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