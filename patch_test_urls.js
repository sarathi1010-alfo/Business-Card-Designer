const fs = require('fs');
let content = fs.readFileSync('scripts/test_urls.mjs', 'utf8');

const urlsReplacement = `const urlsToTest = [
    '/blog/digital-business-card-guide',
    '/professions/founder-digital-business-card',
    '/professions/freelancer-digital-business-card',
    '/professions/real-estate-agent-digital-card',
    '/professions/consultant-digital-business-card',
    '/use-cases/networking-event-digital-card',
    '/use-cases/conference-digital-business-card',
    '/templates/minimalist-digital-business-card',
    '/templates/creative-digital-business-card',
    '/professions/lawyer-digital-business-card',
    '/professions/architect-digital-business-card',
    '/professions/dentist-digital-card',
    '/professions/accountant-digital-business-card',
    '/use-cases/trade-show-digital-card',
    '/use-cases/medical-conference-digital-business-card',
    '/templates/legal-digital-business-card',
    '/templates/medical-digital-business-card',
    '/blog/industry-networking-guide'
  ];`;

content = content.replace(/const urlsToTest = \[.*?\];/s, urlsReplacement);

fs.writeFileSync('scripts/test_urls.mjs', content);
