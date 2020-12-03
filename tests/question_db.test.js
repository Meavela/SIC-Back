const questionDB = require('../services/question_db');

test('Get All Questions', () => {
  expect(questionDB.getAllQuestions()).toBe('getting all questions');
});

test('Get Question for ID', () => {
  expect(questionDB.getQuestionsForID(5)).toBe('getting question for id 5');
});