# Google Search Console (GSC) Technical Fix Plan - BrandCard

Date: 2024-05-20
Status: Active

## Overview
This plan addresses current Google Search Console coverage issues for `https://brandcard.alfo.online/` to ensure maximum indexing and visibility.

## 1. 404 (Not Found) Errors
**Issue:** Legacy `/v1/*` and `/card/*` URLs, as well as the migration from `/business-card/` to `/use-cases/`.
**Fix:**
- [x] Implemented permanent 301 redirects in `next.config.ts` for `/business-card/:path*` to `/use-cases/:path*`.
- [x] Verified existing redirects for `/v1/` and `/card/`.
- [ ] Monitor GSC "Page with redirect" report to ensure Google is picking up the new canonical URLs.

## 2. Discovered - currently not indexed
**Issue:** New programmatic pages (professions, templates) are being discovered but not yet crawled.
**Fix:**
- [x] Segmented XML sitemaps by topical cluster (core, articles, use-cases, templates) via `src/app/sitemap.ts`.
- [x] Automated sitemap pinging via `scripts/submit-sitemaps.mjs` using IndexNow and GSC APIs.
- [x] Added retroactive internal links from high-authority pages (Home, About, Blog) to new content.

## 3. Crawled - currently not indexed
**Issue:** Programmatic pages with low perceived value or thin content.
**Fix:**
- [x] Enhanced programmatic templates with FAQ Schema and AEO-optimized "AI Snapshot" blocks to improve content quality signals.
- [x] Ensured each programmatic page has a unique H1 and metadata via `constructMetadata()` helper.

## 4. Maintenance Schedule
- **Weekly:** Review GSC Coverage report and address new 404s.
- **Daily:** Ping updated sitemaps after every new content publish.
- **Monthly:** Audit internal link health and refresh "last modified" dates on pillar articles.
