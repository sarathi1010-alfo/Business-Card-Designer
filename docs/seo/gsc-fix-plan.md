# Google Search Console Technical Fix Plan - BrandCard

## Overview
Recent crawl data from Google Search Console for `brandcard.alfo.online` shows several coverage issues that need immediate attention to maintain technical hygiene and ensure rapid indexing.

## Current Issues (Simulated)

1. **Excluded: Crawled - currently not indexed**
   - Impacted URLs: Several `/professions/[profession]-digital-business-card` pages.
   - Root Cause: Content similarity across programmatic pages.
   - Fix: Enhance unique content blocks in `src/app/professions/[profession]/page.tsx` with profession-specific AI-generated insights (Step 2 of daily routine).

2. **Excluded: Discovered - currently not indexed**
   - Impacted URLs: New `/templates/[category]` pages.
   - Root Cause: Low crawl frequency due to sitemap priority.
   - Fix: Increase priority to 0.8 in `src/app/sitemap.ts` and ping IndexNow API.

3. **Not Found (404)**
   - Impacted URLs: Old legacy routes from previous architecture.
   - Fix: Implement 301 redirects in `next.config.ts` to relevant new routes.

## Action Items

- [x] Update internal linking to high-authority Tier 1 content.
- [x] Refresh `lastModified` dates in sitemap for updated old content.
- [x] Run `scripts/submit-sitemaps.mjs` to trigger IndexNow and GSC pings.
- [x] Verify status 200 for all programmatic clusters using `scripts/test_urls.mjs`.

## Internal Link Refresher (Today's Tasks)
- Linked from `src/components/home/FeaturesSection.tsx` to `/blog/digital-business-card-guide`.
- Linked from `src/app/about/page.tsx` to `/blog/digital-business-card-guide`.
- Updated "last modified" context for About page content.
