import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

const templateOverrides: Record<string, { titleCase: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  "minimalist": {
    titleCase: "Minimalist Digital Business Card Templates (Clean & Professional)",
    description: "Discover clean, minimalist digital business card templates focusing on typography and whitespace.",
    faqHeader: "Minimalist Templates FAQ",
    q1: "Why choose a minimalist digital business card?",
    a1: "Minimalism removes distractions, ensuring your contact details and primary call-to-action are the absolute focal point, resulting in higher conversion rates.",
    q2: "Can I add a logo to a minimalist template?",
    a2: "Yes. While the design is stripped back, you can still easily upload your personal or company logo to maintain brand consistency.",
    content: (
      <>
        <div className="prose prose-lg dark:prose-invert max-w-none mt-12 mb-8">
          <p>In the world of professional networking, less is often more. A minimalist digital business card template communicates confidence and clarity. By stripping away unnecessary graphic elements and focusing heavily on typography, whitespace, and a single accent color, you ensure that the recipient's attention is drawn exactly where you want it: to your name, your title, and your primary call-to-action.</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">The Power of Simplicity</h2>
          <p>Our minimalist templates are specifically engineered for high performance and fast loading times. They are perfect for consultants, executives, and freelancers who want their work and reputation to speak for themselves. The clean lines and uncluttered interfaces of these designs ensure that your digital presence feels as premium and refined as a high-end physical card, but with all the dynamic tracking benefits of a digital platform.</p>
        </div>
      </>
    )
  },
  "creative": {
    titleCase: "Creative Digital Business Card Templates for Artists & Designers",
    description: "Explore bold, creative digital business card templates designed for visual professionals.",
    faqHeader: "Creative Templates FAQ",
    q1: "What makes a digital card 'creative'?",
    a1: "Creative templates use bold color palettes, unconventional layouts, and expressive typography to reflect the artistic nature of the professional.",
    q2: "Can I link my full portfolio?",
    a2: "Absolutely. Our creative templates are designed to serve as a hub, allowing you to link directly to your Behance, Dribbble, or personal website.",
    content: (
      <>
        <div className="prose prose-lg dark:prose-invert max-w-none mt-12 mb-8">
          <p>For artists, designers, and creative directors, a standard corporate card simply won't suffice. Your digital business card is an extension of your portfolio—it needs to reflect your unique aesthetic vision. Our creative digital business card templates are built to break the mold, utilizing vibrant color palettes, dynamic shapes, and unconventional grid structures to make an immediate visual impact.</p>
          <h2 className="text-3xl font-semibold mt-12 mb-6">Showcase Your Vision</h2>
          <p>A creative template doesn't just list your contact information; it sets the tone for your brand. Whether you prefer a dark-mode neon aesthetic or a vibrant, pop-art inspired layout, these templates allow you to express your personality. By integrating your social feeds or linking directly to your latest projects, you turn your digital card into an interactive exhibit of your best work, capturing leads while simultaneously impressing them with your design sensibility.</p>
        </div>
      </>
    )
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const override = templateOverrides[rawCategory];

  if (override) {
    return {
      title: override.titleCase,
      description: override.description,
      alternates: {
        canonical: `/templates/${resolvedParams.category}`,
      }
    };
  }

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
  const override = templateOverrides[rawCategory];

  const category = rawCategory.replace(/-/g, ' ');
  const defaultTitleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  const titleCase = override ? override.titleCase : defaultTitleCase;

  // Filter templates (in a real app, this would be a DB query)
  // We match against "Minimal", "Corporate", "Creative" etc.
  const categoryTemplates = mockTemplates.filter(t =>
    t.category.toLowerCase() === defaultTitleCase.toLowerCase() ||
    defaultTitleCase.toLowerCase().includes(t.category.toLowerCase()) ||
    t.category.toLowerCase().includes(rawCategory.toLowerCase())
  );
  const templatesToDisplay = categoryTemplates.length > 0 ? categoryTemplates : mockTemplates.slice(0, 3); // Fallback

  const q1 = override ? override.q1 : `What are ${defaultTitleCase} business card templates?`;
  const a1 = override ? override.a1 : `${defaultTitleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`;
  const q2 = override ? override.q2 : `Can I customize the ${defaultTitleCase} digital business card templates?`;
  const a2 = override ? override.a2 : `Yes, all ${defaultTitleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`;
  const faqHeader = override ? override.faqHeader : "Frequently Asked Questions";

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
        <h1 className="text-4xl font-bold mb-4">{titleCase}</h1>
        <p className="text-xl text-muted-foreground">
          {override ? override.description : `Start with a professionally designed ${category} template and customize it for your brand.`}
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

      {override && override.content}

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