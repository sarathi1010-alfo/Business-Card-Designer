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

type OverrideData = {
  heroText?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
};

const templateOverrides: Record<string, OverrideData> = {
  "elegant": {
    heroText: "Impress high-end clients with our premium elegant digital business card templates, designed for executives and luxury brands.",
    q1: "What makes an elegant digital business card template different?",
    a1: "Elegant templates focus on sophisticated typography, muted or luxurious color palettes (like gold, charcoal, and marble), and minimalist layouts that project authority and exclusivity.",
    q2: "Can I use an elegant template for a standard business?",
    a2: "Yes, an elegant template is perfect for anyone wanting to elevate their professional image, such as lawyers, financial advisors, or real estate brokers."
  },
  "tech-startup": {
    heroText: "Showcase your innovation with tech startup digital business card templates featuring bold colors, dark mode, and modern typography.",
    q1: "Why use a tech startup specific template?",
    a1: "Tech startup templates are designed to look modern and disruptive, often utilizing dark themes, neon accents, and monospace fonts that resonate with developers and investors.",
    q2: "Can I add my startup's pitch deck to these templates?",
    a2: "Absolutely. BrandCard allows you to link directly to your hosted pitch deck, making it easily accessible to any investor who scans your card."
  }
};

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  const override = templateOverrides[rawCategory.toLowerCase()];

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
        "name": override?.q1 || `What are ${titleCase} business card templates?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override?.a1 || `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`
        }
      },
      {
        "@type": "Question",
        "name": override?.q2 || `Can I customize the ${titleCase} digital business card templates?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override?.a2 || `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`
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
        <h1 className="text-4xl font-bold mb-4">{titleCase} Business Card Templates</h1>
        <p className="text-xl text-muted-foreground">
          {override?.heroText || `Start with a professionally designed ${category} template and customize it for your brand.`}
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