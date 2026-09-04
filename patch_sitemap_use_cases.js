const fs = require('fs');
let sitemapContent = fs.readFileSync('src/app/sitemap.ts', 'utf8');
sitemapContent = sitemapContent.replace(
  '"startup-founder-profile",',
  '"startup-founder-profile",\n  "trade-show-digital-card",\n  "medical-conference-digital-business-card",'
);
fs.writeFileSync('src/app/sitemap.ts', sitemapContent);

let businessCardPageContent = fs.readFileSync('src/app/business-card/[use-case]/page.tsx', 'utf8');
businessCardPageContent = businessCardPageContent.replace(
  '"startup-founder-profile",',
  '"startup-founder-profile",\n  "trade-show-digital-card",\n  "medical-conference-digital-business-card",'
);
fs.writeFileSync('src/app/business-card/[use-case]/page.tsx', businessCardPageContent);
