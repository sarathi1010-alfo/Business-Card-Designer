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

const templateOverrides: Record<string, { titleCase: string; description: string; faqHeader: string; q1: string; a1: string; q2: string; a2: string; content: React.ReactNode }> = {
  "modern": {
    titleCase: "Modern Digital Business Card Templates",
    description: "Browse our collection of sleek, modern digital business card templates. Stand out with contemporary designs and clean layouts.",
    faqHeader: "Modern Template FAQs",
    q1: "What defines a modern digital business card template?",
    a1: "A modern template typically features a clean UI, ample whitespace, sans-serif typography, and subtle interactive elements that prioritize user experience and fast scanning of contact details.",
    q2: "Can I customize the colors on the modern templates?",
    a2: "Yes, all modern templates offer full color customization. You can easily adapt the primary and background colors to perfectly align with your personal or corporate brand guidelines.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Why Choose a Modern Template?</h2>
        <p>
          In a fast-paced professional world, a modern aesthetic communicates that you are forward-thinking and adaptable. Modern digital business card templates move away from cluttered, traditional layouts and instead focus on what matters most: your key contact information, your professional summary, and your portfolio links.
        </p>
        <p>
          Whether you are a startup founder pitching to venture capitalists or a freelancer connecting with new clients, a modern template ensures your first digital impression is sleek, functional, and highly memorable. The minimalist approach naturally directs the viewer&apos;s eye to your primary Call to Action (CTA), such as booking a meeting or viewing your resume.
        </p>
      </>
    )
  },
  "corporate": {
    titleCase: "Corporate Digital Business Card Templates",
    description: "Discover professional corporate digital business card templates. Ensure brand consistency across your entire organization with our enterprise designs.",
    faqHeader: "Corporate Template FAQs",
    q1: "Are these templates suitable for large organizations?",
    a1: "Absolutely. Our corporate templates are designed with enterprise teams in mind, allowing for standardized branding, logo placement, and consistent typography across hundreds of employee cards.",
    q2: "Can I add compliance or legal disclaimers to corporate cards?",
    a2: "Yes, the corporate templates provide structured footer areas where you can easily append necessary legal, regulatory, or compliance disclaimers required by your industry.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Elevate Your Corporate Identity</h2>
        <p>
          For established enterprises and corporate professionals, trust and consistency are paramount. Our corporate digital business card templates are engineered to project authority, reliability, and strict adherence to your company&apos;s brand guidelines. They are the digital equivalent of a high-end, embossed cardstock business card.
        </p>
        <p>
          These templates prioritize clear organizational hierarchy, prominent logo placement, and straightforward navigation. They are ideal for executives, sales teams, and consultants who need to provide a unified, highly professional front when networking at industry conferences or client meetings.
        </p>
      </>
    )
  }
};

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const baseTitleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  const override = templateOverrides[resolvedParams.category];

  const titleCase = override ? override.titleCase : baseTitleCase;
  const description = override ? override.description : `Start with a professionally designed ${category} template and customize it for your brand.`;
  const faqHeader = override ? override.faqHeader : "Frequently Asked Questions";

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
        <h1 className="text-4xl font-bold mb-4">{override ? titleCase : `${titleCase} Business Card Templates`}</h1>
        <p className="text-xl text-muted-foreground">
          {description}
        </p>
      </div>

      {override && (
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          {override.content}
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