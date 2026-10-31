import { MetadataRoute } from 'next';
import { generateCanonicalUrl } from '@/lib/seo/urls';
import professionsData from '@/data/professions.json';

const VALID_USE_CASES = [
  "brand-card-for-developers",
  "digital-business-card",
  "portfolio-card",
  "personal-brand-card",
  "linkedin-brand-card",
  "resume-card",
  "startup-founder-profile",
];

const TEMPLATE_CATEGORIES = [
  "minimalist",
  "modern",
  "creative",
  "corporate",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/templates', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog/what-is-a-digital-business-card', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/digital-vs-physical-business-cards', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/how-to-design-a-digital-business-card-that-converts', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/ultimate-guide-digital-business-cards-2026', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog/how-do-digital-business-cards-work', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/why-do-i-need-a-digital-business-card', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/what-is-a-qr-code-business-card', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  const coreSitemap: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: generateCanonicalUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const useCasesSitemap: MetadataRoute.Sitemap = VALID_USE_CASES.map((useCase) => ({
    url: generateCanonicalUrl(`/business-card/${useCase}`),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const templatesSitemap: MetadataRoute.Sitemap = TEMPLATE_CATEGORIES.map((category) => ({
    url: generateCanonicalUrl(`/templates/${category}`),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const professions = (professionsData as string[]).slice(0, 50);
  const professionsSitemap: MetadataRoute.Sitemap = professions.map((profession) => {
    const slug = profession.toLowerCase().replace(/[\s_]+/g, '-');
    return {
      url: generateCanonicalUrl(`/professions/${slug}-digital-business-card`),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    };
  });

  return [...coreSitemap, ...useCasesSitemap, ...templatesSitemap, ...professionsSitemap];
}
