const run = new (require('../protractor/helpers'))();

describe('Sample 3', () => {
  it('Test 1', async () => run.testExample());
  it('Test 2', async () => run.testExample());
  it('Test 3', async () => run.testExample());
});
