const userDB = require('../services/user_db');

test('Get All Users', async () => {
  const data = userDB.getAllUsers();
  expect(JSON.stringify(data)).toBe(JSON.stringify([
    { ID: 1, Username: 'Adrien', Password: 'Toto123' },
    { ID: 2, Username: 'Lou', Password: '15218765' },
    { ID: 3, Username: 'Edouard', Password: 'lebest38' },
    { ID: 4, Username: 'Marco', Password: '%^ùldsjkghyzhgfd' }
  ]));
});

test('Get User for ID', async () => {
  const data = userDB.getUserForID(1);
  expect(JSON.stringify(data)).toBe(JSON.stringify({
    ID: 1,
    Username: 'Adrien',
    Password: 'Toto123'
  }));
});