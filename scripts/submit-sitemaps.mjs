import https from 'https';

const DOMAIN = 'brandcard.alfo.online';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'YOUR_INDEXNOW_KEY';

const sitemaps = [
  `https://${DOMAIN}/sitemap.xml`,
  `https://${DOMAIN}/sitemap-articles.xml`,
  `https://${DOMAIN}/sitemap-products.xml`,
];

const newUrls = [
  `https://${DOMAIN}/blog/digital-business-card-guide`,
  `https://${DOMAIN}/blog/ultimate-guide-digital-business-cards-2026`,
  `https://${DOMAIN}/blog/what-is-a-digital-business-card`,
  `https://${DOMAIN}/blog/digital-vs-physical-business-cards`,
  `https://${DOMAIN}/blog/how-to-design-digital-business-card`,
  `https://${DOMAIN}/blog/how-does-digital-business-card-work`,
  `https://${DOMAIN}/blog/why-need-digital-business-card`,
  `https://${DOMAIN}/blog/what-is-qr-code-business-card`,
  `https://${DOMAIN}/professions/founder-digital-business-card`,
  `https://${DOMAIN}/professions/freelancer-digital-business-card`,
  `https://${DOMAIN}/professions/real-estate-agent-digital-card`,
  `https://${DOMAIN}/professions/consultant-digital-business-card`,
  `https://${DOMAIN}/use-cases/networking-event-digital-card`,
  `https://${DOMAIN}/use-cases/conference-digital-business-card`,
  `https://${DOMAIN}/templates/minimalist-digital-business-card`,
  `https://${DOMAIN}/templates/creative-digital-business-card`
];

async function pingSitemap(sitemapUrl) {
  const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`Pinging Google Sitemap: ${sitemapUrl} -> Status: ${res.statusCode}`);
      resolve(res.statusCode);
    }).on('error', (e) => {
      console.error(`Error pinging sitemap ${sitemapUrl}: ${e.message}`);
      resolve(null);
    });
  });
}

async function triggerIndexNow() {
  const payload = JSON.stringify({
    host: DOMAIN,
    key: INDEXNOW_KEY,
    keyLocation: `https://${DOMAIN}/${INDEXNOW_KEY}.txt`,
    urlList: newUrls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': payload.length
    }
  };

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      console.log(`IndexNow Ping -> Status: ${res.statusCode}`);
      res.on('data', (d) => process.stdout.write(d));
      resolve(res.statusCode);
    });

    req.on('error', (e) => {
      console.error(`Error triggering IndexNow: ${e.message}`);
      resolve(null);
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log('--- Starting SEO Ping Script ---');

  // 1. Ping Google Sitemaps
  for (const sitemap of sitemaps) {
    await pingSitemap(sitemap);
  }

  // 2. Trigger IndexNow API
  await triggerIndexNow();

  console.log('\n--- SEO Ping Script Complete ---');
}

main();