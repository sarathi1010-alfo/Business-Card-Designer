# Google Search Console (GSC) Technical Fix Plan

**Date:** May 20, 2024
**Property:** brandcard.alfo.online

## 1. Identified Issues (Simulated)

Based on a simulated crawl and indexing report, the following issues have been identified:

- **Excluded by 'noindex' tag:** 12 pages in the `/dashboard` directory.
- **Not found (404):** 3 legacy URLs from previous iterations (e.g., `/old-builder`).
- **Discovered - currently not indexed:** 8 newly generated profession pages.
- **Crawled - currently not indexed:** 5 programmatic template pages.

## 2. Strategic Fixes

### A. Resolve 404 Errors
- **Action:** Implement 301 redirects in `next.config.ts` from legacy URLs to their modern equivalents.
- **Target:** `/old-builder` -> `/`.

### B. Accelerate Indexing for New Content
- **Action:** Trigger the IndexNow API and manually ping the sitemap.
- **Verification:** Monitor GSC 'Indexing' report for `/professions/*` and `/use-cases/*` over the next 48-72 hours.
- **Priority:** High for the new Tier 1 authority article.

### C. Validate Robot Directives
- **Action:** Ensure `src/middleware.ts` is correctly applying `X-Robots-Tag: noindex` ONLY to `*.vercel.app` domains and not the production domain.
- **Action:** Confirm that the `/dashboard` directory is intentionally excluded in `public/robots.txt`.

### D. Address 'Crawled - currently not indexed'
- **Action:** Improve internal linking to these pages (Step completed in today's publishing loop).
- **Action:** Ensure these pages have unique, high-quality content via the programmatic template.

## 3. Monitoring & Reporting

- Weekly check of the GSC 'Page Indexing' report.
- Monthly audit of 'Core Web Vitals' to ensure premium SaaS performance (LCP < 2.5s).
- Verify that the 'Sitemap' status in GSC is "Success".

---
*Created by: Senior SEO & Content Automation Engineer*
