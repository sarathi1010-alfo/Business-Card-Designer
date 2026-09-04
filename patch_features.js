const fs = require('fs');
let content = fs.readFileSync('src/components/home/FeaturesSection.tsx', 'utf8');

const oldText = `Check out our <Link href="/blog/digital-business-card-guide" className="text-primary hover:underline font-medium">guide on creating high-converting digital cards</Link>.`;
const newText = `Check out our <Link href="/blog/digital-business-card-guide" className="text-primary hover:underline font-medium">guide on creating high-converting digital cards</Link> or our <Link href="/blog/industry-networking-guide" className="text-primary hover:underline font-medium">Industry-Specific Networking Guide</Link>.`;
content = content.replace(oldText, newText);

fs.writeFileSync('src/components/home/FeaturesSection.tsx', content);
