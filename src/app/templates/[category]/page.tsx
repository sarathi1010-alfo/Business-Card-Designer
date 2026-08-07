import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${titleCase} Business Card Templates Free`,
    description: `Browse our collection of free ${category} business card templates. Customize and download instantly.`,
    alternates: {
      canonical: `/templates/${resolvedParams.category}`,
    }
  };
}

export const templateOverrides: Record<string, { q1?: string, a1?: string, q2?: string, a2?: string, customH1?: string, customDesc?: string }> = {
  professional: {
    q1: "What makes a digital business card 'professional'?",
    a1: "A professional digital business card features a clean, uncluttered layout, high-contrast typography for readability, and sections specifically designed for corporate credentials, LinkedIn profiles, and verified company details.",
    q2: "Are professional templates suitable for enterprise use?",
    a2: "Yes, our professional templates are designed to align with corporate brand guidelines and are frequently used by enterprise teams to maintain a unified, trustworthy appearance.",
    customH1: "Professional Digital Business Card Templates",
    customDesc: "Elevate your corporate identity with our collection of sleek, professional digital business card templates designed for executives, consultants, and enterprise teams."
  },
  elegant: {
    q1: "Why choose an elegant digital business card template?",
    a1: "Elegant templates use minimalist design principles, sophisticated color palettes, and refined typography to convey luxury and high-end service, perfect for real estate, fashion, or boutique consulting.",
    q2: "Can I customize the colors on an elegant template?",
    a2: "Absolutely. While they start with curated, elegant palettes, you can fully customize the colors to match your premium brand identity.",
    customH1: "Elegant Digital Business Card Templates",
    customDesc: "Make a sophisticated first impression with our elegant digital business card templates, crafted for luxury brands and premium service providers."
  }
};

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
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

  const overrideKey = rawCategory;
  const override = templateOverrides[overrideKey] || {};

  const q1 = override.q1 || `What are ${titleCase} business card templates?`;
  const a1 = override.a1 || `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`;
  const q2 = override.q2 || `Can I customize the ${titleCase} digital business card templates?`;
  const a2 = override.a2 || `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`;

  const displayH1 = override.customH1 || `${titleCase} Business Card Templates`;
  const displayDesc = override.customDesc || `Start with a professionally designed ${category} template and customize it for your brand.`;

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
        <h1 className="text-4xl font-bold mb-4">{displayH1}</h1>
        <p className="text-xl text-muted-foreground">
          {displayDesc}
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
    </div>
  );
}