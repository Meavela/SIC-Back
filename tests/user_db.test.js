const userDB = require('../services/user_db');

test('Get All Users', async () => {
  const data = userDB.getAllUsers();
  console.log(data);
  expect(data).toEqual([
    { ID: 1, Password: 'Toto123', Username: 'Adrien' },
    { ID: 2, Password: '15218765', Username: 'Lou' },
    { ID: 3, Password: 'lebest38', Username: 'Edouard' },
    { ID: 4, Password: '%^ùldsjkghyzhgfd', Username: 'Marco' }
  ]);
});

test('Get User for ID', async () => {
  const data = userDB.getUserForID(1);
  expect(data).toEqual({
    ID: 1,
    Username: 'Adrien',
    Password: 'Toto123',
  });
});

test('Get User for username', async () => {
  const data = userDB.getUserWithUsername('Adrien');
  expect(data).toEqual({
    ID: 1,
    Username: 'Adrien',
    Password: 'Toto123',
  });
});
