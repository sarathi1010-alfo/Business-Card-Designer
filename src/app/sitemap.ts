import { MetadataRoute } from 'next';
import { generateCanonicalUrl } from '@/lib/seo/urls';

// Valid use cases mapping
const VALID_USE_CASES = [
  "brand-card-for-developers",
  "digital-business-card",
  "portfolio-card",
  "personal-brand-card",
  "linkedin-brand-card",
  "resume-card",
  "startup-founder-profile",
];

// Mock templates mapping to represent dynamic DB entries
const TEMPLATE_CATEGORIES = [
  "minimalist",
  "modern",
  "creative",
  "corporate",
];

export async function generateSitemaps() {
  return [
    { id: 'core' },
    { id: 'use-cases' },
    { id: 'templates' },
  ];
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const sitemapData: MetadataRoute.Sitemap = [];

  if (id === 'core') {
    const staticRoutes = [
      { path: '/', priority: 1.0, changeFrequency: 'weekly' },
      { path: '/templates', priority: 0.9, changeFrequency: 'daily' },
      { path: '/about', priority: 0.5, changeFrequency: 'monthly' },
      { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
      { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
      { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
    ] as const;

    staticRoutes.forEach(route => {
      sitemapData.push({
        url: generateCanonicalUrl(route.path),
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    });
  }

  if (id === 'use-cases') {
    VALID_USE_CASES.forEach(useCase => {
      sitemapData.push({
        url: generateCanonicalUrl(`/business-card/${useCase}`),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  }

  if (id === 'templates') {
    TEMPLATE_CATEGORIES.forEach(category => {
      sitemapData.push({
        url: generateCanonicalUrl(`/templates/${category}`),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  }

  return sitemapData;
}
