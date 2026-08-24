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

const templateOverrides: Record<string, {
  title: string,
  desc: string,
  q1: string,
  a1: string,
  q2: string,
  a2: string,
}> = {
  'law-firm': {
    title: "Law Firm Business Card Templates Free",
    desc: "Browse our collection of free Law Firm business card templates. Project authority and trust with designs tailored for legal professionals.",
    q1: "What are Law Firm business card templates?",
    a1: "Law Firm business card templates are highly professional, conservative layouts designed to convey trust, stability, and authority. They typically feature clean typography, traditional color palettes (like navy, charcoal, or deep green), and clear, unambiguous contact information.",
    q2: "Can I customize the Law Firm digital business card templates?",
    a2: "Yes, all Law Firm templates on BrandCard can be tailored to match your specific practice. You can upload your firm's logo, adjust the color scheme to match your brand, and add specific links to consultation booking pages or practice area overviews."
  },
  'photography': {
    title: "Photography Business Card Templates Free",
    desc: "Browse our collection of free Photography business card templates. Showcase your visual style instantly with image-forward designs.",
    q1: "What are Photography business card templates?",
    a1: "Photography business card templates are highly visual layouts designed to act as a mini-portfolio. They prioritize large image areas, creative typography, and minimal text to ensure your photography remains the focal point.",
    q2: "Can I customize the Photography digital business card templates?",
    a2: "Absolutely. Our Photography templates are designed for maximum visual impact. You can upload your best shots as background images, customize the gallery links, and seamlessly integrate your Instagram or external portfolio URLs."
  }
};

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const categoryKey = rawCategory;
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  // Filter templates (in a real app, this would be a DB query)
  // We match against "Minimal", "Corporate", "Creative" etc.
  const categoryTemplates = mockTemplates.filter(t =>
    t.category.toLowerCase() === titleCase.toLowerCase() ||
    titleCase.toLowerCase().includes(t.category.toLowerCase())
  );
  const templatesToDisplay = categoryTemplates.length > 0 ? categoryTemplates : mockTemplates.slice(0, 3); // Fallback

  const override = templateOverrides[categoryKey];
  const pageTitle = override ? override.title : `${titleCase} Business Card Templates Free`;
  const pageDesc = override ? override.desc : `Browse our collection of free ${category} business card templates. Customize and download instantly.`;
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
        <h1 className="text-4xl font-bold mb-4">{pageTitle.replace(' Free', '')}</h1>
        <p className="text-xl text-muted-foreground">
          {pageDesc}
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

      <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
        <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
        <p>{a1}</p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
        <p>{a2}</p>
      </div>
    </div>
  );
}