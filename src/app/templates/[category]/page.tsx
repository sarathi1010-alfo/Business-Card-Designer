import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

const templateOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content?: React.ReactNode }> = {
  'industry-specific-digital-business-card': {
    title: "Industry-Specific Business Card Templates",
    description: "Browse our collection of free industry-specific business card templates. Tailored designs for tech, legal, medical, and creative professionals.",
    faqHeader: "Industry-Specific Template FAQs",
    q1: "What are industry-specific business card templates?",
    a1: "These are pre-designed layouts optimized to highlight the most important information for specific fields, like portfolios for designers or credentials for lawyers.",
    q2: "Can I customize the industry-specific digital business card templates?",
    a2: "Yes, all our industry-specific templates are fully customizable to match your exact personal or corporate branding.",
    content: (
      <>
        <div className="mb-8 p-6 bg-muted/50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Tailored for Your Profession</h2>
          <p>Don't use a generic card when you can use a design built specifically to convert within your industry.</p>
        </div>
      </>
    )
  },
  'professional-networking-digital-card': {
    title: "Professional Networking Business Card Templates",
    description: "Browse our collection of professional networking business card templates. Built to capture leads and track analytics.",
    faqHeader: "Professional Networking Template FAQs",
    q1: "What makes a professional networking business card template effective?",
    a1: "Effective networking templates prioritize clear calls-to-action, prominent lead capture forms, and clean, scannable QR codes.",
    q2: "Can I use these templates for virtual networking?",
    a2: "Absolutely. These templates are designed to be shared via URL in Zoom chats or LinkedIn messages just as easily as they are scanned in person.",
    content: (
      <>
        <div className="mb-8 p-6 bg-muted/50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Built to Connect</h2>
          <p>These templates strip away the fluff and focus purely on facilitating professional connections and capturing contact data.</p>
        </div>
      </>
    )
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;
  const override = templateOverrides[categorySlug];

  const rawCategory = categorySlug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: override ? `${override.title} Free` : `${titleCase} Business Card Templates Free`,
    description: override ? override.description : `Browse our collection of free ${category} business card templates. Customize and download instantly.`,
    alternates: {
      canonical: `/templates/${categorySlug}`,
    }
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;
  const override = templateOverrides[categorySlug];

  const rawCategory = categorySlug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  const q1 = override ? override.q1 : `What are ${titleCase} business card templates?`;
  const a1 = override ? override.a1 : `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`;
  const q2 = override ? override.q2 : `Can I customize the ${titleCase} digital business card templates?`;
  const a2 = override ? override.a2 : `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`;

  // Filter templates (in a real app, this would be a DB query)
  // We match against "Minimal", "Corporate", "Creative" etc.
  const categoryTemplates = mockTemplates.filter(t =>
    t.category.toLowerCase() === titleCase.toLowerCase() ||
    titleCase.toLowerCase().includes(t.category.toLowerCase())
  );
  const templatesToDisplay = categoryTemplates.length > 0 ? categoryTemplates : mockTemplates.slice(0, 3); // Fallback

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

      {override?.content && override.content}

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

      <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">{override ? override.faqHeader : "Frequently Asked Questions"}</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
        <p>{a1}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
        <p>{a2}</p>
      </div>
    </div>
  );
}