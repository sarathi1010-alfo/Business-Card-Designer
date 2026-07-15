# GSC Technical Fix Plan - BrandCard

## Issue Summary
Google Search Console indicates several coverage issues for the BrandCard property on `alfo.online`.

### 1. 404 (Not Found)
- **Problem**: Legacy URLs from `/v1/` and `/card/` patterns are returning 404s.
- **Fix**: Permanent 301 redirects are already implemented in `next.config.ts`. Verify all legacy patterns are covered.
- **Status**: [In Progress]

### 2. Discovered - Currently Not Indexed
- **Problem**: New programmatic profession pages are discovered but not yet indexed due to crawl budget constraints or lack of internal authority.
- **Fix**:
  - Segmented sitemaps are implemented via `src/app/sitemap.ts`.
  - Retroactive internal linking added from About and Features sections to high-priority articles.
  - IndexNow pings triggered via `scripts/submit-sitemaps.mjs`.
- **Status**: [Active]

### 3. Crawled - Currently Not Indexed
- **Problem**: Some use-case pages are crawled but not indexed, likely due to content similarity.
- **Fix**:
  - Enhancing programmatic templates with profession-specific FAQ schema and AEO snapshots to increase uniqueness.
  - Monitoring GSC for indexing updates post-schema injection.
- **Status**: [Monitoring]

## Next Steps
1. Verify sitemap accessibility at `/sitemap/core.xml`, `/sitemap/use-cases.xml`, etc.
2. Monitor IndexNow 202 responses in deployment logs.
3. Perform weekly GSC audit to validate fixes.
