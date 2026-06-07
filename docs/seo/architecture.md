# SEO Architecture & Project Structure Blueprint

## Core Requirements

- **Hybrid rendering**: SSR for dynamic tools, SSG for informational templates, ISR for semi-dynamic content
- **URL structure**: Flat routing under `/tools/[cluster]/[tool-name]` (no deep nesting)
- **Sitemap**: A sitemap index file pointing to segmented per-cluster sitemaps (max 50,000 URLs, 50MB per file)
- **Canonical Tags**: Dynamic `rel="canonical"` tags on every page
- **Schema**: Automated JSON-LD schema generation (`SoftwareApplication` for tools, `Article` for guides)
- **robots.txt**: Blocks admin/non-public routes and grants full access to `/tools`
- **Internal Linking**: Automated linking from hub pages to all spoke pages

## Directory Structure

```
src/
├── app/
│   ├── (marketing)/         # Marketing pages (Home, About, etc.)
│   ├── tools/               # Tool Ecosystem Routes
│   │   └── [cluster]/       # e.g., pdf-tools, color-tools
│   │       ├── page.tsx     # Cluster Hub Page
│   │       └── [tool-slug]/ # The actual tool, e.g. /tools/pdf-tools/merge-pdf
│   │           └── page.tsx # Tool Render Shell
│   ├── sitemap.ts           # Dynamic Sitemap Index Generator
│   └── robots.ts            # Dynamic Robots Generator
├── components/
│   └── tools/               # Reusable Tool Archetype Components
│       ├── Converter.tsx
│       ├── Generator.tsx
│       ├── Calculator.tsx
│       ├── Checker.tsx
│       └── Transformer.tsx
├── lib/
│   └── seo/                 # SEO Core Utilities
│       ├── rendering.ts     # Edge caching / rendering strategies
│       ├── links.ts         # Breadcrumbs / Cross-linking utilities
│       └── metadata.ts      # Schema, Canonical, Meta tag generation
└── scripts/                 # Post-build/Deploy Scripts
    └── submit-sitemaps.js   # GSC API sitemap pusher
```
