# Content Pruning Decision Framework

Applied to pages older than 6 months.

## Decision Matrix Inputs
- Impressions (GSC)
- Clicks (GSC)
- Engagement Time (GA4)
- Age
- Inbound Internal Links

## Scoring & Action

| Score / Pattern | Action | Implementation |
| :--- | :--- | :--- |
| **High Impr / Low Clicks** | **Optimize** | Update metadata, test new title formats. Add FAQ. |
| **Med Impr / Zero Clicks** | **Consolidate** | Tool is too niche. 301 Redirect to the cluster Hub page or a broader tool. |
| **Zero Impr / Zero Clicks** | **Prune** | Deindex (`noindex` tag) and remove from sitemap. Wait 2 weeks, then delete file. |
| **High Bounce / Low Engage** | **Fix UX** | Tool is broken or layout is confusing. Check client-side errors. |
