const run = new (require('./jestHelper'))();

describe('Sample 2', () => {
  it('Test 1', async () => run.testExample(), 30000);
});
