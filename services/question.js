const questionDB = require('../services/question_db');
const optionDB = require('../services/options_db');

module.exports.getQuestion = (QuestionID) => {
  try {
    if (QuestionID !== null && QuestionID !== undefined) {
      const question = questionDB.getQuestionForID(QuestionID);
      const option = optionDB.getOptionsForID(QuestionID);
      const data = {
        status: 'OK',
        question,
        option,
      };
      return data;
    } else {
      return {
        status: 'KO',
        message: 'Question ID is unknown',
      };
    }
  } catch (err) {
    return console.error(err.message);
  }
};

module.exports.getAllQuestions = () => {
  try {
    return questionDB.getAllQuestions();
  } catch (err) {
    return console.error(err.message);
  }
};
