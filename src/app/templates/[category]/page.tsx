import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';


const templateOverrides: Record<string, { titleCase: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  'tech-startup-digital-business-card': {
    titleCase: 'Tech Startup',
    description: 'Browse our collection of modern, free tech startup digital business card templates. Customize your founding team profiles instantly.',
    faqHeader: 'Tech Startup Template FAQs',
    q1: 'What makes a good tech startup digital business card template?',
    a1: 'A good tech startup template is clean, modern, and highlights key information like the founder\'s role, company vision, and direct links to the product, demo, or pitch deck.',
    q2: 'Can I customize the Tech Startup digital business card templates for my whole team?',
    a2: 'Yes, our templates are designed for scalability. You can easily duplicate a Tech Startup template and customize the details for each member of your founding team while maintaining brand consistency.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Designed for Founders and Innovators</h2>
        <p>In the startup world, first impressions can dictate funding, partnerships, and early customer acquisition. A tech startup digital business card template is specifically crafted to convey innovation, agility, and professionalism. These templates often feature minimalist aesthetics, bold typography, and strategic placement of calls-to-action—perfect for founders who need to share a pitch deck or demo link at a moment's notice.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Highlighting Your Value Proposition</h3>
        <p>Your digital card is more than contact info; it is a mini landing page for your startup. The tech startup templates provide dedicated sections to briefly state your company's value proposition or mission statement right at the top. This ensures that investors or potential hires immediately understand what your company does before they even scroll down to your contact details.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Seamless Team Branding</h3>
        <p>As your startup grows, maintaining brand consistency across the team becomes crucial. These templates serve as a master blueprint. You can set your brand colors, logo, and preferred font styles once, and deploy standardized, professional digital cards for your co-founders, early engineers, and sales reps in minutes.</p>
      </>
    )
  },
  'elegant-digital-business-card': {
    titleCase: 'Elegant',
    description: 'Browse our collection of free elegant digital business card templates. Sophisticated designs for premium professionals.',
    faqHeader: 'Elegant Template FAQs',
    q1: 'Who should use an elegant digital business card template?',
    a1: 'Elegant templates are ideal for real estate agents, luxury brand consultants, high-end event planners, and executives who want to convey sophistication and exclusivity.',
    q2: 'Are elegant templates customizable with my own branding?',
    a2: 'Absolutely. While they come with sophisticated preset color palettes and refined typography, you can fully customize them with your own brand colors, logos, and high-resolution background images.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Sophistication in the Digital Age</h2>
        <p>For professionals operating in high-end markets—such as luxury real estate, wealth management, or bespoke consulting—presentation is everything. An elegant digital business card template is designed to exude prestige and exclusivity. These templates utilize ample whitespace, refined serif typography, and subdued, premium color palettes to create a sense of trust and authority before a single word is spoken.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Focus on Quality and Detail</h3>
        <p>The hallmark of an elegant design is its attention to detail. Our elegant templates prioritize readability and visual balance. They allow for the integration of high-resolution professional headshots or subtle, textured background elements that mimic the feel of premium cardstock, translating the tactile luxury of a traditional business card into a seamless digital experience.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Building Trust with High-Net-Worth Clients</h3>
        <p>When networking with affluent individuals or enterprise clients, every interaction must reinforce your status as a top-tier professional. An elegant digital card demonstrates that you invest in your brand and understand the nuances of premium presentation. It provides a flawless, ad-free experience that keeps the focus entirely on you and the bespoke services you offer.</p>
      </>
    )
  }
};


interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const override = templateOverrides[resolvedParams.category];

  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = override ? override.titleCase : category.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: override ? `${titleCase} Business Card Templates Free` : `${titleCase} Business Card Templates Free`,
    description: override ? override.description : `Browse our collection of free ${category} business card templates. Customize and download instantly.`,
    alternates: {
      canonical: `/templates/${resolvedParams.category}`,
    }
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const override = templateOverrides[resolvedParams.category];

  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = override ? override.titleCase : category.replace(/\b\w/g, (c) => c.toUpperCase());

  const desc = override ? override.description : `Start with a professionally designed ${category} template and customize it for your brand.`;
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
        <h1 className="text-4xl font-bold mb-4">{titleCase} Business Card Templates</h1>
        <p className="text-xl text-muted-foreground">
          {desc}
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

      {override && override.content && (
        <div className="prose prose-lg dark:prose-invert max-w-none mt-16 mb-8">
          {override.content}
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none mt-16">
        <h2 className="text-3xl font-semibold mt-12 mb-6">{faqHeader}</h2>
        <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
        <p>{a1}</p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
        <p>{a2}</p>
      </div>
    </div>
  );
}