import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

export const templateOverrides: Record<string, { h1?: string, h2?: string, content?: React.ReactNode, q1?: string, a1?: string, q2?: string, a2?: string }> = {
  'elegant': {
    h1: 'Elegant Digital Business Card Templates',
    h2: 'Sophisticated Designs for Premium Brands',
    content: (
      <>
        <p>When your brand relies on luxury, prestige, and high-end service, your digital business card needs to reflect that. Our collection of elegant digital business card templates is designed with refined typography, balanced whitespace, and subtle premium accents like gold or silver aesthetics.</p>
        <p>Ideal for luxury real estate agents, high-end event planners, and executive consultants, these templates ensure that your first digital impression conveys exclusivity and unparalleled professionalism. Simply select a template, add your details, and share your refined profile instantly.</p>
      </>
    ),
    q1: 'What makes an elegant digital business card template different?',
    a1: 'Elegant templates prioritize clean, sophisticated layouts, serif typography, and premium color palettes (like deep navy, gold, or charcoal) to project a sense of luxury and high-end service.',
    q2: 'Who should use elegant templates?',
    a2: 'Professionals in luxury real estate, high-end consulting, event planning, and boutique agencies often choose elegant templates to align their digital presence with their premium brand identity.'
  },
  'tech': {
    h1: 'Tech-Focused Digital Business Card Templates',
    h2: 'Modern Designs for Innovators',
    content: (
      <>
        <p>For developers, startup founders, and IT professionals, a standard corporate card feels outdated. Our tech-focused digital business card templates are built for innovators. Featuring dark mode aesthetics, monospace fonts, and high-contrast neon accents, these templates speak the language of the tech industry.</p>
        <p>Beyond the look, these templates are optimized to highlight your technical skills. Easily embed links to your GitHub repositories, personal tech blogs, or live product demos directly into your profile, turning a simple introduction into a powerful showcase of your technical abilities.</p>
      </>
    ),
    q1: 'Why use a tech-specific digital business card template?',
    a1: 'A tech-specific template immediately signals your industry alignment using familiar visual cues like monospace fonts and dark themes, making you stand out to peers and recruiters in the tech space.',
    q2: 'Can I link to my GitHub from these templates?',
    a2: 'Yes, all our tech templates are designed to prominently feature links to technical portfolios, GitHub, or live project deployments alongside standard contact information.'
  }
};

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

  const override = templateOverrides[rawCategory] || {};

  const q1 = override.q1 || `What are ${titleCase} business card templates?`;
  const a1 = override.a1 || `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`;
  const q2 = override.q2 || `Can I customize the ${titleCase} digital business card templates?`;
  const a2 = override.a2 || `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`;

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
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
          {override.h1 || `${titleCase} Business Card Templates`}
        </h1>
        <p className="text-xl text-muted-foreground">
          Start with a professionally designed {category} template and customize it for your brand.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <h2 className="text-3xl font-semibold mt-12 mb-6">{override.h2 || `Customize Your ${titleCase} Card`}</h2>

        {override.content ? (
          override.content
        ) : (
          <p>
            Browse our collection of {category} business card templates. Whether you are looking for a modern edge or a classic feel, these templates are designed to make your contact details pop. Customize colors, fonts, and layouts to match your personal brand perfectly.
          </p>
        )}
      </div>

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
        <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
          <p className="text-muted-foreground">Showing popular templates. More {category} templates coming soon.</p>
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none mt-16">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>
        <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
        <p>{a1}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
        <p>{a2}</p>
      </div>
    </div>
  );
}