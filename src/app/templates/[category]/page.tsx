import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}


const templateOverrides: Record<string, { titleCase: string; description: string; faqHeader: string; q1: string; a1: string; q2: string; a2: string; content: string }> = {
  'minimalist': {
    titleCase: 'Minimalist Digital Business Card Templates (Clean & Professional)',
    description: 'Browse our collection of free minimalist digital business card templates. Customize and download instantly to make a clean, professional impression.',
    faqHeader: 'Minimalist Templates FAQ',
    q1: 'What are Minimalist business card templates?',
    a1: 'Minimalist business card templates are clean, clutter-free layouts optimized for professionals looking for a sophisticated aesthetic to showcase their contact details without distractions.',
    q2: 'Can I customize the Minimalist digital business card templates?',
    a2: 'Yes, all Minimalist templates on BrandCard are fully customizable. You can subtly change colors, elegant fonts, structure, and add your own logo and essential links.',
    content: `
      <div className="prose prose-lg dark:prose-invert max-w-none mt-16">
        <h2 className="text-3xl font-semibold mb-6">Why Choose a Minimalist Digital Business Card?</h2>
        <p>
          In a world cluttered with information, minimalism stands out. A minimalist digital business card communicates confidence, sophistication, and focus. By stripping away unnecessary design elements, bold graphics, and overwhelming colors, you guide your contact's eye exactly where it needs to go: your name, your profession, and how to reach you.
        </p>
        <p className="mt-4">
          Minimalist templates are particularly effective for professionals in industries such as law, finance, consulting, and architecture, where trust and clarity are paramount. The clean lines and ample white space (or negative space in dark modes) ensure that your digital card loads instantly and looks impeccable on any smartphone screen, regardless of its size or resolution.
        </p>
        <p className="mt-4">
          When customizing a minimalist template, the key is restraint. Stick to a monochromatic color palette or use a single, muted accent color. Choose highly legible sans-serif fonts like Inter or Helvetica. Every element on the card must serve a clear purpose. If a link or a piece of text does not directly contribute to your networking goals, remove it.
        </p>
        <p className="mt-4">
          Despite their simple appearance, our minimalist digital cards still pack powerful features under the hood. You get the same dynamic QR code generation, the same lead capture capabilities, and the same robust analytics dashboard as our more complex designs. You are simply choosing to present this technology through a lens of elegant simplicity. Stand out by choosing to whisper when everyone else is shouting.
        </p>
      </div>
    `
  },
  'creative': {
    titleCase: 'Creative Digital Business Card Templates for Artists & Designers',
    description: 'Browse our collection of free creative digital business card templates. Stand out with bold colors, unique layouts, and interactive elements.',
    faqHeader: 'Creative Templates FAQ',
    q1: 'What are Creative business card templates?',
    a1: 'Creative business card templates are vibrant, unconventional layouts optimized for professionals looking for an artistic aesthetic to showcase their portfolio, personality, and contact details.',
    q2: 'Can I customize the Creative digital business card templates?',
    a2: 'Yes, all Creative templates on BrandCard are fully customizable. You can experiment with bold colors, expressive typography, unique background elements, and embed rich media links.',
    content: `
      <div className="prose prose-lg dark:prose-invert max-w-none mt-16">
        <h2 className="text-3xl font-semibold mb-6">Express Yourself with a Creative Digital Business Card</h2>
        <p>
          For artists, designers, marketers, and innovators, a standard corporate business card simply won't do. Your digital business card is often the first piece of your portfolio a potential client or collaborator will see. A creative digital business card template allows you to make a bold statement, showcasing your unique aesthetic and design sensibilities before they even click a single link.
        </p>
        <p className="mt-4">
          Our creative templates break away from traditional grids. They feature striking color palettes, asymmetrical layouts, expressive typography, and dynamic visual elements like gradients and abstract shapes. These templates are engineered to be memorable, ensuring that your profile stands out in a sea of predictable digital contacts.
        </p>
        <p className="mt-4">
          When customizing a creative template, you have the freedom to push boundaries. Use your brand colors unapologetically. Upload custom background graphics or utilize our glassmorphism effects to create a sense of depth and interactivity. Importantly, these templates are designed to prominently feature links to your visual work—be it a Dribbble portfolio, an Instagram feed, a YouTube channel, or a personal gallery website.
        </p>
        <p className="mt-4">
          While the design may be wild, the underlying technology remains rock solid. Your creative digital card will still generate a scannable QR code instantly, capture leads seamlessly, and track analytics reliably. You get to maintain your artistic integrity without sacrificing the powerful marketing tools that make digital networking so effective. Let your digital card be a canvas that reflects your creative vision.
        </p>
      </div>
    `
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  const override = templateOverrides[rawCategory];
  return {
    title: override?.titleCase || `${titleCase} Business Card Templates Free`,
    description: override?.description || `Browse our collection of free ${category} business card templates. Customize and download instantly.`,
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

  const overrideKey = rawCategory;
  const override = templateOverrides[overrideKey];

  const pageTitle = override?.titleCase || `${titleCase} Business Card Templates`;
  const pageDescription = override?.description || `Start with a professionally designed ${category} template and customize it for your brand.`;

  const q1 = override?.q1 || `What are ${titleCase} business card templates?`;
  const a1 = override?.a1 || `${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a ${category} aesthetic to showcase their contact details and portfolio.`;
  const q2 = override?.q2 || `Can I customize the ${titleCase} digital business card templates?`;
  const a2 = override?.a2 || `Yes, all ${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.`;
  const faqHeader = override?.faqHeader || 'Frequently Asked Questions';

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

      {override && <div dangerouslySetInnerHTML={{ __html: override.content }} />}
      {/* We must always render FAQ text if FAQ schema is present to avoid schema mismatch penalties */}
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
