import Link from 'next/link';
import { Metadata } from 'next';

import React from 'react';

export const templateOverrides: Record<string, { titleCase: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  'corporate-digital-business-card': {
    titleCase: "Corporate Digital Business Card Templates",
    description: "Browse our collection of professional corporate digital business card templates. Designed for executives, finance professionals, and lawyers.",
    faqHeader: "Corporate Template FAQs",
    q1: "What makes a digital business card template 'corporate'?",
    a1: "Corporate templates prioritize clean lines, traditional color palettes (like navy, grey, and white), and highly legible typography. They avoid distracting animations or overly flashy graphics, focusing entirely on conveying trust, authority, and professionalism.",
    q2: "Can I use my company's specific brand colors with a corporate template?",
    a2: "Yes. All BrandCard templates, including our corporate options, are fully customizable. You can easily input your firm's exact HEX color codes and upload your high-resolution company logo.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Designing for Trust and Authority</h2>
        <p>
          In sectors like finance, law, consulting, and enterprise sales, your business card is a reflection of your firm's reliability. A corporate digital business card template must instantly signal competence. While creative industries can experiment with bold layouts and vibrant colors, the corporate aesthetic demands structure and clarity.
        </p>
        <p>
          Our corporate templates are meticulously designed to guide the viewer's eye directly to your most critical information: your name, your title, and your secure contact methods. We utilize classic serif and highly legible sans-serif fonts to ensure readability across all devices. The layouts are optimized for rapid scanning, recognizing that executives and decision-makers often have only seconds to save your information.
        </p>
        <p>
          Beyond aesthetics, a corporate digital profile must support the specific functional needs of enterprise networking. This includes prominent placement for VCard download buttons, clear links to secure client portals, and integrated scheduling tools for booking consultations. By choosing a structured, professional template, you ensure that the technology enhances, rather than distracts from, your professional credibility.
        </p>
        <p>
          Explore our options below and customize them with your firm's specific branding guidelines to create a powerful, unified digital presence for your entire team.
        </p>
      </>
    )
  },
  'modern-digital-business-card': {
    titleCase: "Modern Digital Business Card Templates",
    description: "Discover sleek, modern digital business card templates. Perfect for tech founders, modern agencies, and forward-thinking professionals.",
    faqHeader: "Modern Template FAQs",
    q1: "How do modern templates differ from traditional ones?",
    a1: "Modern templates often feature minimalist layouts, ample negative space, sans-serif typography, and sometimes subtle animations or dark mode themes. They prioritize a clean UI/UX over traditional paper-card emulation.",
    q2: "Are modern templates good for lead generation?",
    a2: "Absolutely. Modern templates are typically designed with conversion in mind, featuring prominent, single-action buttons (like 'Book a Demo' or 'Save Contact') that drive immediate engagement.",
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">The Aesthetic of Innovation</h2>
        <p>
          For startups, tech companies, and modern agencies, a digital business card should feel like an extension of a high-quality digital product. A modern digital business card template discards the constraints of the traditional 3.5x2 inch paper format and fully embraces the capabilities of the mobile screen.
        </p>
        <p>
          These templates are characterized by their sleek user interfaces. They often utilize dark mode color schemes, edge-to-edge imagery, and fluid layout structures. By adopting a modern design, you communicate to prospects and partners that you are forward-thinking and technologically fluent. It shows that you value user experience, a critical signal when pitching innovative services or products.
        </p>
        <p>
          Functionally, modern templates excel at highlighting rich media. They provide elegant containers for embedding product explainer videos, linking to GitHub repositories, or showcasing dynamic portfolio galleries. The focus is on creating a frictionless path from initial scan to meaningful engagement, utilizing large, tappable touch targets and intuitive navigation patterns.
        </p>
        <p>
          Select a modern template below to build a digital presence that matches the ambition and innovation of your brand.
        </p>
      </>
    )
  }
};

import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.category;
  const override = templateOverrides[slug];

  const rawCategory = slug.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  if (override) {
    return {
      title: override.titleCase,
      description: override.description,
      alternates: {
        canonical: `/templates/${slug}`,
      }
    };
  }

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
        <h1 className="text-4xl font-bold mb-4">{titleCase} Business Card Templates</h1>
        <p className="text-xl text-muted-foreground">
          Start with a professionally designed {category} template and customize it for your brand.
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