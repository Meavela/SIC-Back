const questionDB = require('../services/question_db');

test('Get All Questions', async () => {
  const data = questionDB.getAllQuestions_db();
  expect(data).toEqual([
    {
      ID: 1,
      Text: 'Etes vous content ?',
      Creator: 1,
    },
    {
      ID: 2,
      Text: 'Votre avis sur la congolexicomatisation ?',
      Creator: 3,
    },
  ]);
});

test('Get Question for ID', async () => {
  const data = questionDB.getQuestionForID_db(1);
  expect(data).toEqual({
    ID: 1,
    Text: 'Etes vous content ?',
    Creator: 1,
  });
});
