import React from 'react';
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

const templateOverrides: Record<string, { title: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  "bold-digital-business-card": {
    title: "Bold Business Card Templates Free",
    description: "Make an unforgettable statement with our collection of free bold business card templates. Stand out from the crowd.",
    faqHeader: "Bold Template FAQs",
    q1: "Who should use a bold digital business card template?",
    a1: "Bold templates are ideal for creative professionals, marketing agencies, and anyone looking to disrupt the status quo and ensure they are immediately remembered.",
    q2: "Can I tone down a bold template if needed?",
    a2: "Absolutely. Our editor allows you to start with a bold layout and easily swap to a more muted color palette while retaining the strong structural design.",
    content: (
      <div className="prose prose-lg dark:prose-invert max-w-none mt-16">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Why Choose a Bold Design?</h2>
        <p>
          In a sea of standard white business cards, a bold design acts as a pattern interrupt. It signals confidence, creativity, and a willingness to step outside the box. When you share a bold digital card, you aren't just sharing contact info; you're making a statement about your brand identity.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Key Elements of Bold Templates</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>High Contrast Colors:</strong> Deep blacks paired with vibrant neon accents or stark white text on rich, saturated backgrounds.</li>
          <li><strong>Typography as Art:</strong> Oversized, impactful fonts that demand attention before the user even reads the text.</li>
          <li><strong>Minimalist Content, Maximalist Impact:</strong> Stripping away the clutter to focus on one or two key links or calls to action.</li>
        </ul>
      </div>
    )
  },
  "elegant-digital-business-card": {
    title: "Elegant Business Card Templates Free",
    description: "Exude luxury and sophistication with our free elegant digital business card templates. Perfect for high-end services.",
    faqHeader: "Elegant Template FAQs",
    q1: "What industries benefit most from elegant digital cards?",
    a1: "Real estate, fine arts, high-end hospitality, luxury retail, and bespoke consulting services all benefit from the sophisticated presentation of an elegant template.",
    q2: "Do elegant templates support interactive features?",
    a2: "Yes. Despite their classic appearance, elegant templates fully support modern features like vCard downloads, CRM lead capture, and embedded scheduling links.",
    content: (
      <div className="prose prose-lg dark:prose-invert max-w-none mt-16">
        <h2 className="text-3xl font-semibold mt-12 mb-6">The Power of Sophistication</h2>
        <p>
          An elegant digital business card communicates trust, heritage, and premium quality. It suggests that you pay attention to the finer details, a quality highly valued by discerning clientele.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Designing for Elegance</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Refined Typography:</strong> Utilizing classic serif fonts or clean, ultra-light sans-serifs with generous letter spacing.</li>
          <li><strong>Subtle Color Palettes:</strong> Rich earth tones, deep jewel colors, or classic monochromatic schemes accented with metallic gold or silver hues.</li>
          <li><strong>Structured White Space:</strong> Allowing the design to breathe, ensuring the contact information is presented clearly without feeling crowded.</li>
        </ul>
      </div>
    )
  }
};

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

  const pageTitle = override ? override.title : `${titleCase} Business Card Templates`;
  const pageDescription = override ? override.description : `Start with a professionally designed ${category} template and customize it for your brand.`;
  const faqHeader = override ? override.faqHeader : "Frequently Asked Questions";

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
        <h1 className="text-4xl font-bold mb-4">{pageTitle}</h1>
        <p className="text-xl text-muted-foreground">
          {pageDescription}
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

      {override?.content && override.content}

      {!override?.content && (
        <div className="prose prose-lg dark:prose-invert max-w-none mt-16">
          <h2 className="text-3xl font-semibold mt-12 mb-6">{faqHeader}</h2>
          <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
          <p>{a1}</p>
          <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
          <p>{a2}</p>
        </div>
      )}
    </div>
  );
}