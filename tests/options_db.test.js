const optionDB = require('../services/options_db');

test('Get Options for q question ID', async () => {
  const data = optionDB.getOptionsForID(1);
  expect(data).toEqual([{
    ID: 1,
    Question: 1,
    Text: 'Oui',
  },
  {
    ID: 2,
    Question: 1,
    Text: 'Non',
  }]);
});

test('Get Options for q question ID wrong id', async () => {
  const data = optionDB.getOptionsForID(-1);
  expect(data).toEqual([]);
});
