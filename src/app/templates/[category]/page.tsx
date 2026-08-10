import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}


const templateOverrides: Record<string, { title: string, desc: string, q1: string, a1: string, q2: string, a2: string }> = {
  'elegant': {
    title: "Elegant Business Card Templates Free",
    desc: "Browse our collection of free elegant business card templates. Sophisticated designs for premium brands.",
    q1: "What makes an elegant business card template?",
    a1: "Elegant business card templates feature minimalist layouts, ample white space, refined typography (often serif fonts), and subtle color palettes that convey luxury and professionalism.",
    q2: "Can I customize these elegant templates?",
    a2: "Yes, our elegant templates are fully customizable. You can adjust the colors to match your brand guidelines, change fonts, and add your own high-quality logo."
  },
  'bold': {
    title: "Bold Business Card Templates Free",
    desc: "Browse our collection of free bold business card templates. Stand out with high-contrast, striking designs.",
    q1: "When should I use a bold business card template?",
    a1: "Bold business card templates are perfect for creative industries, modern startups, or any professional who wants to make a strong, memorable visual statement.",
    q2: "Are bold templates still professional?",
    a2: "Absolutely. When designed well with a clean layout and balanced contrast, bold templates are highly professional while ensuring you are remembered."
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());
  const override = templateOverrides[rawCategory];

  return {
    title: override ? override.title : `${titleCase} Business Card Templates Free`,
    description: override ? override.desc : `Browse our collection of free ${category} business card templates. Customize and download instantly.`,
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
  const override = templateOverrides[rawCategory];

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
        <h1 className="text-4xl font-bold mb-4">{titleCase} Business Card Templates</h1>
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