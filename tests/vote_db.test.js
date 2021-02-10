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

test('Add vote', async () => {
  const data = voteDB.addVote(1, 'Adrien');
  expect(data).toEqual({
    status: 'OK',
    message: 'Vote counted',
  });
});

test('Add vote error name', async () => {
  const data = voteDB.addVote(1, 'jhkgfdsjhfiehbk');
  expect(data).toEqual({
    status: 'KO',
    message: 'Error adding vote Username unknown',
  });
});

/*
test('Add vote error question', async () => {
  const data = voteDB.addVote(-1, 'Adrien');
  expect(data).toEqual( {
    status: 'KO',
    message: 'Error adding vote',
  });
});
*/

test('Remove Vote', async () => {
  const data = voteDB.removeVote(1, 'Adrien');
  expect(data).toEqual({
    status: 'OK',
    message: 'Vote remouved',
  });
});

test('Remove vote error name', async () => {
  const data = voteDB.removeVote(1, 'jhkgfdsjhfiehbk');
  expect(data).toEqual({
    status: 'KO',
    message: 'Error remouving vote Username unknown',
  });
});

test('Remove vote error question', async () => {
  const data = voteDB.removeVote(-1, 'Adrien');
  expect(data).toEqual({
    status: 'KO',
    message: 'Error remouving vote',
  });
});
