const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Sample*'],
    useAllAngular2AppRoots: true,
    protractor: true,
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
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
        }));
    },
};
