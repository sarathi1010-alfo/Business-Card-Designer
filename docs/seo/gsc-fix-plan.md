# Google Search Console (GSC) Technical Fix Plan

## Target Property: alfo.online

### Current Status
* **Issue:** 3 legacy pages showing "Crawled - currently not indexed" (old test templates).
* **Legacy Pages Identified:**
  1. `/features`
  2. `/v1/old-template-1` (Redirected to root)
  3. `/card/test-user-1` (Redirected to `/business-card/digital-business-card`)

### Action Plan
1. **Internal Linking Enhancement:**
   - [x] Retroactively added internal links from new high-authority content (`/blog/digital-business-card-guide` and `/blog/design-psychology-digital-business-cards`) to key legacy/core pages like `/features` to increase perceived importance and pagerank flow.
2. **Redirects & Consolidation:**
   - [x] Implemented permanent 301 redirects in `next.config.ts` for legacy URL patterns (`/v1/*` to root and `/card/*` to `/business-card/digital-business-card`).
3. **URL Inspection & Re-crawling:**
   - [ ] Manually submit the 3 legacy URLs via the GSC URL Inspection tool and request indexing.
4. **Robots.txt & Sitemap Verification:**
   - [x] Verified `robots.txt` does not block these paths.
   - [x] Triggered IndexNow and Google Sitemap pings via `scripts/submit-sitemaps.mjs` for the updated URLs.

### Next Steps
Monitor the "Pages" report in GSC over the next 7-14 days to confirm if the status changes from "Crawled - currently not indexed" to "Indexed".
