import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}


const templateOverrides: Record<string, { h1: string; p1: string; p2: string; q1: string; a1: string; q2: string; a2: string }> = {
  "minimalist": {
    h1: "Minimalist Digital Business Card Templates (Clean & Professional)",
    p1: "In professional networking, less is often more. Our minimalist digital business card templates are designed for those who appreciate clean aesthetics, ample white space, and crystal-clear typography. A clutter-free layout ensures that your name, title, and contact information take center stage without any distracting elements.",
    p2: "Whether you are a modern executive, a sleek agency owner, or an independent consultant, a minimalist design communicates quiet confidence and sophistication. Choose from our curated selection of black-and-white or subtle monochrome themes, easily update your details, and share your elegant digital card instantly via QR code.",
    q1: "What makes a digital business card minimalist?",
    a1: "A minimalist digital business card focuses on essential information, utilizing generous white space, limited color palettes (often monochrome), and highly readable, sans-serif typography to create a clean, modern aesthetic.",
    q2: "Can I still track analytics with a minimalist template?",
    a2: "Yes. The design may be minimal, but the backend functionality remains powerful. You still get access to full scan analytics, click tracking, and lead capture features."
  },
  "creative": {
    h1: "Creative Digital Business Card Templates for Artists & Designers",
    p1: "Your digital business card should be an extension of your creative portfolio. Our creative digital business card templates are built specifically for artists, designers, photographers, and creatives who want their personality to shine through. Ditch the boring corporate layouts and opt for bold colors, unique typography, and dynamic backgrounds.",
    p2: "These templates are optimized for visual impact. You can seamlessly embed links to your latest Behance projects, Instagram feed, or personal gallery right on the card. By combining a striking visual design with our powerful QR code sharing and lead capture tools, you ensure that every new connection immediately understands your unique creative vision.",
    q1: "Who should use a creative digital business card template?",
    a1: "These templates are ideal for graphic designers, artists, photographers, illustrators, and anyone in a creative field who wants their networking tools to reflect their artistic style.",
    q2: "Can I customize the colors to match my brand?",
    a2: "Absolutely. All creative templates on BrandCard allow for full customization of colors, fonts, and background elements to ensure your card perfectly aligns with your personal brand."
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const override = templateOverrides[rawCategory];
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: override ? override.h1 : `${titleCase} Business Card Templates Free`,
    description: `Browse our collection of free ${category} business card templates. Customize and download instantly.`,
    alternates: {
      canonical: `/templates/${resolvedParams.category}`,
    }
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const override = templateOverrides[rawCategory];
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

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
        "name": override ? override.q1 : `What are ${titleCase} business card templates?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override ? override.a1 : `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`
        }
      },
      {
        "@type": "Question",
        "name": override ? override.q2 : `Can I customize the ${titleCase} digital business card templates?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override ? override.a2 : `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`
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
        <h1 className="text-4xl font-bold mb-4">{override ? override.h1 : `${titleCase} Business Card Templates`}</h1>
        {override ? (
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <p>{override.p1}</p>
            <p className="mt-4">{override.p2}</p>
          </div>
        ) : (
          <p className="text-xl text-muted-foreground">
            Start with a professionally designed {category} template and customize it for your brand.
          </p>
        )}
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

      <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{override ? override.q1 : `What are ${titleCase} business card templates?`}</h3>
        <p>{override ? override.a1 : `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{override ? override.q2 : `Can I customize the ${titleCase} digital business card templates?`}</h3>
        <p>{override ? override.a2 : `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`}</p>
      </div>

      {categoryTemplates.length === 0 && (
        <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
          <p className="text-muted-foreground">Showing popular templates. More {category} templates coming soon.</p>
        </div>
      )}
    </div>
  );
}