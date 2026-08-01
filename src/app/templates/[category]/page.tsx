import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';


const templateOverrides: Record<string, { title: string, desc: string, q1: string, a1: string, q2: string, a2: string }> = {
  'modern': {
    title: 'Modern Business Card Templates',
    desc: 'Browse our collection of free modern business card templates. Stand out with contemporary designs.',
    q1: 'What makes a business card template modern?',
    a1: 'Modern business card templates typically feature clean lines, ample white space, bold typography, and often integrate dynamic elements like QR codes for seamless digital networking.',
    q2: 'Are modern templates suitable for all industries?',
    a2: 'Yes, modern templates are highly versatile and can be customized to suit almost any industry, from tech startups to real estate and creative agencies.'
  },
  'elegant': {
    title: 'Elegant Business Card Templates',
    desc: 'Browse our collection of free elegant business card templates. Impress clients with sophisticated designs.',
    q1: 'When should I use an elegant business card template?',
    a1: 'Elegant templates are ideal for high-end services, luxury real estate, law firms, and consulting, where conveying sophistication and trust is paramount.',
    q2: 'How do I customize an elegant template?',
    a2: 'You can customize an elegant template by utilizing classic typography, refined color palettes (like deep blues, golds, or monochrome), and keeping the layout uncluttered.'
  }
};


interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());


  const overrideKey = rawCategory;
  const overrideData = templateOverrides[overrideKey];
  return {
    title: overrideData ? overrideData.title : `${titleCase} Business Card Templates Free`,
    description: overrideData ? overrideData.desc : `Browse our collection of free ${category} business card templates. Customize and download instantly.`,
    alternates: {
      canonical: `/templates/${resolvedParams.category}`,
    }
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  // Filter templates (in a real app, this would be a DB query)
  // We match against "Minimal", "Corporate", "Creative" etc.
  const overrideKey = rawCategory;
  const overrideData = templateOverrides[overrideKey];

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
        "name": overrideData ? overrideData.q1 : `What are ${titleCase} business card templates?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": overrideData ? overrideData.a1 : `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`
        }
      },
      {
        "@type": "Question",
        "name": overrideData ? overrideData.q2 : `Can I customize the ${titleCase} digital business card templates?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": overrideData ? overrideData.a2 : `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`
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
        <h1 className="text-4xl font-bold mb-4">{overrideData ? overrideData.title : `${titleCase} Business Card Templates`}</h1>
        <p className="text-xl text-muted-foreground">
          Start with a professionally designed {category} template and customize it for your brand.
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