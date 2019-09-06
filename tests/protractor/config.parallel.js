const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  useAllAngular2AppRoots: true,
  protractor: true,
  multiCapabilities: [
    {
      shardTestFiles: true,
      maxInstances: 1,
      sequential: true,
      browserName: 'chrome',
      specs: ['./Sample1.js'],
    },
    {
      shardTestFiles: true,
      maxInstances: 1,
      sequential: true,
      browserName: 'chrome',
      specs: ['./Sample2.js'],
    },
    {
      shardTestFiles: true,
      maxInstances: 1,
      sequential: true,
      browserName: 'chrome',
      specs: ['./Sample3.js'],
    },
    {
      shardTestFiles: true,
      maxInstances: 1,
      sequential: true,
      browserName: 'chrome',
      specs: ['./Sample4.js'],
    }],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--window-size=1920,1080'],
    },
    maxInstances: 2,
  },
  jasmineNodeOpts: {
    showColors: true,
  },
  onPrepare() {
    browser.ignoreSynchronization = true;
    browser.manage().window().setSize(1600, 1000);
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true,
    }));
  },
};
