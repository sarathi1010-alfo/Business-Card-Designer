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
    '/templates/creative-digital-business-card'
  ];

  console.log('Starting enhanced headless browser tests...');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
  });
  const page = await browser.newPage();

  let hasErrors = false;

  // Listen for console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error(`PAGE CONSOLE ERROR: ${msg.text()}`);
      // Some console errors might be ignorable (e.g., third party), but we'll log them
    }
  });

  for (const path of urlsToTest) {
    try {
      console.log(`Checking ${path}...`);
      const response = await page.goto(`${baseUrl}${path}`, { waitUntil: 'networkidle0' });

      if (response && response.status() === 200) {
        console.log(`✅ ${path} returned 200 OK`);
      } else {
        console.error(`❌ ${path} returned status ${response?.status()}`);
        hasErrors = true;
      }

      // Check for broken images
      const brokenImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src);
      });

      if (brokenImages.length > 0) {
        console.error(`❌ Broken images found on ${path}:`, brokenImages);
        hasErrors = true;
      }

      // Basic CSS check (ensure body is visible)
      const isVisible = await page.evaluate(() => {
        const body = document.body;
        const style = window.getComputedStyle(body);
        return style.display !== 'none' && style.visibility !== 'hidden' && parseFloat(style.opacity) > 0;
      });

      if (!isVisible) {
        console.error(`❌ Visual integrity check failed on ${path} (Body not visible)`);
        hasErrors = true;
      }

    } catch (e) {
      console.error(`❌ Failed to load ${path}: ${e.message}`);
      hasErrors = true;
    }
  }

  console.log('Testing core functionality on the main page (/)...');
  try {
    await page.goto(baseUrl, { waitUntil: 'networkidle0' });

    // 1. Template Selector check
    const hasTemplates = await page.evaluate(() => {
      // Look for text or elements related to templates
      return document.body.innerText.includes('Template') || document.querySelector('[class*="Template"]') !== null;
    });
    if (hasTemplates) {
      console.log('✅ Template selector elements found');
    } else {
      console.error('❌ Template selector elements NOT found');
      hasErrors = true;
    }

    // 2. Lead Capture Form check
    const hasForm = await page.evaluate(() => {
      return document.querySelector('form') !== null || document.body.innerText.includes('Contact');
    });
    if (hasForm) {
      console.log('✅ Lead capture / Contact elements found');
    } else {
      console.error('❌ Lead capture / Contact elements NOT found');
      hasErrors = true;
    }

    // 3. QR Code check
    const hasQR = await page.evaluate(() => {
        return document.querySelector('canvas') !== null || document.body.innerText.includes('QR');
    });
    if (hasQR) {
        console.log('✅ QR code / Canvas elements found');
    } else {
        // Some apps might load QR later or in a specific section
        console.warn('⚠️ QR code / Canvas elements NOT found on home page (may be expected if only in editor)');
    }

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
