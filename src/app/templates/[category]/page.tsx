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

const templateOverrides: Record<string, { title: string, content: string, faqQ1: string, faqA1: string, faqQ2: string, faqA2: string }> = {
  "healthcare-digital-business-card": {
    title: "Healthcare Templates",
    content: "Healthcare professionals require digital business card templates that communicate trust, compliance, and clarity. Use these professionally designed healthcare layouts to present your credentials efficiently.",
    faqQ1: "What are Healthcare digital business card templates?",
    faqA1: "Healthcare digital business card templates are specially designed layouts featuring clean aesthetics, often using calming blues and greens, ideal for doctors, dentists, and clinical managers to display their credentials.",
    faqQ2: "Can I customize the Healthcare digital business card templates?",
    faqA2: "Yes, all Healthcare templates on BrandCard are fully customizable. You can add direct links to your patient booking portal and update contact info as needed."
  },
  "legal-digital-business-card": {
    title: "Legal Templates",
    content: "Legal professionals need to convey gravitas and precision. These digital business card templates provide a sophisticated, subdued aesthetic perfect for attorneys, paralegals, and legal consultants.",
    faqQ1: "What are Legal digital business card templates?",
    faqA1: "Legal digital business card templates are professional, highly polished layouts designed to help legal professionals display their practice areas, secure contact information, and firm details clearly.",
    faqQ2: "Can I customize the Legal digital business card templates?",
    faqA2: "Yes, all Legal templates are fully customizable. You can adjust the colors to match your law firm's branding and ensure your contact details remain secure and accessible."
  },
  "tech-digital-business-card": {
    title: "Tech Templates",
    content: "For those in the tech industry, a digital business card must look modern and cutting-edge. These tech templates incorporate dark mode options, sleek typography, and space for all your portfolio links.",
    faqQ1: "What are Tech digital business card templates?",
    faqA1: "Tech digital business card templates are modern layouts designed specifically for engineers, developers, and tech entrepreneurs to showcase their GitHub, personal sites, and digital portfolios.",
    faqQ2: "Can I customize the Tech digital business card templates?",
    faqA2: "Yes. Tech templates can be customized with your preferred color schemes, interactive UI elements, and specific social proof links like open source contributions."
  },
  "finance-digital-business-card": {
    title: "Finance Templates",
    content: "In the finance industry, projecting stability and success is critical. These finance digital business card templates offer a clean, corporate look ideal for investment bankers, advisors, and accountants.",
    faqQ1: "What are Finance digital business card templates?",
    faqA1: "Finance digital business card templates are corporate, professional designs aimed at helping financial advisors and accountants display their value proposition and contact information effectively.",
    faqQ2: "Can I customize the Finance digital business card templates?",
    faqA2: "Yes, all Finance templates can be customized. Add your professional headshot, company logo, and client testimonial links to boost your credibility."
  }
};

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.category;
  const rawCategory = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());
  const override = templateOverrides[slug];

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
        "name": override ? override.faqQ1 : `What are ${titleCase} business card templates?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override ? override.faqA1 : `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`
        }
      },
      {
        "@type": "Question",
        "name": override ? override.faqQ2 : `Can I customize the ${titleCase} digital business card templates?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": override ? override.faqA2 : `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`
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
          {override ? override.content : `Start with a professionally designed ${category} template and customize it for your brand.`}
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