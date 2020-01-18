const run = new (require('./jestHelper'))();

describe('Sample 2', () => {
  test('Test 1', async () => run.testExample(), 30000);
  test('Test 2', async () => run.testExample(), 30000);
});
