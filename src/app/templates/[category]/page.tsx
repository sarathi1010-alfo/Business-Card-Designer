import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';

const templateOverrides: Record<string, { h1: string; intro: string; p1: string; p2: string; p3: string; faqHeader: string; q1: string; a1: string; q2: string; a2: string }> = {
  'minimalist': {
    h1: "Minimalist Digital Business Card Templates (Clean & Professional)",
    intro: "In design, less is often more. Minimalist digital business card templates prioritize clean lines, ample whitespace, and perfect typography to convey a sense of modern professionalism.",
    p1: "A minimalist approach ensures that your core information—your name, title, and contact details—is the primary focus. Without distracting graphics or overly complex layouts, the viewer's eye is naturally drawn to the most important elements, increasing the likelihood of engagement and lead capture.",
    p2: "These templates are perfect for executives, consultants, and professionals in formal industries who want to project an image of sophistication and clarity. A clean UI not only looks better but also loads faster, providing a superior user experience when your card is scanned in person.",
    p3: "When customizing a minimalist template, focus on high-contrast color palettes (like classic black and white or deep navy and cream) and high-quality, readable fonts. BrandCard's minimalist selection ensures your first impression is polished, memorable, and effortlessly chic.",
    faqHeader: "Minimalist Template FAQ",
    q1: "Why choose a minimalist digital business card template?",
    a1: "A minimalist design ensures your contact information and primary Call to Action are easily accessible without visual clutter, conveying a highly professional and modern image.",
    q2: "Can I still add my brand colors to a minimalist template?",
    a2: "Yes. Minimalist doesn't mean boring. You can use your brand's primary color as a subtle accent or for the background while maintaining a clean, uncluttered layout for your text and links."
  },
  'creative': {
    h1: "Creative Digital Business Card Templates for Artists & Designers",
    intro: "For creatives, your digital business card isn't just a way to share contact info; it's the first piece of your portfolio. Creative digital business card templates allow you to showcase your unique aesthetic immediately.",
    p1: "Artists, graphic designers, photographers, and other creative professionals need a digital presence that reflects their talent. These templates feature bold color options, unique typography choices, and layouts designed to highlight visual elements like your logo or a featured portfolio image.",
    p2: "Unlike standard corporate cards, creative templates allow for more personality. You can use dynamic backgrounds, unconventional element placements, and vibrant accent colors to make a lasting, memorable impression that aligns with your creative brand.",
    p3: "The best part of using a creative digital card is the ability to link directly to your work. Whether it's your latest Behance project, your Instagram feed, or a link to your online gallery, your digital card acts as a highly visual gateway to your creative universe.",
    faqHeader: "Creative Template FAQ",
    q1: "How can I make my creative digital card stand out?",
    a1: "Utilize bold, brand-aligned colors, select unique but readable fonts, and ensure your primary CTA links directly to your most impressive visual portfolio or latest project.",
    q2: "Are creative templates suitable for corporate environments?",
    a2: "While designed for creatives, a tastefully customized creative template can also work well for agencies or innovative tech startups looking to project a forward-thinking, vibrant brand identity."
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
  const override = templateOverrides[rawCategory];

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
        <h1 className="text-4xl font-bold mb-4">{override ? override.h1 : `${titleCase} Business Card Templates`}</h1>
        <p className="text-xl text-muted-foreground">
          Start with a professionally designed {category} template and customize it for your brand.
        </p>
      </div>

      {override && (
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p>{override.intro}</p>
          <p>{override.p1}</p>
          <p>{override.p2}</p>
          <p>{override.p3}</p>

          <h2 className="text-3xl font-semibold mt-12 mb-6">{override.faqHeader}</h2>
          <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
          <p>{a1}</p>
          <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
          <p>{a2}</p>
        </div>
      )}

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