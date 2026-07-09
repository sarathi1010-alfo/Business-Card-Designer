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
  "networking-event-digital-card",
  "conference-digital-business-card",
];

// Mock templates mapping to represent dynamic DB entries
const TEMPLATE_CATEGORIES = [
  "minimalist",
  "modern",
  "creative",
  "corporate",
  "minimalist-digital-business-card",
  "creative-digital-business-card",
];

const LANGUAGES = ["en", "es", "fr", "de", "it", "pt", "nl", "ru", "zh", "ja", "ko", "ar", "hi", "tr", "pl"];

export async function generateSitemaps() {
  const sitemaps = [
    { id: 'core' },
    { id: 'use-cases' },
    { id: 'templates' },
  ];

  LANGUAGES.forEach(lang => {
    sitemaps.push({ id: `professions-${lang}` });
  });

  return sitemaps;
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const resolvedId = await Promise.resolve(id);

  const sitemapData: MetadataRoute.Sitemap = [];

  if (resolvedId === 'core') {
    const staticRoutes = [
      { path: '/', priority: 1.0, changeFrequency: 'weekly' },
      { path: '/templates', priority: 0.9, changeFrequency: 'daily' },
      { path: '/about', priority: 0.5, changeFrequency: 'monthly' },
      { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
      { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
      { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
      { path: '/blog/digital-business-card-guide', priority: 0.8, changeFrequency: 'monthly' },
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

  if (resolvedId === 'use-cases') {
    VALID_USE_CASES.forEach(useCase => {
      sitemapData.push({
        url: generateCanonicalUrl(`/use-cases/${useCase}`),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  }

  if (resolvedId === 'templates') {
    TEMPLATE_CATEGORIES.forEach(category => {
      sitemapData.push({
        url: generateCanonicalUrl(`/templates/${category}`),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  }

  if (typeof resolvedId === 'string' && resolvedId.startsWith('professions-')) {
    const lang = resolvedId.split('-')[1];
    if (LANGUAGES.includes(lang)) {
      const professions = professionsData as string[];
      // Add explicitly requested profession slugs if not in professions.json
      const extraProfessions = ["founder", "freelancer", "real-estate-agent", "consultant"];

      const now = new Date();
      const allProfessions = Array.from(new Set([...professions, ...extraProfessions]));

      allProfessions.forEach(profession => {
        const slug = profession.toLowerCase().replace(/[\s_]+/g, '-');

        // Handle specific suffix preference from user request
        let suffix = 'digital-business-card';
        if (slug === 'real-estate-agent') {
          suffix = 'digital-card';
        }

        const urlSlug = lang === 'en'
          ? `${slug}-${suffix}`
          : `${slug}-${suffix}-${lang}`;

        sitemapData.push({
          url: generateCanonicalUrl(`/professions/${urlSlug}`),
          lastModified: now,
          changeFrequency: 'weekly',
          priority: 0.6,
        });
      });
    }
  }

  return sitemapData;
}
