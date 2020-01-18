# Examples of different parallel running

### Running e2e tests using AVA + Puppeteer; Protractor + Jasmine2; Jest + Puppeteer

### Presentation: 
    • https://slides.com/mishanyalepskiy/parallelprunning-with-js 

### Setup:
    • clone a project    
    • install all dependencies: npm i

### Ava:    
    • run serial: npm run test:serial     
    • run concurrency: npm run test:concurrency

### Protractor
    • run a Selenium Server: npm run webdriver:start
    • run in 1 thread: npm run protrcator:thread
    • run in parallel: run protrcator:threads

### Jest:
    • run a Selenium Server: npm run webdriver:start
    • for running in 1 thread: npm run jest:thread
    • for running in parallel: npm run jest:threads
