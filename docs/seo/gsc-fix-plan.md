# Google Search Console (GSC) Technical Fix Plan - BrandCard

## 1. Issue: 404 Errors for Legacy URLs
**Observation:** Crawl errors detected for `/v1/*` and old `/card/*` paths.
**Fix:**
- Verified 301 redirects are active in `next.config.ts`.
- Ensure all internal links are updated to current paths (e.g., `/use-cases/`).
- Monitor GSC for decreasing 404 reports over the next 14 days.

## 2. Issue: "Discovered - currently not indexed"
**Observation:** Programmatic pages (professions/use-cases) are discovered but not yet indexed.
**Fix:**
- Increase internal linking from high-authority pages (Home, About, Blog).
- Ensure sitemap segments (`sitemap/use-cases.xml`, `sitemap/professions-en.xml`, etc.) are correctly listed in `robots.txt`.
- Use the IndexNow API and GSC URL Inspection tool for priority pages.
- Verify content uniqueness via AI snapshots and profession-specific FAQs.

## 3. Issue: "Crawled - currently not indexed"
**Observation:** Some programmatic template pages are crawled but not indexed.
**Fix:**
- Audit for thin content. Ensure each template page has at least 3 featured templates and unique FAQ schema.
- Improve Page Speed (Core Web Vitals). Ensure LCP is under 2.5s.
- Add more inbound internal links from relevant blog articles.

## 4. Issue: Missing Breadcrumb Schema
**Observation:** GSC reports missing breadcrumb schema on some deep-nested routes.
**Fix:**
- Implement dynamic BreadcrumbList JSON-LD for all programmatic and blog routes.
- Validate via Schema Markup Validator.

## 5. Issue: Trailing Slash Inconsistency
**Observation:** Both `/path` and `/path/` are being discovered.
**Fix:**
- Standardized `trailingSlash: false` in `next.config.ts`.
- Ensure `generateCanonicalUrl` utility strictly removes trailing slashes.
- Update sitemaps to reflect non-trailing slash versions.

---
**Last Updated:** 2024-05-20
**Status:** In Progress
