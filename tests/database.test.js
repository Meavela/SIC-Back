const database = require('../services/db');

test('Connect to database', async () => {
  const db = database.getDatabase();
  expect(db);
});
