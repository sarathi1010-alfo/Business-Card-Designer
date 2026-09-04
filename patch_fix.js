const fs = require('fs');

// Fix blog post
let blogContent = fs.readFileSync('src/app/blog/industry-networking-guide/page.tsx', 'utf8');
// The issue is on line 25: \`\${seoConfig.global.url}/logo.png\`
// In a bash heredoc, \` was escaped to ` but maybe the literal string became \`${seoConfig.global.url}/logo.png\`
// Let's replace the literal string with the correct one
blogContent = blogContent.replace(/url": \\\`\\\$\\{seoConfig\.global\.url\\}\/logo\.png\\\`/g, 'url": `${seoConfig.global.url}/logo.png`');
// Or maybe it was just a string
blogContent = blogContent.replace(/\\\`/g, '`');
blogContent = blogContent.replace(/\\\$/g, '$');
fs.writeFileSync('src/app/blog/industry-networking-guide/page.tsx', blogContent);

// Fix mock data
let mockContent = fs.readFileSync('src/lib/templates/mock-data.ts', 'utf8');
// The issue on line 173 might be missing commas or something
const lines = mockContent.split('\n');
// Let's print out around line 173
console.log("Mock data around line 173:");
for (let i = 168; i <= 178; i++) {
    if (lines[i] !== undefined) console.log(i+1 + ": " + lines[i]);
}
