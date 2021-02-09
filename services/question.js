const questionDB = require('../services/question_db');
const optionDB = require('../services/options_db');
const votesDB = require('../services/vote_db');

module.exports.getQuestion = (QuestionID) => {
  try {
    if (QuestionID !== null && QuestionID !== undefined) {
      const question = questionDB.getQuestionForID(QuestionID);
      const option = optionDB.getOptionsForID(QuestionID);
      console.log(option);
      let votes;
      option.forEach((element) => {
        console.log(element.ID);
        const l = votesDB.getVoteForOption(element.ID);
        console.log(l);
        if (l !== []) {
          console.log('not empty');
          votes.push(l);
        }
      });
      console.log(votes);
      const data = {
        status: 'OK',
        question,
        option,
        votes,
      };
      console.log(data);
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
