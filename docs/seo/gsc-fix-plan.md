# Google Search Console (GSC) Technical Fix Plan - BrandCard

## Overview
This plan addresses current GSC coverage issues and crawl errors identified for the BrandCard property (alfo.online). The goal is to move "Discovered" and "Crawled" but not indexed pages into the "Valid" index status.

## Identified Issues

### 1. Discovered - currently not indexed
- **Issue:** Google knows about these URLs but hasn't crawled them yet. High volume of programmatic profession pages.
- **Affected URLs:** `/professions/*-digital-business-card`
- **Fix:**
    - Increase internal linking from high-authority pages (Blog, About).
    - Use IndexNow API via `scripts/submit-sitemaps.mjs` to force recrawl.
    - Improve content uniqueness for each profession page (Current: Template-based).

### 2. Crawled - currently not indexed
- **Issue:** Google has crawled the page but decided not to index it. Often due to thin content or perceived low quality.
- **Affected URLs:** Some `/use-cases/*` and `/templates/*` pages.
- **Fix:**
    - Add unique FAQ schema to every programmatic page (Completed).
    - Increase word count for use-case pages by adding "Networking Best Practices" sections.
    - Ensure every template page has at least 3 distinct card previews.

### 3. Not Found (404)
- **Issue:** Legacy URLs from previous folder structure migrations.
- **Affected URLs:** `/v1/*`, old `/card/*` links.
- **Fix:**
    - Implement 301 redirects in `next.config.ts` for all legacy patterns.
    - Update all internal links to use the new `/business-card/` and `/professions/` structures.

## Implementation Timeline
- **Immediate:** Trigger IndexNow and GSC sitemap ping for newly updated routes.
- **Weekly:** Monitor GSC Coverage report and re-submit URLs that remain in "Excluded".
- **Bi-Weekly:** Content expansion for top-performing "Crawled - not indexed" pages.

## Verification
- Status: **In Progress**
- Next GSC Audit: 2026-07-01
