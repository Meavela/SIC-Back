const userDB = require('../services/user_db');

test('Get All Users', async () => {
  expect(userDB.getAllUsers()).toBe('getting all users');
});

test('Get User for ID', async () => {
  expect(userDB.getUserForID(5)).toBe('getting user for id 5');
});