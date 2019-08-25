const test = require('ava');
const puppeteer = require('puppeteer');
const ciParallelVars = require('ci-parallel-vars');

const url = 'https://www.youtube.com';
global.test = test;

test.before(async () => {
  global.browser = await puppeteer.launch({
      headless: false,
      //slowMo: 100,
      defaultViewport: {width: 1920, height:1080},
      args: ['--window-size=1920,1080', '--disable-infobars'],
  });
});

// tests.after(async () => {
//     return browser.close();
// });

// tests.beforeEach(async () => {
//     global.page = await browser.newPage();
//     return page.goto(url);
// });
//
// tests.afterEach(async () => {
//     return page.close();
// });

