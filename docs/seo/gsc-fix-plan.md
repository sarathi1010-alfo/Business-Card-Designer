# GSC Technical Fix Plan - BrandCard

## Overview
This document outlines the strategy for addressing Google Search Console (GSC) coverage issues, including "Discovered - currently not indexed," "Crawled - currently not indexed," and 404 errors.

## Current Issues & Status
1. **404 Errors**: Some legacy URLs or incorrectly formatted programmatic slugs may be throwing 404s.
   - *Fix*: Implement robust redirects in `next.config.ts` and ensure all programmatic routes are defined in `VALID_USE_CASES` and `VALID_PROFESSIONS`.
2. **Discovered - Currently Not Indexed**: High volume of programmatic pages (professions/templates) are discovered but not yet crawled.
   - *Fix*: Increase internal linking from high-authority pages (Blog/Home) to these clusters. Use segmented sitemaps and trigger IndexNow API regularly.
3. **Crawled - Currently Not Indexed**: Pages have been crawled but Google has decided not to index them, likely due to low unique value.
   - *Fix*: Enhance the content of programmatic pages with unique FAQs, profession-specific tips, and AI Snapshots (AEO).

## Action Plan (June 2025)
- [x] Refine Tier 1 Article with high-value content (1200+ words).
- [x] Link to core tool and templates from all new content.
- [x] Link from Home/Features to the new high-authority blog post.
- [x] Automate sitemap submission via IndexNow API after every build.
- [ ] Implement a "Related Professions" or "Popular Templates" widget on programmatic pages to increase crawl depth.
- [ ] Audit all 404s from GSC and map to nearest valid page.

## Verification
- Run `npm run build` to trigger SEO validation.
- Monitor GSC coverage reports weekly.
