import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const PLANNED_POSTS = [
  "ultimate-guide-2026",
  "digital-vs-physical-cards",
  "networking-with-digital-cards"
];

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!PLANNED_POSTS.includes(slug)) {
    return { title: 'Post Not Found' };
  }

  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${title} | BrandCard Blog`,
    description: `Learn more about ${title.toLowerCase()} in our comprehensive guide for 2026.`,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!PLANNED_POSTS.includes(slug)) {
    notFound();
  }

  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
          {title}
        </h1>
        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8 text-left">
          <p className="font-medium text-lg m-0">
            <strong>Note:</strong> This article is part of our upcoming Week 1 content engine release. Detailed content is being finalized by our editorial team.
          </p>
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          We are currently preparing this comprehensive guide on <strong>{title.toLowerCase()}</strong> to provide you with the most up-to-date and actionable insights for 2026.
        </p>
        <p>
          In the meantime, feel free to explore our <a href="/blog/digital-business-card-guide" className="text-primary hover:underline">Complete Guide to Digital Business Cards That Convert</a>.
        </p>
      </div>
    </article>
  );
}
