# Google Search Console (GSC) Technical Fix Plan - Revised Feb 24, 2025

## Current Coverage Issues
1. **Discovered - currently not indexed**: Several programmatic profession and use-case pages are pending crawl.
2. **Crawled - currently not indexed**: High-frequency publication routes (/use-cases/*) need more internal authority links and better direct answer blocks.
3. **Soft 404s**: Legacy /v1/* routes were redirected, but some sitemap entries might still point to old patterns. Verified redirects in next.config.ts.

## Fix Strategy
- [x] **Tier 1 Content Infusion**: Published a 1,485-word authority guide on "How to create a digital business card that converts" to act as a pillar for internal linking.
- [x] **Internal Linking Loop**:
    - Added inbound links to the pillar article from /about and /blog.
    - Pilar article links to home (/) and /templates.
    - Updated 'last modified' dates to signal freshness.
- [x] **AEO & Schema Hardening**:
    - Injected Article JSON-LD for the pillar guide.
    - Injected FAQPage JSON-LD for all programmatic /professions, /use-cases, and /templates pages.
    - Added 30-40 word "AI Snapshots" to providing direct, authoritative answers.
- [x] **Sitemap & URL Normalization**:
    - Consolidated /use-cases/ URLs to match requested SEO structure.
    - Segmented sitemaps (core, use-cases, templates, professions) for targeted indexing.
- [x] **Indexing Trigger**: Executed IndexNow pings and Google sitemap submissions.

## Monitoring Plan
- Weekly review of GSC Coverage report.
- Verify "AI Snapshot" appearance in AI overviews for target queries.
- Track CTR for programmatic pages with enhanced FAQ schema.
