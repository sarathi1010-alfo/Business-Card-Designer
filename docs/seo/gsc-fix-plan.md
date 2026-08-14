# GSC Technical Fix Plan

## Issue
3 legacy test template pages are showing "Crawled - currently not indexed" in Google Search Console:
- `/templates/minimalist-digital-business-card`
- `/templates/creative-digital-business-card`
- `/templates/modern-minimal-digital-card`

## Fix Plan Implemented
Added explicit inbound internal links to all 3 legacy test template URLs from the new Tier 1 authority pillar article (`/blog/industry-specific-networking-guide`).

## Next Steps
- Request re-crawling via the GSC URL Inspection tool for those specific paths.
- Ensure they are not blocked by robots.txt (verified they are not).
