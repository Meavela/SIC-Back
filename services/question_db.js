const database = require('../services/db');
const db = database.getDatabase();

/**
 * Get all the available questions
 * @return {json} All thes question
 */
module.exports.getAllQuestions = () => {
  try {
    const stmt = db.prepare(`SELECT * FROM Questions`);
    const res = stmt.all();
    // console.log(res);
    return res;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};

/**
 * Get the question linked to an id
 * @param {int} questionID
 * @return {json} All the info linked to that question
 */
module.exports.getQuestionForID = (questionID) => {
  try {
    const stmt = db.prepare(`SELECT * FROM Questions WHERE ID = ${questionID}`);
    const res = stmt.get();
    // console.log(res);
    return res;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};
