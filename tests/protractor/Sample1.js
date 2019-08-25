const url = 'https://www.youtube.com';
const EC = protractor.ExpectedConditions;

describe('Sample1', () => {
  it('Test 1', async () => test());
  it('Test 2', async () => test());
  it('Test 3', async () => test());

  let test = async function test() {
    await browser.get(url);

    await $$('#search').get(0).sendKeys('puppeteer');
    await $('button#search-icon-legacy').click();
    await browser.wait(EC.visibilityOf($$('.title.style-scope.ytd-guide-entry-renderer').get(0)), 6000);

    const main = $$('.title.style-scope.ytd-guide-entry-renderer');
    for (let i = 0; i < 10; i++) {
      main.get(i).click();
      browser.sleep(1000);
    }

    await $$('.style-suggestive.size-small').get(0).click();
    await browser.wait(EC.visibilityOf($('#identifierNext > span')), 6000);
    return expect($('#identifierNext > span').getText()).toEqual('Далее');
  };
});
