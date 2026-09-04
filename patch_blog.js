const fs = require('fs');
let content = fs.readFileSync('src/app/blog/industry-networking-guide/page.tsx', 'utf8');

content = content.replace(/Don't/g, "Don&apos;t");
content = content.replace(/don't/g, "don&apos;t");
content = content.replace(/isn't/g, "isn&apos;t");
content = content.replace(/You've/g, "You&apos;ve");
content = content.replace(/Let's/g, "Let&apos;s");
content = content.replace(/aren't/g, "aren&apos;t");
content = content.replace(/It's/g, "It&apos;s");
content = content.replace(/it's/g, "it&apos;s");

fs.writeFileSync('src/app/blog/industry-networking-guide/page.tsx', content);
