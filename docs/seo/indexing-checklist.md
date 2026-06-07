# Indexing Audit Checklist

| Check | How to Test | Pass Criteria | What to Fix If Failing |
| :--- | :--- | :--- | :--- |
| **Noindex Tags** | Inspect source code for `<meta name="robots" content="noindex">` or `X-Robots-Tag` headers. | Ensure NO `noindex` tags exist on production pages. | Check middleware (`X-Robots-Tag`), SEO component overrides, and environment checks. |
| **JS Rendering** | Use Google Search Console (GSC) URL Inspection tool "Test Live URL" -> View Tested Page -> Screenshot. | Ensure the main content and tool UI render properly without requiring user interaction. | Convert purely client-side rendering to SSR/SSG if Googlebot receives a blank page. |
| **Canonical Tags** | Inspect `<link rel="canonical" href="...">` in source. | Must exist and point exactly to the correct URL (no trailing slash mismatch, correct protocol). | Update the metadata pipeline or `metadataBase` in Next.js layout. |
| **Server Status** | Use a crawler (Screaming Frog) or curl to check HTTP status codes. | Should return 200 OK. No 5xx or unintended 30x or 404s. | Check server logs for exceptions; fix DB/API timeouts causing 500 errors. |
| **Orphan Pages** | Use a site crawler (Screaming Frog) to analyze internal link architecture. | Page must be reachable via at least 1 internal link (ideally from a Hub page or sibling). | Update the `links.ts` automated cross-linking component to include the page. |
| **Duplicate Content** | Check canonicals across similar parameters (e.g. `?color=red` vs `?color=blue`). | Ensure parameter variations either self-canonicalize if unique, or canonicalize to a base URL if near-identical. | Use Next.js `generateMetadata` to explicitly define canonicals, or block parameters in GSC. |
