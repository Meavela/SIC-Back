const voteDB = require('../services/vote_db');

test('Get all votes for question ID', async () => {
  const data = voteDB.getVoteForOption(2);
  expect(data).toEqual([{
    Choice: 2,
    ID: 1,
    User: 1,
  },
  {
    Choice: 2,
    ID: 3,
    User: 4,
  }]);
});

test('Get all votes for question ID wrong id', async () => {
  const data = voteDB.getVoteForOption(-1);
  expect(data).toEqual([]);
});
