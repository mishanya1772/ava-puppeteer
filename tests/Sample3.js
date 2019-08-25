require('./helpers');
const url = 'https://www.youtube.com';

test('Test 1', async t => {
    const page = await browser.newPage();
    await page.goto(url);
    await page.type('#search', 'puppeteer');
    await page.click('button#search-icon-legacy');

    await page.waitForSelector('.title.style-scope.ytd-guide-entry-renderer');
    const main = await page.$$('.title.style-scope.ytd-guide-entry-renderer');
    for(let i=0; i<10; i++){
        await main[i].click();
        await page.waitFor(1000);
    }

    const login = await page.$$('.style-suggestive.size-small');
    await login[0].click();

    await page.waitForSelector('#identifierNext > span');
    const element = await page.$("#identifierNext > span");
    const text = await (await element.getProperty('textContent')).jsonValue();

    await t.is(text, 'Далее');
    return page.close();
});

test('Test 2', async t => {
    const page = await browser.newPage();
    await page.goto(url);
    await page.type('#search', 'puppeteer');
    await page.click('button#search-icon-legacy');

    await page.waitForSelector('.title.style-scope.ytd-guide-entry-renderer');
    const main = await page.$$('.title.style-scope.ytd-guide-entry-renderer');
    for(let i=0; i<10; i++){
        await main[i].click();
        await page.waitFor(1000);
    }

    const login = await page.$$('.style-suggestive.size-small');
    await login[0].click();

    await page.waitForSelector('#identifierNext > span');
    const element = await page.$("#identifierNext > span");
    const text = await (await element.getProperty('textContent')).jsonValue();

    await t.is(text, 'Далее');
    return page.close();
});

test('Test 3', async t => {
    const page = await browser.newPage();
    await page.goto(url);
    await page.type('#search', 'puppeteer');
    await page.click('button#search-icon-legacy');

    await page.waitForSelector('.title.style-scope.ytd-guide-entry-renderer');
    const main = await page.$$('.title.style-scope.ytd-guide-entry-renderer');
    for(let i=0; i<10; i++){
        await main[i].click();
        await page.waitFor(1000);
    }

    const login = await page.$$('.style-suggestive.size-small');
    await login[0].click();

    await page.waitForSelector('#identifierNext > span');
    const element = await page.$("#identifierNext > span");
    const text = await (await element.getProperty('textContent')).jsonValue();

    await t.is(text, 'Далее');
    return page.close();
});
