const database = require('../services/db');
const db = database.getDatabase();

/**
 * Get all the options for a question
 * @param {int} questionID
 * @return {json} All the info linked to that question
 */
module.exports.getOptionsForID_db = (questionID) => {
  try {
    const stmt = db.prepare(`SELECT * FROM Options WHERE Question = ${questionID}`);
    const res = stmt.all();
    // console.log(res);
    return res;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};
