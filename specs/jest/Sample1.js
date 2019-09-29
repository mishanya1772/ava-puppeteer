const run = new (require('./jestHelper'))();

describe('Sample 1', () => {
  it('Test 1', async () => run.testExample(), 30000);
});
