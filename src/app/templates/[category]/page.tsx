import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

const templateOverrides: Record<string, { title: string, desc: string, q1: string, a1: string, q2: string, a2: string }> = {
  'tech-startup': {
    title: "Tech Startup Business Card Templates",
    desc: "Browse our collection of tech startup business card templates. Perfect for founders and engineers.",
    q1: "What are Tech Startup business card templates?",
    a1: "Tech Startup business card templates are sleek, dark-mode inspired layouts optimized for developers, founders, and tech professionals to showcase their repositories and social proof.",
    q2: "Can I customize the Tech Startup digital business card templates?",
    a2: "Yes, all Tech Startup templates on BrandCard are fully customizable. You can adjust colors to match your brand, add custom fonts, and embed specific links like GitHub or Calendly."
  },
  'medical-professional': {
    title: "Medical Professional Business Card Templates",
    desc: "Browse our collection of medical professional business card templates designed for trust and clarity.",
    q1: "What are Medical Professional business card templates?",
    a1: "Medical Professional business card templates are clean, highly legible designs focused on conveying trust and prominently displaying medical credentials and clinic information.",
    q2: "Can I customize the Medical Professional digital business card templates?",
    a2: "Yes, all Medical Professional templates on BrandCard are fully customizable. You can easily add your clinic's logo, adjust the color palette (like trustworthy blues), and include secure booking links."
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
  const h1Title = override ? override.title : `${titleCase} Business Card Templates`;

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
        <h1 className="text-4xl font-bold mb-4">{h1Title}</h1>
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