import {getTime, pool} from '../src/database';

describe('Test database', () => {
  test('It should return a timestamp', async () => {
    const timestamp = await getTime();
    expect(timestamp).toBeDefined();
  });

  afterAll(async () => {
    await pool.end();
  });
});
