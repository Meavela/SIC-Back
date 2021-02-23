const questionDB = require('../services/question_db');
const optionDB = require('../services/options_db');

module.exports.getQuestion = (QuestionID) => {
  try {
    if (QuestionID !== null && QuestionID !== undefined) {
      const question = questionDB.getQuestionForID_db(QuestionID);
      const option = optionDB.getOptionsForID_db(QuestionID);
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
    console.error(err.message);
    return err.message;
  }
};

module.exports.getAllQuestions = () => {
  try {
    return questionDB.getAllQuestions_db();
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};
