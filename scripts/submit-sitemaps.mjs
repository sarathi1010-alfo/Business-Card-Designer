// scripts/submit-sitemaps.js
// Submits sitemaps to Google Search Console via API post-deployment.

import { google } from 'googleapis';

async function submitSitemaps() {
  console.log('Initiating Google Search Console sitemap submission...');

  // Ensure environment variables are set
  if (!process.env.GSC_SERVICE_ACCOUNT_EMAIL || !process.env.GSC_PRIVATE_KEY || !process.env.SITE_URL) {
    console.warn('Missing GSC environment variables. Skipping sitemap submission.');
    return;
  }

  const siteUrl = process.env.SITE_URL; // e.g. https://alfo.online

  // List of sitemaps to submit (based on generateSitemaps architecture)
  const sitemaps = [
    `${siteUrl}/sitemap.xml`,
    `${siteUrl}/sitemap/core.xml`,
    `${siteUrl}/sitemap/pdf-tools.xml`,
    `${siteUrl}/sitemap/color-tools.xml`,
    `${siteUrl}/sitemap/resume-tools.xml`,
    `${siteUrl}/sitemap/calculator-tools.xml`
  ];

  try {
    const auth = new google.auth.JWT(
      process.env.GSC_SERVICE_ACCOUNT_EMAIL,
      null,
      process.env.GSC_PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/webmasters']
    );

    const webmasters = google.webmasters({ version: 'v3', auth });

    for (const feedpath of sitemaps) {
      try {
        console.log(`Submitting sitemap: ${feedpath}`);
        await webmasters.sitemaps.submit({
          siteUrl: siteUrl,
          feedpath: feedpath,
        });
        console.log(`✅ Successfully submitted: ${feedpath}`);
      } catch (err) {
        console.error(`❌ Failed to submit ${feedpath}:`, err.message);
      }
    }

    console.log('Sitemap submission process complete.');
  } catch (error) {
    console.error('Fatal error during sitemap submission:', error);
  }
}

submitSitemaps();
