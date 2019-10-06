const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./Sample*'],
  useAllAngular2AppRoots: true,
  protractor: true,
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 4,
  },
  jasmineNodeOpts: {
    showColors: true,
  },
  onPrepare() {
    browser.ignoreSynchronization = true;
    browser.manage().window().setSize(1920, 1080);
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true,
    }));
  },
};
