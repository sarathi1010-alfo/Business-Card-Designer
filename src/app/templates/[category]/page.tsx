import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';

export const templateOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  "modern-digital-business-card": {
    title: "Modern Digital Business Card Templates",
    description: "Sleek, forward-thinking templates designed for modern professionals.",
    faqHeader: "Modern Templates FAQ",
    q1: "What makes a template 'modern'?",
    a1: "Modern templates utilize ample whitespace, sans-serif typography, and clean lines to focus entirely on essential information.",
    q2: "Are modern templates suitable for corporate jobs?",
    a2: "Absolutely. A clean, modern aesthetic is highly professional and works well across almost all industries.",
    content: (
      <div className="prose dark:prose-invert mb-8 max-w-none">
        <h3 className="text-2xl font-semibold mt-4 mb-2">Keep It Clean and Current</h3>
        <p>Our modern templates strip away the clutter. They are perfect for tech professionals, startup founders, and anyone who wants to project a forward-thinking image.</p>
      </div>
    )
  },
  "corporate-digital-business-card": {
    title: "Corporate Digital Business Card Templates",
    description: "Professional, authoritative templates for enterprise and traditional sectors.",
    faqHeader: "Corporate Templates FAQ",
    q1: "Can I add my company logo?",
    a1: "Yes, all corporate templates feature prominent logo placement to ensure brand consistency.",
    q2: "Are these templates too boring?",
    a2: "Corporate doesn't mean boring. It means structured and trustworthy. We use proven design hierarchies to communicate authority.",
    content: (
      <div className="prose dark:prose-invert mb-8 max-w-none">
        <h3 className="text-2xl font-semibold mt-4 mb-2">Establish Instant Credibility</h3>
        <p>In finance, law, or consulting, trust is everything. Our corporate templates are designed to project stability, reliability, and unquestionable professionalism.</p>
      </div>
    )
  }
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const override = templateOverrides[resolvedParams.category];
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: override ? override.title : `${titleCase} Business Card Templates Free`,
    description: override ? override.description : `Browse our collection of free ${category} business card templates. Customize and download instantly.`,
    alternates: {
      canonical: `/templates/${resolvedParams.category}`,
    }
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const override = templateOverrides[resolvedParams.category];
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  // Filter templates (in a real app, this would be a DB query)
  // We match against "Minimal", "Corporate", "Creative" etc.
  const categoryTemplates = mockTemplates.filter(t =>
    t.category.toLowerCase() === titleCase.toLowerCase() ||
    titleCase.toLowerCase().includes(t.category.toLowerCase())
  );
  const templatesToDisplay = categoryTemplates.length > 0 ? categoryTemplates : mockTemplates.slice(0, 3); // Fallback

  const q1 = override ? override.q1 : `What are ${titleCase} business card templates?`;
  const a1 = override ? override.a1 : `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`;
  const q2 = override ? override.q2 : `Can I customize the ${titleCase} digital business card templates?`;
  const a2 = override ? override.a2 : `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": q1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a1
        }
      },
      {
        "@type": "Question",
        "name": q2,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a2
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{override ? override.title : `${titleCase} Business Card Templates`}</h1>
        <p className="text-xl text-muted-foreground">
          {override ? override.description : `Start with a professionally designed ${category} template and customize it for your brand.`}
        </p>
      </div>

      {override?.content}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templatesToDisplay.map((template) => (
          <Link key={template.id} href={`/editor/${template.id}`} className="group block">
            <div className="relative aspect-[1.75/1] rounded-lg border bg-muted overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div
                className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 text-sm font-medium"
                style={{ backgroundColor: template.backgroundColor }}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 text-foreground px-4 py-2 rounded-md font-medium shadow-sm">
                  Customize Template
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {template.name}
                </h3>
                <p className="text-sm text-muted-foreground">{template.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {categoryTemplates.length === 0 && (
        <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
          <p className="text-muted-foreground">Showing popular templates. More {category} templates coming soon.</p>
        </div>
      )}

      <div className="mt-12 prose dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mb-6">{override ? override.faqHeader : "Frequently Asked Questions"}</h2>
        <h3 className="text-2xl font-semibold mb-2">{q1}</h3>
        <p>{a1}</p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
        <p>{a2}</p>
      </div>
    </div>
  );
}