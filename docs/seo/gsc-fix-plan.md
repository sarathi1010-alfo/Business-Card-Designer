# Google Search Console Technical Fix Plan - June 2024

## Current Status Overview
*   **Property:** brandcard.alfo.online
*   **Total Pages:** 1,245
*   **Indexed:** 812
*   **Excluded:** 433

## Issue 1: Not Found (404)
*   **Status:** Action Required
*   **Observed URLs:** Legacy `/v1/*` and `/card/*` routes.
*   **Fix:**
    *   Permanent 301 redirects implemented in `next.config.ts` mapping `/v1/*` to `/` and `/card/*` to `/business-card/digital-business-card`.
    *   Verified all internal links in the new Tier 1 article and programmatic pages are relative and correct.

## Issue 2: Discovered - Currently Not Indexed
*   **Status:** Monitoring
*   **Observed URLs:** New programmatic `/professions/*` and `/use-cases/*` pages.
*   **Fix:**
    *   Ensured all new URLs are included in segmented sitemaps (`/sitemap/use-cases.xml`, `/sitemap/templates.xml`).
    *   Implemented high-AEO Answer Blocks (AI Snapshots) on all new pages to increase "Information Gain" score.
    *   Added 2 inbound internal links to the new Tier 1 pillar article from high-authority pages (`/about`, `/blog`).
    *   Triggered IndexNow API for all new 1,245 programmatic variations.

## Issue 3: Crawled - Currently Not Indexed
*   **Status:** Optimization
*   **Observed URLs:** Some `/templates/*` category pages.
*   **Fix:**
    *   Enhanced template pages with unique FAQ schema to differentiate them from generic categories.
    *   Added descriptive "titleCase" metadata and unique descriptions to all category pages.

## Next Steps
1.  Submit updated `sitemap.xml` via GSC.
2.  Monitor "Coverage" report over the next 14 days.
3.  Execute "Content Decay" check on pages not indexed after 30 days.
