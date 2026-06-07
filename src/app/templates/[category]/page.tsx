import { Metadata } from 'next';
import Link from 'next/link';
import { mockTemplates } from '@/lib/templates/mock-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${titleCase} Business Card Templates Free | alfo.online`,
    description: `Browse our collection of free ${category} business card templates. Customize and download instantly.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const category = resolvedParams.category.replace(/-/g, ' ');
  const titleCase = category.replace(/\b\w/g, (c) => c.toUpperCase());

  // Filter templates (in a real app, this would be a DB query)
  const categoryTemplates = mockTemplates.filter(t => t.category.toLowerCase() === titleCase.toLowerCase());
  const templatesToDisplay = categoryTemplates.length > 0 ? categoryTemplates : mockTemplates.slice(0, 3); // Fallback

  return (
    <div className="container mx-auto px-4 py-16">
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