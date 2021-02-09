const login = require('../services/login');

test('Login Admin good', async () => {
  const data = login.loginAdmin('admin', '123456');
  console.log(data);
  expect(data).toStrictEqual({ status: 'OK', message: 'OK' });
});

test('Login Admin wrong user', async () => {
  const data = login.loginAdmin('coucou', 'coucou');
  console.log(data);
  expect(data).toStrictEqual(
    {
      status: 'KO',
      message: 'User is unkown',
    }
  );
});

test('Login Admin wrong password', async () => {
  const data = login.loginAdmin('admin', 'coucou');
  console.log(data);
  expect(data).toStrictEqual(
    { status: 'KO', message: 'Passsword is wrong' }
  );
});


/*
test('Login Standard', async () => {
  const data = login.login('Adrien', 'Toto123');
  console.log(data);
  expect(JSON.stringify(data)).toBe(JSON.stringify([
    {},
  ]));
});
*/