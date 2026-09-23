import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

const templateOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  'healthcare': {
    title: 'Healthcare & Medical Digital Business Card Templates',
    description: 'Browse professional, compliant digital business card templates designed specifically for healthcare professionals, clinics, and medical staff.',
    faqHeader: 'Healthcare Templates FAQs',
    q1: 'Are these templates suitable for clinics?',
    a1: 'Yes, our healthcare templates are designed to accommodate both individual practitioners and entire clinic staffs with consistent branding.',
    q2: 'Can I link to my patient portal?',
    a2: 'Absolutely. You can add secure links to your patient portal, appointment scheduling software, and telemedicine platforms directly on the card.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Designed for Medical Professionals</h2>
        <p>
          In the healthcare industry, trust and professionalism are paramount. Our collection of healthcare digital business card templates is crafted to reflect the seriousness and reliability required in the medical field, while providing the modern convenience of digital sharing.
        </p>
        <p>
          These templates prioritize clean layouts, calming color palettes (like clinical blues and greens), and prominent contact information, making it easy for patients and colleagues to connect with you securely.
        </p>
      </>
    )
  },
  'legal': {
    title: 'Legal & Law Firm Digital Business Card Templates',
    description: 'Premium, conservative digital business card templates for lawyers, attorneys, and legal professionals.',
    faqHeader: 'Legal Templates FAQs',
    q1: 'Do these templates convey a professional image?',
    a1: 'Yes, our legal templates use classic typography, structured layouts, and conservative color schemes to ensure you present an authoritative and trustworthy image.',
    q2: 'Can I add my practice areas to the card?',
    a2: 'Yes, you can easily customize the templates to highlight your specific practice areas, firm details, and direct consultation links.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Authoritative Design for Attorneys</h2>
        <p>
          Your business card is often the first representation of your legal practice. Our legal digital business card templates are meticulously designed to convey authority, tradition, and competence.
        </p>
        <p>
          Featuring classic serif typography and structured, minimalist layouts, these templates ensure that whether you are sharing your card at a deposition or a networking event, you leave a lasting, professional impression.
        </p>
      </>
    )
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.category;
  const override = templateOverrides[slug];
  const rawCategory = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: override?.title || `${titleCase} Business Card Templates Free`,
    description: override?.description || `Browse our collection of free ${category} business card templates. Customize and download instantly.`,
    alternates: {
      canonical: `/templates/${resolvedParams.category}`,
    }
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.category;
  const override = templateOverrides[slug];
  const rawCategory = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  // Filter templates (in a real app, this would be a DB query)
  // We match against "Minimal", "Corporate", "Creative" etc.
  const categoryTemplates = mockTemplates.filter(t =>
    t.category.toLowerCase() === titleCase.toLowerCase() ||
    titleCase.toLowerCase().includes(t.category.toLowerCase())
  );
  const templatesToDisplay = categoryTemplates.length > 0 ? categoryTemplates : mockTemplates.slice(0, 3); // Fallback

  const q1 = override?.q1 || `What are ${titleCase} business card templates?`;
  const a1 = override?.a1 || `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`;
  const q2 = override?.q2 || `Can I customize the ${titleCase} digital business card templates?`;
  const a2 = override?.a2 || `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`;
  const faqHeader = override?.faqHeader || 'Frequently Asked Questions';

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
        <h1 className="text-4xl font-bold mb-4">{override?.title || `${titleCase} Business Card Templates`}</h1>
        <p className="text-xl text-muted-foreground">
          {override?.description || `Start with a professionally designed ${category} template and customize it for your brand.`}
        </p>
      </div>

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

      <div className="prose prose-lg dark:prose-invert max-w-none mt-16">
        {override?.content}

        <h2 className="text-3xl font-semibold mt-12 mb-6">{faqHeader}</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
        <p>{a1}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
        <p>{a2}</p>
      </div>
    </div>
  );
}