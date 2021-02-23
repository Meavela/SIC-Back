const optionDB = require('../services/options_db');

test('Get Options for q question ID', async () => {
  const data = optionDB.getOptionsForID_db(1);
  expect(data).toEqual([{
    Hide: 'false',
    ID: 1,
    Question: 1,
    Text: 'Oui',
  },
  {
    Hide: 'false',
    ID: 2,
    Question: 1,
    Text: 'Non',
  }]);
});

test('Get Options for q question ID wrong id', async () => {
  const data = optionDB.getOptionsForID_db(-1);
  expect(data).toEqual([]);
});
