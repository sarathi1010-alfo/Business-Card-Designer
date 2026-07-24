# Google Search Console (GSC) Technical Fix Plan

## Issue: "Crawled - currently not indexed"
This issue occurs when Google crawls a page but decides not to index it, often because the perceived authority or importance of the page is too low relative to the rest of the site (or the web).

## Affected Pages
- `/templates/minimalist-digital-business-card`
- `/templates/creative-digital-business-card`
- `/templates/modern-digital-business-card`

## Solution Strategy (Executed)
To boost the perceived importance of these legacy template pages, we have strategically injected highly contextual, outbound internal links pointing directly to them from a brand-new Tier 1 Authority Pillar article (`/blog/industry-specific-networking-guide`).

This creates a semantic relationship and flows PageRank/authority from a comprehensive guide directly to these transactional template pages.

## Next Steps
1. The new sitemap containing the Tier 1 article and all updated modified dates will be pinged to Google.
2. Monitor GSC over the next 1-2 weeks.
3. If they remain unindexed, use the URL Inspection Tool in GSC to manually "Request Indexing" for the 3 specific template URLs.
