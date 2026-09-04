const fs = require('fs');
let sitemapContent = fs.readFileSync('src/app/sitemap.ts', 'utf8');

const routeReplacement = `
    const staticRoutes = [
      { path: '/', priority: 1.0, changeFrequency: 'weekly' },
      { path: '/templates', priority: 0.9, changeFrequency: 'daily' },
      { path: '/about', priority: 0.5, changeFrequency: 'monthly' },
      { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
      { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
      { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
      { path: '/blog/industry-networking-guide', priority: 0.8, changeFrequency: 'monthly' },
    ] as const;
`;

sitemapContent = sitemapContent.replace(/const staticRoutes = \[\s*\{ path: '\/', priority: 1\.0, changeFrequency: 'weekly' \},\s*\{ path: '\/templates', priority: 0\.9, changeFrequency: 'daily' \},\s*\{ path: '\/about', priority: 0\.5, changeFrequency: 'monthly' \},\s*\{ path: '\/contact', priority: 0\.5, changeFrequency: 'monthly' \},\s*\{ path: '\/privacy-policy', priority: 0\.3, changeFrequency: 'yearly' \},\s*\{ path: '\/terms-of-service', priority: 0\.3, changeFrequency: 'yearly' \},\s*\] as const;/s, routeReplacement.trim());

fs.writeFileSync('src/app/sitemap.ts', sitemapContent);
