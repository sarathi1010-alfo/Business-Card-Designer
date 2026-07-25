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
  "trade-show-digital-card",
  "sales-pitch-digital-card",
];

// Mock templates mapping to represent dynamic DB entries
const TEMPLATE_CATEGORIES = [
  "minimalist",
  "modern",
  "creative",
  "corporate",
  "elegant",
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
  // In Next.js App Router, dynamic params/id can be Promises or directly evaluated.
  // Wait, no. The sitemap function signature in Next.js 15+ is:
  // export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap>
  // However, Next.js dynamic params are promises now. Let's use `await` if it's passed as a promise,
  // or just handle it if it's not a string directly.
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
        url: generateCanonicalUrl(`/business-card/${useCase}`),
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
      const now = new Date();
      professions.forEach(profession => {
        const slug = profession.toLowerCase().replace(/[\s_]+/g, '-');
        const urlSlug = lang === 'en'
          ? `${slug}-digital-business-card`
          : `${slug}-digital-business-card-${lang}`;

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
