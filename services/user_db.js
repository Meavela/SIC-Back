const database = require('../services/db');
const db = database.getDatabase();

/**
 * Get all the avaiulable users
 * @return {json} All the users
 */
module.exports.getAllUsers = () => {
  try {
    const stmt = db.prepare(`SELECT * FROM Users`);
    const res = stmt.all();
    // console.log(res);
    return res;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};

/**
 * Get a user for a specifique id
 * @param {int} userID
 * @return {json} All info linked to that userid
 */
module.exports.getUserForID = (userID) => {
  try {
    const stmt = db.prepare(`SELECT * FROM Users WHERE ID = ${userID}`);
    const res = stmt.get();
    // console.log(res);
    return res;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};

/**
 * Get a user for a specifique id
 * @param {string} username
 * @return {json} All info linked to that username
 */
module.exports.getUserWithUsername = (username) => {
  try {
    const stmt = db.prepare(`SELECT * FROM Users WHERE Username = '${username}'`);
    const res = stmt.get();
    // console.log(res);
    return res;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};
