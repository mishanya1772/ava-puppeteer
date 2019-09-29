const run = new (require('./jestHelper'))();

describe('Sample 3', () => {
  test('Test 1', async () => run.testExample(), 30000);
  test('Test 2', async () => run.testExample(), 30000);
  test('Test 3', async () => run.testExample(), 30000);
});
