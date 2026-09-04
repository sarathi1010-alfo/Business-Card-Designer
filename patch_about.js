const fs = require('fs');
let content = fs.readFileSync('src/app/about/page.tsx', 'utf8');

const importReplacement = `import Link from 'next/link';\n\nexport default function AboutPage() {`;
content = content.replace("export default function AboutPage() {", importReplacement);

const newText = `From designing business cards to compressing PDFs, every tool in our ecosystem is built with a focus on speed, privacy, and user experience. Check out our growing suite of utilities below. To understand why this matters for your specific career, read our <Link href="/blog/industry-networking-guide" className="text-primary hover:underline font-medium">Industry-Specific Networking Guide</Link>.`;
content = content.replace("From designing business cards to compressing PDFs, every tool in our ecosystem is built with a focus on speed, privacy, and user experience. Check out our growing suite of utilities below.", newText);

fs.writeFileSync('src/app/about/page.tsx', content);
