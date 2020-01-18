const test = require('ava');
const puppeteer = require('puppeteer');

global.test = test;
const url = 'https://www.youtube.com';

test.before(async () => {
  global.browser = await puppeteer.launch({
    headless: false,
    // slowMo: 100,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--window-size=1920,1080', '--disable-infobars'],
  });
});

test.after(async () => browser.close());

class basicActions {
  async testExample(t) {
    const page = await browser.newPage();
    await page.goto(url);
    await page.type('#search', 'puppeteer');
    await page.click('button#search-icon-legacy');

    await page.waitForSelector('.title.style-scope.ytd-guide-entry-renderer');
    const main = await page.$$('.title.style-scope.ytd-guide-entry-renderer');
    for (let i = 0; i < 10; i++) {
      await main[i].click();
      await page.waitFor(1000);
    }

    const login = await page.$$('.style-suggestive.size-small');
    await login[0].click();

    await page.waitForSelector('#identifierNext > span');
    const element = await page.$('#identifierNext > span');
    const text = await (await element.getProperty('textContent')).jsonValue();

    await t.is(text, 'Далее');
    return page.close();

    /* for Headless mod
    const login = await page.$$('.style-suggestive.size-small');
    const text = await (await login[2].getProperty('textContent')).jsonValue();

    await t.is(text, 'Увійти'); // Увійти - headless
    await login[0].click();
    return page.close();
    */
  }
}

module.exports = basicActions;
