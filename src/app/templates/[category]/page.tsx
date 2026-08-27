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

const templateOverrides: Record<string, { titleCase: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: string }> = {
  'architectural': {
    titleCase: 'Architectural',
    description: 'Minimalist, grid-focused business card templates perfect for architects and spatial designers.',
    faqHeader: 'Architectural Template FAQs',
    q1: 'What makes an architectural business card template unique?',
    a1: 'Architectural templates emphasize grid layouts, ample negative space, and modern typography to reflect precision and structural design principles.',
    q2: 'Can I add my own renderings to these templates?',
    a2: 'Yes, you can easily upload your own high-resolution architectural renderings or photographs to serve as the background or hero image of your card.',
    content: '<div className="prose max-w-none mb-8"><p>When your profession is built on design and precision, your digital business card must reflect those exact qualities. Our architectural templates are designed with clean lines, structural grids, and minimalist typography.</p><h3>Built on Solid Foundations</h3><p>Choose an architectural template to ensure that your first digital impression conveys the same level of thoughtfulness and aesthetic rigor as your physical projects.</p></div>'
  },
  'legal': {
    titleCase: 'Legal',
    description: 'Authoritative, classic business card templates designed for law firms and independent attorneys.',
    faqHeader: 'Legal Template FAQs',
    q1: 'Are legal templates professional enough for corporate clients?',
    a1: 'Absolutely. Our legal templates use conservative color palettes (like navy, dark green, and slate) and classic serif or strong sans-serif fonts to project authority and trustworthiness.',
    q2: 'Do these templates support vCard downloads?',
    a2: 'Yes, all our templates, including the legal designs, feature one-tap vCard downloads so clients can easily and accurately save your contact information.',
    content: '<div className="prose max-w-none mb-8"><p>Trust and authority are the cornerstones of the legal profession. Your digital business card should instantly communicate reliability and expertise to prospective clients.</p><h3>Command Respect</h3><p>Our legal templates avoid flashy elements in favor of timeless, professional designs. They are optimized to prominently display your credentials, practice areas, and secure contact options.</p></div>'
  }
};

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const override = templateOverrides[rawCategory];

  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = override ? override.titleCase : category.replace(/\b\w/g, (c) => c.toUpperCase());
  const description = override ? override.description : `Start with a professionally designed ${category} template and customize it for your brand.`;
  const faqHeader = override ? override.faqHeader : 'Frequently Asked Questions';
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
        <h1 className="text-4xl font-bold mb-4">{titleCase} Business Card Templates</h1>
        <p className="text-xl text-muted-foreground">
          {description}
        </p>
      </div>

      {override && <div dangerouslySetInnerHTML={{ __html: override.content }} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
        <div className="mt-8 mb-16 p-4 bg-muted/50 rounded-lg text-center">
          <p className="text-muted-foreground">Showing popular templates. More {category} templates coming soon.</p>
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none mt-16">
        <h2 className="text-3xl font-semibold mb-6">{faqHeader}</h2>
        <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
        <p>{a1}</p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
        <p>{a2}</p>
      </div>
    </div>
  );
}