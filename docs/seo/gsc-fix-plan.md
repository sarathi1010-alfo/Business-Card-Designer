# Google Search Console (GSC) Technical Fix Plan

## 1. Coverage Issues: "Discovered - currently not indexed"
- **Issue:** Many programmatic profession and use-case pages are discovered but not indexed.
- **Root Cause:** Large volume of similar programmatic content can lead to crawl budget issues or being flagged as "thin content".
- **Fix:**
    - Improve unique content on programmatic pages (dynamic FAQ maps, custom profession-specific insights).
    - Ensure all pages are in the segmented sitemaps (`/sitemap.ts`).
    - Increase internal linking from high-authority pages (Home, About, Blog).
    - Trigger IndexNow API for new URLs.

## 2. Coverage Issues: "Crawled - currently not indexed"
- **Issue:** Google has crawled the page but decided not to index it.
- **Root Cause:** Quality threshold not met or canonicalization issues.
- **Fix:**
    - Audit canonical tags (`src/lib/seo/urls.ts`).
    - Add AI Snapshots (AEO blocks) to improve "answer quality".
    - Implement Article or FAQ schema to increase rich snippet eligibility.

## 3. Technical Hygiene: 404 Errors
- **Issue:** Legacy `/v1/*` and `/card/*` URLs are returning 404s.
- **Fix:** Verified permanent 301 redirects in `next.config.ts`.

## 4. Maintenance Schedule
- **Weekly:** Review GSC coverage report.
- **Weekly:** Run `npm run build` to trigger `validate-seo.mjs`.
- **Monthly:** Audit internal link density for Tier 1 articles.
