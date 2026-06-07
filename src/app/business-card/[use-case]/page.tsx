import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: Promise<{ 'use-case': string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const useCase = resolvedParams['use-case'].replace(/-/g, ' ');
  const titleCase = useCase.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `Create a ${titleCase} Business Card Free | alfo.online`,
    description: `Design a professional ${useCase} business card in minutes. Free templates, instant downloads, no sign-up required.`,
    alternates: {
      canonical: `https://business-card-designer.alfo.online/business-card/${resolvedParams['use-case']}`,
    }
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const useCase = resolvedParams['use-case'].replace(/-/g, ' ');
  const titleCase = useCase.replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Free {titleCase} Business Card Maker
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Stand out with a custom {useCase} business card. Choose a template, customize it in our browser-based editor, and download it instantly.
        </p>
        <Link href="/templates">
          <Button size="lg">Browse {titleCase} Templates</Button>
        </Link>
      </div>

      <div className="prose dark:prose-invert max-w-none mt-16">
        <h2>Why use a specific {useCase} layout?</h2>
        <p>
          First impressions matter. When you hand someone a {useCase} business card, you want it to clearly communicate your profession and brand identity immediately.
        </p>
        <h2>How to make a {useCase} business card</h2>
        <ol>
          <li>Browse our free template library.</li>
          <li>Select a design that fits your brand.</li>
          <li>Use our drag-and-drop canvas editor to add your logo, contact info, and custom colors.</li>
          <li>Export as a high-resolution PNG or PDF for printing.</li>
        </ol>
      </div>
    </div>
  );
}