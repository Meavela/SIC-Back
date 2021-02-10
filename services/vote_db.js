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
    console.error(err.message);
    return err.message;
  }
};

/**
 * add a vote
 * @param {int} OptionID
 * @param {int} username
 * @return {json} status
 */
module.exports.addVote = (OptionID, username) => {
  try {
    const stmt = db.prepare(`SELECT * FROM Users WHERE Username = '${username}'`);
    const res = stmt.get();
    // console.log(res);
    if (res === undefined) {
      return {
        status: 'KO',
        message: 'Error adding vote Username unknown',
      };
    }
    const stmt2 = db.prepare(`INSERT INTO Votes (Choice, User) VALUES (${OptionID}, ${res.ID})`);
    const res2 = stmt2.run();
    // console.log(res2);
    if (res2.changes > 0) {
      return {
        status: 'OK',
        message: 'Vote counted',
      };
    } else {
      return {
        status: 'KO',
        message: 'Error adding vote',
      };
    }
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};

/**
 * remove a vote
 * @param {int} OptionID
 * @param {int} username
 * @return {json} status
 */
module.exports.removeVote = (OptionID, username) => {
  try {
    const stmt = db.prepare(`SELECT * FROM Users WHERE Username = '${username}'`);
    const res = stmt.get();
    // console.log(res);
    if (res === undefined) {
      return {
        status: 'KO',
        message: 'Error remouving vote Username unknown',
      };
    }
    const stmt3 = db.prepare(`DELETE FROM Votes WHERE User = '${res.ID}' AND Choice = ${OptionID}`);
    const res3 = stmt3.run();
    // console.log(res3);
    if (res3.changes > 0) {
      return {
        status: 'OK',
        message: 'Vote remouved',
      };
    } else {
      return {
        status: 'KO',
        message: 'Error remouving vote',
      };
    }
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};
