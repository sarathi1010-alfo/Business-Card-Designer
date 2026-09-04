const fs = require('fs');
let content = fs.readFileSync('scripts/submit-sitemaps.mjs', 'utf8');

const urlsReplacement = `const newUrls = [
  \`https://\${DOMAIN}/blog/digital-business-card-guide\`,
  \`https://\${DOMAIN}/professions/founder-digital-business-card\`,
  \`https://\${DOMAIN}/professions/freelancer-digital-business-card\`,
  \`https://\${DOMAIN}/professions/real-estate-agent-digital-card\`,
  \`https://\${DOMAIN}/professions/consultant-digital-business-card\`,
  \`https://\${DOMAIN}/use-cases/networking-event-digital-card\`,
  \`https://\${DOMAIN}/use-cases/conference-digital-business-card\`,
  \`https://\${DOMAIN}/templates/minimalist-digital-business-card\`,
  \`https://\${DOMAIN}/templates/creative-digital-business-card\`,
  \`https://\${DOMAIN}/professions/lawyer-digital-business-card\`,
  \`https://\${DOMAIN}/professions/architect-digital-business-card\`,
  \`https://\${DOMAIN}/professions/dentist-digital-card\`,
  \`https://\${DOMAIN}/professions/accountant-digital-business-card\`,
  \`https://\${DOMAIN}/use-cases/trade-show-digital-card\`,
  \`https://\${DOMAIN}/use-cases/medical-conference-digital-business-card\`,
  \`https://\${DOMAIN}/templates/legal-digital-business-card\`,
  \`https://\${DOMAIN}/templates/medical-digital-business-card\`,
  \`https://\${DOMAIN}/blog/industry-networking-guide\`
];`;

content = content.replace(/const newUrls = \[.*?\];/s, urlsReplacement);

fs.writeFileSync('scripts/submit-sitemaps.mjs', content);
