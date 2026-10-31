import { MetadataRoute } from 'next';
import { generateCanonicalUrl } from '@/lib/seo/urls';
import professionsData from '@/data/professions.json';

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapData: MetadataRoute.Sitemap = [];
  const now = new Date();

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
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  });

  VALID_USE_CASES.forEach(useCase => {
    sitemapData.push({
      url: generateCanonicalUrl(`/business-card/${useCase}`),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  TEMPLATE_CATEGORIES.forEach(category => {
    sitemapData.push({
      url: generateCanonicalUrl(`/templates/${category}`),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  const professions = professionsData as string[];
  professions.forEach(profession => {
    const slug = profession.toLowerCase().replace(/[\s_]+/g, '-');
    sitemapData.push({
      url: generateCanonicalUrl(`/professions/${slug}-digital-business-card`),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });

  return sitemapData;
}
