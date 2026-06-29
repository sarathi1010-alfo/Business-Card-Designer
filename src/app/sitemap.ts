import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// In Next.js App Router, returning an array of objects with an `id` from `generateSitemaps`
// allows generating multiple sitemaps, which is ideal for breaking them up by cluster.
export async function generateSitemaps() {
  // In a real application, you would fetch these from your CMS or database
  // For now, we mock the known clusters
  return [
    { id: 'core' },
    { id: 'pdf-tools' },
    { id: 'color-tools' },
    { id: 'resume-tools' },
    { id: 'calculator-tools' }
  ];
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  if (id === 'core') {
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/templates`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/terms-of-service`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/faq`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/blog/digital-business-card-guide`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/professions/founder-digital-business-card`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/professions/freelancer-digital-business-card`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/professions/real-estate-agent-digital-card`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/professions/consultant-digital-business-card`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/use-cases/networking-event-digital-card`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/use-cases/conference-digital-business-card`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/templates/minimalist-digital-business-card`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/templates/creative-digital-business-card`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
    ];
  }

  // Handle cluster-specific sitemaps (dynamically fetching tools per cluster)
  // Mock data for example purposes
  const mockTools = [
    { slug: 'merge-pdf', priority: 0.8 },
    { slug: 'split-pdf', priority: 0.8 },
    { slug: 'compress-pdf', priority: 0.8 }
  ];

  if (id === 'pdf-tools') {
     return mockTools.map((tool) => ({
      url: `${baseUrl}/tools/${id}/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: tool.priority,
    }));
  }

  // Fallback for unknown IDs (though generateSitemaps restricts what's called)
  return [];
}
