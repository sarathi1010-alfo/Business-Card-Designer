# Google Search Console (GSC) Technical Fix Plan - BrandCard

Date: May 20, 2024
Author: Senior SEO & Content Automation Engineer

## 1. Coverage Issues Identified

- **Discovered - currently not indexed:** Some programmatic profession and use-case URLs are discovered but not yet indexed due to high volume.
- **Crawled - currently not indexed:** Programmatic URLs with thin content in non-English languages are being crawled but indexed at a lower priority.
- **404 Errors:** Legacy `/v1/*` and `/card/*` paths are returning 404s after the site restructuring.

## 2. Mitigation Strategy

### A. Redirect Management (301 Redirects)
To resolve 404 errors from legacy URLs, we have implemented permanent 301 redirects in `next.config.ts`.
- `/v1/*` -> `/`
- `/card/*` -> `/business-card/digital-business-card`

### B. Indexing Acceleration
To address the 'Discovered' and 'Crawled' but not indexed issues:
- **IndexNow Integration:** Every publishing cycle triggers the IndexNow API via `scripts/submit-sitemaps.mjs` to notify search engines of new and updated content.
- **Segmented Sitemaps:** Sitemaps are segmented by topical cluster (`core`, `articles`, `products`, `professions`) to provide better crawling cues to Googlebot.
- **Internal Linking:** Every new high-authority article (Tier 1) receives at least 2 inbound links from high-traffic pages (Home, About) to boost discovery and authority flow.

### C. AEO & Quality Improvements
- **AI Snapshots:** Every article and programmatic page now includes a 30-75 word direct answer block (AEO Snapshot) to improve visibility in AI Overviews and Google's featured snippets.
- **Schema Validation:** Strict JSON-LD (Article and FAQPage) schema is injected into all relevant pages to provide clear structured data to crawlers.

## 3. Implementation Checklist

- [x] Implement 301 redirects in `next.config.ts`.
- [x] Configure segmented sitemaps in `src/app/sitemap.ts`.
- [x] Add AI Snapshots to all new authority content.
- [x] Automate sitemap pings and IndexNow submissions.
- [x] Perform retroactive internal linking for all Tier 1 articles.

## 4. Monitoring

- Weekly review of GSC 'Indexing' reports.
- Monthly audit of broken links and 404 spikes.
- Continuous monitoring of IndexNow submission logs.
