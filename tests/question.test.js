const question = require('../services/question');

test('get question', async () => {
  const data = question.getQuestion(1);
  expect(data).toEqual({
    status: 'OK',
    question: {ID: 1, Text: 'Etes vous content ?', Creator: 1},
    option: [
      {ID: 1, Text: 'Oui', Question: 1},
      {ID: 2, Text: 'Non', Question: 1},
    ],
  });
});

test('get question id wrong', async () => {
  const data = question.getQuestion();
  expect(data).toEqual({
    status: 'KO',
    message: 'Question ID is unknown',
  });
});

test('get all questions', async () => {
  const data = question.getAllQuestions();
  console.log(data);
  expect(data).toEqual([
    {ID: 1, Text: 'Etes vous content ?', Creator: 1},
    {
      ID: 2,
      Text: 'Votre avis sur la congolexicomatisation ?',
      Creator: 3,
    },
  ]);
});
