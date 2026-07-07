import puppeteer from 'puppeteer';

(async () => {
  const PORT = 3000;
  const baseUrl = `http://localhost:${PORT}`;

  console.log('Starting Deep Functional Verification...');
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  let hasErrors = false;

  try {
    // 1. Home Page Verification
    console.log('Testing Home Page...');
    await page.goto(baseUrl, { waitUntil: 'networkidle0' });
    const hasHero = await page.evaluate(() => document.body.innerText.includes('professional identity'));
    if (hasHero) console.log('✅ Home Page Hero Section loaded');
    else { console.error('❌ Home Page Hero Section NOT loaded'); hasErrors = true; }

    // 2. Templates Page Verification
    console.log('Testing Templates Page...');
    await page.goto(`${baseUrl}/templates`, { waitUntil: 'networkidle0' });
    const templateLink = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('a'));
        const editorLink = links.find(l => l.href.includes('/editor/'));
        return editorLink ? editorLink.href : null;
    });
    if (templateLink) console.log('✅ Templates Page loaded with editor links');
    else { console.error('❌ Templates Page editor links NOT found'); hasErrors = true; }

    // 3. Editor Functional Verification
    if (templateLink) {
        console.log(`Testing Editor: ${templateLink}...`);
        await page.goto(templateLink, { waitUntil: 'networkidle0' });

        // Real-time Editor Basics
        const hasControls = await page.evaluate(() => {
            const text = document.body.innerText;
            return text.includes('Properties') || text.includes('Text') || text.includes('Background');
        });
        if (hasControls) console.log('✅ Editor controls detected');
        else { console.error('❌ Editor controls NOT found'); hasErrors = true; }

        // Canvas / QR Detection
        const hasCanvas = await page.evaluate(() => !!document.querySelector('canvas'));
        if (hasCanvas) console.log('✅ Editor canvas detected');
        else { console.error('❌ Editor canvas NOT found'); hasErrors = true; }

        // Lead capture / Share Modal
        const hasShare = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            return buttons.some(b => b.innerText.includes('Share') || b.innerText.includes('Export'));
        });
        if (hasShare) console.log('✅ Editor share/export buttons detected');
        else { console.error('❌ Editor share/export buttons NOT found'); hasErrors = true; }
    }

    // 4. Console Error Check
    page.on('console', msg => {
        if (msg.type() === 'error' && !msg.text().includes('Failed to load resource')) {
            console.error(`PAGE CONSOLE ERROR: ${msg.text()}`);
            hasErrors = true;
        }
    });

  } catch (e) {
    console.error(`❌ Verification failed: ${e.message}`);
    hasErrors = true;
  }

  await browser.close();
  if (hasErrors) {
      process.exit(1);
  } else {
      console.log('🎉 Deep Functional Verification Complete. All checks passed.');
      process.exit(0);
  }
})();
