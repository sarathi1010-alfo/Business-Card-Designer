const fs = require('fs');
let content = fs.readFileSync('src/app/blog/industry-networking-guide/page.tsx', 'utf8');

content = content.replace(/someone's/g, "someone&apos;s");
content = content.replace(/I'd/g, "I&apos;d");
content = content.replace(/phone's/g, "phone&apos;s");

fs.writeFileSync('src/app/blog/industry-networking-guide/page.tsx', content);
