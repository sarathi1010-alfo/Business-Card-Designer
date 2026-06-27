import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/tools/'],
      disallow: ['/admin/', '/private/', '/api/'], // Blocks admin/non-public routes
    },
    sitemap: 'https://brandcard.alfo.online/sitemap.xml',
  };
}
