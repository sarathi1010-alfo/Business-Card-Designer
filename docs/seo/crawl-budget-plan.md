# Crawl Budget Optimization Plan

## Principles
- Flat folder structure reduces crawl depth waste
- `robots.txt` should block all non-public paths
- Internal links from high-authority hub pages increase crawl frequency for spoke pages
- Fast server response time = more URLs fetched per Googlebot session
- Sitemap index acts as a priority map for crawlers
- Avoid URL parameter variants that create near-duplicate pages

## Top 10 Optimizations (Next.js/Vercel)

1. **Flat Routes**: Keep tools at `/tools/[cluster]/[tool]`. Max depth 3.
2. **Aggressive `robots.txt`**: Block `/admin`, `/api`, and non-indexable utility paths.
3. **Sitemap Indexing**: Implement `sitemap.xml` that splits into cluster-specific XMLs to ensure no sitemap exceeds 50k URLs.
4. **Hub-and-Spoke Linking**: Auto-inject links from `/tools/[cluster]` to all child tools to funnel PageRank and crawl prioritization.
5. **Edge Caching**: Utilize Vercel Edge caching and Next.js SSG (`force-static`) wherever possible to achieve <100ms TTFB.
6. **ISR vs SSR**: Only use `force-dynamic` (SSR) when absolutely necessary (e.g., reading user file streams). Default to SSG or ISR.
7. **Prune Query Params**: In Next.js, ensure tracking parameters (like `?utm_source`) do not affect the canonical URL rendering.
8. **Remove Unused CSS/JS**: Keep bundle sizes small. Tailwind purges automatically, but audit large client components.
9. **Eliminate Redirect Chains**: Ensure internal links point directly to the final URL without trailing slash 308 redirects.
10. **GSC API Pinging**: Proactively ping Google using the Indexing API when new tools are deployed.

## Monitoring Plan
- **GSC Coverage Report**: Monitor weekly for "Crawled - currently not indexed" spikes.
- **Vercel Analytics**: Watch TTFB (Time to First Byte) on SSR routes.
- **Server Logs (Vercel Log Drain)**: Monitor for Googlebot 500 errors or timeout aborts.
