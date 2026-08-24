import https from 'https';

const DOMAIN = 'brandcard.alfo.online';
const INDEXNOW_KEY = '5a4c514838db4db1a7f14b609db20573'; // Example key, ideally from env

const sitemaps = [
  `https://${DOMAIN}/sitemap.xml`,
  `https://${DOMAIN}/sitemap-articles.xml`,
  `https://${DOMAIN}/sitemap-products.xml`,
];

const newUrls = [
  `https://${DOMAIN}/blog/digital-business-card-guide`,
  `https://${DOMAIN}/blog/industry-specific-networking-guide`,
  `https://${DOMAIN}/professions/founder-digital-business-card`,
  `https://${DOMAIN}/professions/freelancer-digital-business-card`,
  `https://${DOMAIN}/professions/real-estate-agent-digital-card`,
  `https://${DOMAIN}/professions/consultant-digital-business-card`,
  `https://${DOMAIN}/professions/lawyer-digital-business-card`,
  `https://${DOMAIN}/professions/architect-digital-business-card`,
  `https://${DOMAIN}/professions/photographer-digital-business-card`,
  `https://${DOMAIN}/professions/chef-digital-business-card`,
  `https://${DOMAIN}/use-cases/networking-event-digital-card`,
  `https://${DOMAIN}/use-cases/conference-digital-business-card`,
  `https://${DOMAIN}/use-cases/trade-show`,
  `https://${DOMAIN}/use-cases/corporate-event`,
  `https://${DOMAIN}/templates/minimalist-digital-business-card`,
  `https://${DOMAIN}/templates/creative-digital-business-card`,
  `https://${DOMAIN}/templates/law-firm`,
  `https://${DOMAIN}/templates/photography`
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