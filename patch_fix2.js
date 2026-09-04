const fs = require('fs');

// Fix mock data
let mockContent = fs.readFileSync('src/lib/templates/mock-data.ts', 'utf8');
mockContent = mockContent.replace("  }\n\n  {", "  },\n  {");
fs.writeFileSync('src/lib/templates/mock-data.ts', mockContent);

// Fix blog post escaping
let blogContent = fs.readFileSync('src/app/blog/industry-networking-guide/page.tsx', 'utf8');
blogContent = blogContent.replace(/\\\$/g, '$');
blogContent = blogContent.replace(/\\\`/g, '`');
fs.writeFileSync('src/app/blog/industry-networking-guide/page.tsx', blogContent);
