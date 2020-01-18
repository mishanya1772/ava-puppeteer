const run = new (require('./jestHelper'))();

describe('Sample 1', () => {
  test('Test 1', async () => run.testExample(), 30000);
});
