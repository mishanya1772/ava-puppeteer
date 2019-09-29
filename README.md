# Examples of different parallel running

### Running e2e tests using AVA + Puppeteer; Protractor + Jasmine2; Jest + Puppeteer

* clone the project
* open terminal and enter: **npm i**
* for running *Ava concurrency*: **npm run test:concurrency**
* for running *Ava serial*: **npm run test:serial**
* for running *Protractor*: **npm run webdriver:start** AND **npm run protrcator:thread**
* for running *Protractor in parallel*: **npm run webdriver:start** AND **npm run protrcator:threads**
* for running *Jest*: **npm run webdriver:start** AND **npm run jest:thread**
* for running *Jest in parallel*: **npm run webdriver:start** AND **npm run jest:threads**
