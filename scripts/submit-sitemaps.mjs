import https from 'https';

const DOMAIN = 'brandcard.alfo.online';
const INDEXNOW_KEY = '5a4c514838db4db1a7f14b609db20573'; // Example key, ideally from env

const sitemaps = [
  `https://${DOMAIN}/sitemap.xml`,
  `https://${DOMAIN}/sitemap-articles.xml`,
  `https://${DOMAIN}/sitemap-products.xml`,
];

const newUrls = [
  `https://${DOMAIN}/blog/industry-specific-networking-guide`,
  `https://${DOMAIN}/use-cases/healthcare-networking-card`,
  `https://${DOMAIN}/use-cases/legal-digital-business-card`,
  `https://${DOMAIN}/use-cases/tech-digital-card`,
  `https://${DOMAIN}/use-cases/finance-digital-card`,
  `https://${DOMAIN}/templates/healthcare-digital-business-card`,
  `https://${DOMAIN}/templates/legal-digital-business-card`,
  `https://${DOMAIN}/templates/tech-digital-business-card`,
  `https://${DOMAIN}/templates/finance-digital-business-card`
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