const fs = require('fs');

let sitemapContent = fs.readFileSync('src/app/sitemap.ts', 'utf8');
sitemapContent = sitemapContent.replace(
  '"corporate",',
  '"corporate",\n  "legal",\n  "medical",'
);
fs.writeFileSync('src/app/sitemap.ts', sitemapContent);

let mockDataContent = fs.readFileSync('src/lib/templates/mock-data.ts', 'utf8');

const newTemplates = `
  {
    id: 'legal-classic',
    name: 'Legal Classic',
    category: 'Legal',
    preview: '/templates/legal-classic.webp',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#f8fafc',
    elements: [
      {
        id: 'name',
        type: 'text',
        x: 100,
        y: 200,
        width: 850,
        text: 'JANE DOE, ESQ.',
        fontSize: 56,
        fontFamily: 'serif',
        fontWeight: 'bold',
        fill: '#0f172a',
        textAlign: 'center'
      },
      {
        id: 'title',
        type: 'text',
        x: 100,
        y: 280,
        width: 850,
        text: 'MANAGING PARTNER',
        fontSize: 20,
        fontFamily: 'sans-serif',
        fill: '#475569',
        textAlign: 'center'
      }
    ]
  },
  {
    id: 'medical-clean',
    name: 'Medical Clean',
    category: 'Medical',
    preview: '/templates/medical-clean.webp',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#ffffff',
    elements: [
      {
        id: 'name',
        type: 'text',
        x: 100,
        y: 200,
        width: 850,
        text: 'DR. JOHN SMITH',
        fontSize: 56,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fill: '#0284c7',
        textAlign: 'center'
      },
      {
        id: 'title',
        type: 'text',
        x: 100,
        y: 280,
        width: 850,
        text: 'CHIEF OF SURGERY',
        fontSize: 20,
        fontFamily: 'sans-serif',
        fill: '#64748b',
        textAlign: 'center'
      }
    ]
  }
];
`;

mockDataContent = mockDataContent.replace('];\n', newTemplates);
fs.writeFileSync('src/lib/templates/mock-data.ts', mockDataContent);
