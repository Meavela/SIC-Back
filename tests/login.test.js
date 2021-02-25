const login = require('../services/login');

test('Login Admin good', async () => {
  const data = login.login('admin', '123456');
  expect(data).toEqual({
    status: 'OK',
    message: 'OK',
    IsAdmin: 'true',
  });
});

test('Login Standard', async () => {
  const data = login.login('Adrien', 'Toto123');
  expect(data).toEqual(
      {
        status: 'OK',
        message: 'OK',
      },
  );
});

test('Login Standard unkown', async () => {
  const data = login.login('Adrieneee', 'Toto123');
  expect(data).toEqual(
      {
        message: 'User is unkown',
        status: 'KO',
      },
  );
});

test('Login Standard password', async () => {
  const data = login.login('Adrien', 'Toto1234546546');
  expect(data).toEqual(
      {
        status: 'KO',
        message: 'Passsword is wrong',
      },
  );
});
