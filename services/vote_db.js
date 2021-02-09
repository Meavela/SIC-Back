const database = require('../services/db');
const db = database.getDatabase();

/**
 * Get all votes for Option
 * @param {int} OptionID
 * @return {json} all the votes
 */
module.exports.getVoteForOption = (OptionID) => {
  try {
    const stmt = db.prepare(`SELECT * FROM Votes WHERE Choice = ${OptionID}`);
    const res = stmt.all();
    // console.log(res);
    return res;
  } catch (err) {
    return console.error(err.message);
  }
};
