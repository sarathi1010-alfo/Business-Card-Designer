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


const templateOverrides: Record<string, { title: string, description: string, q1: string, a1: string, q2: string, a2: string }> = {
  "medical": {
    title: "Medical Digital Business Card Templates",
    description: "Start with a clean, accessible template designed for healthcare professionals. Highlight your medical specialty and affiliations.",
    q1: "What makes a good medical business card template?",
    a1: "A good medical template features a clean layout, clear typography for credentials, and a professional aesthetic that conveys trust and hygiene.",
    q2: "Can I link to my clinic's patient portal?",
    a2: "Yes, you can easily add custom links to patient portals, appointment scheduling systems, or published medical research."
  },
  "legal": {
    title: "Legal Digital Business Card Templates",
    description: "Choose a distinguished, professional template suitable for attorneys, paralegals, and law firms. Project authority and trust.",
    q1: "What makes a good legal business card template?",
    a1: "A legal template should utilize traditional, authoritative typography, conservative color palettes, and ample white space to project professionalism and discretion.",
    q2: "Is my contact information secure?",
    a2: "Absolutely. Our platform ensures that the contact information you choose to share is presented securely, and you can update it instantly at any time."
  }
};

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

  const override = templateOverrides[rawCategory];
  const pageTitle = override ? override.title : `${titleCase} Business Card Templates`;
  const pageDescription = override ? override.description : `Start with a professionally designed ${category} template and customize it for your brand.`;

  const jsonLd = override ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": override.q1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override.a1
        }
      },
      {
        "@type": "Question",
        "name": override.q2,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override.a2
        }
      }
    ]
  } : {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What are ${titleCase} business card templates?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`
        }
      },
      {
        "@type": "Question",
        "name": `Can I customize the ${titleCase} digital business card templates?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`
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
    </div>
  );
}