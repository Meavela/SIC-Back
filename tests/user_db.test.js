const userDB = require('../services/user_db');

test('Get All Users', async () => {
  const data = userDB.getAllUsers();
  expect(data).toEqual([
    {ID: 1, Password: 'Toto123', Username: 'Adrien', IsAdmin: 'false'},
    {ID: 2, Password: '15218765', Username: 'Lou', IsAdmin: 'false'},
    {ID: 3, Password: 'lebest38', Username: 'Edouard', IsAdmin: 'false'},
    {ID: 4, Password: '%^ùldsjkghyzhgfd', Username: 'Marco', IsAdmin: 'false'},
    {ID: 5, Password: '123456', Username: 'admin', IsAdmin: 'true'},
  ]);
});

test('Get User for ID', async () => {
  const data = userDB.getUserForID(1);
  expect(data).toEqual({
    ID: 1,
    Username: 'Adrien',
    Password: 'Toto123',
    IsAdmin: 'false',
  });
});

test('Get User for username', async () => {
  const data = userDB.getUserWithUsername('Adrien');
  expect(data).toEqual({
    ID: 1,
    Username: 'Adrien',
    Password: 'Toto123',
    IsAdmin: 'false',
  });
});
