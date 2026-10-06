import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

const templateOverrides: Record<string, {
  title: string;
  description: string;
  faqHeader: string;
  q1: string;
  a1: string;
  q2: string;
  a2: string;
  content: React.ReactNode;
}> = {
  'minimalist-digital-business-card': {
    title: 'Minimalist Digital Business Card Templates',
    description: 'Clean & Professional minimalist digital business card templates. Stand out with less clutter and more impact.',
    faqHeader: 'Minimalist Templates FAQ',
    q1: 'Why choose a minimalist digital business card?',
    a1: 'A minimalist design ensures that your most important information stands out without distractions. It conveys a sense of elegance, professionalism, and modern aesthetics.',
    q2: 'Can I add my logo to a minimalist template?',
    a2: 'Absolutely. All our minimalist templates are fully customizable, allowing you to add your logo, adjust the typography, and select brand-aligned colors while maintaining a clean look.',
    content: (
      <div className="prose prose-lg dark:prose-invert max-w-none mt-12 mb-8">
        <h2 className="text-3xl font-semibold mb-6">Embrace the Power of Less</h2>
        <p>
          In a world cluttered with information, a minimalist digital business card speaks volumes. Our minimalist templates are crafted for professionals who understand that elegance lies in simplicity. By stripping away unnecessary design elements, these templates ensure your contact details, portfolio links, and core message are the stars of the show.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Key Benefits of Minimalist Designs</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Faster Load Times:</strong> Fewer heavy graphics mean your digital card loads instantly.</li>
          <li><strong>Better Readability:</strong> Generous whitespace and clean typography make your information easy to read.</li>
          <li><strong>Timeless Professionalism:</strong> Minimalist designs never go out of style and suit any industry.</li>
        </ul>
        <p>
          Whether you are an architect, a software developer, or a consultant, a minimalist digital business card template will elevate your personal brand and leave a lasting impression on your connections.
        </p>
      </div>
    )
  },
  'creative-digital-business-card': {
    title: 'Creative Digital Business Card Templates',
    description: 'Stand out from the crowd with our creative digital business card templates, perfect for artists, designers, and visionaries.',
    faqHeader: 'Creative Templates FAQ',
    q1: 'Who should use a creative digital business card template?',
    a1: 'Creative templates are ideal for graphic designers, artists, photographers, marketers, and any professional wanting to showcase their unique personality and portfolio prominently.',
    q2: 'Can I include a portfolio gallery in my creative digital card?',
    a2: 'Yes, our platform allows you to link out to your full portfolio, and our creative templates are designed with bold visuals to encourage clicks to your work.',
    content: (
      <div className="prose prose-lg dark:prose-invert max-w-none mt-12 mb-8">
        <h2 className="text-3xl font-semibold mb-6">Unleash Your Creativity</h2>
        <p>
          Your digital business card is an extension of your creative portfolio. Our creative digital business card templates are designed to break the mold and help you stand out in competitive industries. With bold typography, vibrant color palettes, and unconventional layouts, these templates are perfect for professionals who want to make a statement.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Features of Creative Templates</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Bold Visuals:</strong> High-contrast colors and striking layouts that capture attention.</li>
          <li><strong>Expressive Typography:</strong> Unique font pairings that reflect your artistic style.</li>
          <li><strong>Portfolio Centric:</strong> Designed to seamlessly integrate links to your latest projects and creative endeavors.</li>
        </ul>
        <p>
          Don&apos;t settle for a boring corporate card. Let your digital business card reflect your true creative potential and turn every networking opportunity into a showcase of your talent.
        </p>
      </div>
    )
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.category;
  const override = templateOverrides[slug];

  const rawCategory = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: override ? `${override.title} - Free` : `${titleCase} Business Card Templates Free`,
    description: override ? override.description : `Browse our collection of free ${category} business card templates. Customize and download instantly.`,
    alternates: {
      canonical: `/templates/${resolvedParams.category}`,
    }
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.category;
  const override = templateOverrides[slug];

  const rawCategory = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

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
        <h1 className="text-4xl font-bold mb-4">{override ? override.title : `${titleCase} Business Card Templates`}</h1>
        <p className="text-xl text-muted-foreground">
          {override ? override.description : `Start with a professionally designed ${category} template and customize it for your brand.`}
        </p>
      </div>

      {override && override.content}

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

      {override && (
        <div className="prose prose-lg dark:prose-invert max-w-none mt-16">
          <h2 className="text-3xl font-semibold mb-6">{override.faqHeader}</h2>
          <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
          <p>{a1}</p>
          <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
          <p>{a2}</p>
        </div>
      )}
    </div>
  );
}