# GSC Technical Fix Plan - alfo.online/BrandCard

## 1. Current Coverage Issues (Based on Indexing Audit Checklist)
- **Status:** Reviewing programmatic routes and authority guides.
- **Potential Issues:**
    - **Discovered - currently not indexed:** Programmatic profession pages (/professions/*) and template categories (/templates/*).
    - **Crawled - currently not indexed:** High-frequency use-case pages (/business-card/*).
    - **404 Errors:** Old /v1/* or /card/* routes that might still be linked externally.

## 2. Immediate Fixes & Optimization
- **Sitemap Submission:** segmented sitemaps (core, use-cases, templates, professions-*) have been refreshed and submitted via `scripts/submit-sitemaps.mjs`.
- **Internal Linking:** Added inbound links to the new Tier 1 article from "About" and "Features" sections to reduce orphan pages.
- **Redirects:** Verified Next.js 301 redirects in `next.config.ts` for legacy patterns.
- **Canonicalization:** Ensured all new pages use `generateCanonicalUrl` from `@/lib/seo/urls` to strictly enforce the production domain and no trailing slashes.

## 3. Monitoring Plan
- **Weekly Crawl Analysis:** Run `npm run build` to trigger `validate-seo.mjs` and check for metadata completeness.
- **GSC Inspection:** Use the URL Inspection tool for new /blog/digital-business-card-guide to ensure Article schema is correctly parsed.
- **IndexNow Integration:** Monitor IndexNow logs to confirm instant ping of all 9+ new URLs.
