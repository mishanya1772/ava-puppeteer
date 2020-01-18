# Examples of different parallel running

### Running e2e tests using AVA + Puppeteer; Protractor + Jasmine2; Jest + Puppeteer
    • clone a project    
    • install all dependencies: npm i
         
    • for running Ava_concurrency: npm run test:concurrency
    • for running Ava_serial: npm run test:serial

    • for Protractor and Jest, run a Selenium Server: npm run webdriver:start
          • for running Protractor in 1 thread: npm run protrcator:thread
          • for running Protractor in parallel: run protrcator:threads

          • for running Jest: npm run jest:thread
          • for running Jest in parallel: npm run jest:threads
