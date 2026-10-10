import puppeteer from 'puppeteer';

(async () => {
  const PORT = 3000;
  const baseUrl = `http://localhost:${PORT}`;

  const urlsToTest = [
    '/blog/digital-business-card-guide',
    '/professions/founder-digital-business-card',
    '/professions/freelancer-digital-business-card',
    '/professions/real-estate-agent-digital-card',
    '/professions/consultant-digital-business-card',
    '/use-cases/networking-event-digital-card',
    '/use-cases/conference-digital-business-card',
    '/templates/minimalist-digital-business-card',
    '/templates/creative-digital-business-card',
    '/blog/what-is-a-digital-business-card',
    '/blog/digital-vs-physical-business-cards',
    '/blog/how-to-design-digital-business-card',
    '/blog/ultimate-guide-digital-business-cards-2026',
    '/blog/how-does-a-digital-business-card-work',
    '/blog/why-do-i-need-a-digital-business-card',
    '/blog/what-is-a-qr-code-business-card'
  ];

  console.log('Starting headless browser tests...');
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  let hasErrors = false;

  for (const path of urlsToTest) {
    try {
      const response = await page.goto(`${baseUrl}${path}`, { waitUntil: 'domcontentloaded' });
      if (response && response.status() === 200) {
        console.log(`✅ ${path} returned 200 OK`);
      } else {
        console.error(`❌ ${path} returned status ${response?.status()}`);
        hasErrors = true;
      }
    } catch (e) {
      console.error(`❌ Failed to load ${path}: ${e.message}`);
      hasErrors = true;
    }
  }

  console.log('Testing core functionality on the main page (/)...');
  try {
    const response = await page.goto(baseUrl, { waitUntil: 'networkidle0' });
    if (response && response.status() !== 200) {
       console.error(`❌ Main page returned status ${response?.status()}`);
       hasErrors = true;
    }

    // Check if the page loaded the hero section (implying the app rendered)
    const hasHero = await page.evaluate(() => {
      return document.querySelector('h1') !== null;
    });

    if (hasHero) {
      console.log('✅ Main page core UI loaded successfully');
    } else {
       console.error('❌ Main page did not load expected core UI');
       hasErrors = true;
    }

    console.log('Evaluating Core Web Vitals (LCP/CLS)...');
    const vitals = await page.evaluate(() => {
      return new Promise((resolve) => {
        let lcp = null;
        let cls = 0;

        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            lcp = entry.startTime;
          }
        }).observe({type: 'largest-contentful-paint', buffered: true});

        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              cls += entry.value;
            }
          }
        }).observe({type: 'layout-shift', buffered: true});

        setTimeout(() => {
          resolve({ lcp, cls });
        }, 1000);
      });
    });
    console.log(`✅ Core Web Vitals -> LCP: ${vitals.lcp}, CLS: ${vitals.cls}`);

  } catch (e) {
    console.error(`❌ Failed during main page functional test: ${e.message}`);
    hasErrors = true;
  }

  await browser.close();

  if (hasErrors) {
    console.error('Tests finished with errors.');
    process.exit(1);
  } else {
    console.log('All tests passed successfully.');
    process.exit(0);
  }
})();
