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
    '/blog/industry-specific-digital-card',
    '/professions/doctor-digital-business-card',
    '/professions/lawyer-digital-business-card',
    '/professions/accountant-digital-business-card',
    '/professions/photographer-digital-business-card',
    '/use-cases/trade-show-digital-card',
    '/use-cases/job-interview-digital-business-card',
    '/templates/medical-digital-business-card',
    '/templates/photography-digital-business-card'
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

    // We cannot definitively test full canvas editor logic without a complex setup,
    // but we can ensure there are no severe page crashes on the main landing

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
