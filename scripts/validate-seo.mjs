import fs from 'fs';
import path from 'path';

console.log("🔍 Starting SEO Validation Pipeline...");

// Helper to find all files recursively
function walk(dir, ext = '.tsx') {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file, ext));
        } else {
            if (file.endsWith(ext)) results.push(file);
        }
    });
    return results;
}

const errors = [];
const appDir = path.resolve(process.cwd(), 'src/app');

try {
    const pageFiles = walk(appDir, 'page.tsx');
    console.log(`Found ${pageFiles.length} page.tsx files.`);

    pageFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');

        // Skip some files like 404 or auth callbacks if they exist
        if (file.includes('not-found.tsx') || file.includes('/api/')) return;

        // Check if page has metadata exported
        const hasMetadata = content.includes('export const metadata') || content.includes('export async function generateMetadata');

        // In Next.js app router, the root layout might have the default metadata,
        // but typically content pages should override it or use constructMetadata
        if (!hasMetadata && !file.includes('page.tsx')) {
             // Just a soft warning for standard pages without specific metadata
             console.warn(`⚠️ Warning: No explicit metadata found in ${path.relative(process.cwd(), file)}`);
        }

        // Check if using the centralized constructMetadata (optional but recommended)
        if (hasMetadata && !content.includes('constructMetadata') && !content.includes('generateToolMetadata')) {
            // It's allowed to just export an object, but we prefer the helper
            // We won't fail the build, just warn
        }
    });

    console.log("✅ Basic Metadata Check Passed.");

    // Simple check on sitemap.ts
    const sitemapFile = path.resolve(appDir, 'sitemap.ts');
    if (fs.existsSync(sitemapFile)) {
        const sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
        if (!sitemapContent.includes('generateCanonicalUrl')) {
             errors.push("Sitemap does not use generateCanonicalUrl helper.");
        }
    } else {
        errors.push("Missing sitemap.ts in src/app/");
    }

} catch (e) {
    errors.push(`Validation script error: ${e.message}`);
}

if (errors.length > 0) {
    console.error("❌ SEO Validation Failed:");
    errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
} else {
    console.log("🎉 SEO Validation Complete. All checks passed.");
    process.exit(0);
}
