# Google Search Console (GSC) Technical Fix Plan

## Issue
3 legacy template pages are showing as "Crawled - currently not indexed" in GSC.

## Affected URLs
- `/templates/modern-minimal`
- `/templates/corporate-blue`
- `/templates/creative-dark`

## Resolution Plan
1. **Internal Linking**: Add internal links from the new Tier 1 article (`/blog/design-psychology-digital-cards`) to these 3 legacy template pages to increase their perceived importance and crawl priority. (Completed)
2. **Re-crawling**: Request re-crawling via the GSC URL Inspection tool for these specific paths.
3. **Robots.txt Check**: Ensure they are not blocked by `robots.txt`. (Verified: they are not blocked).

## Status
Fix implemented in the codebase via internal links in the new blog post. Pending GSC re-crawl request.
