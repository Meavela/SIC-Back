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

module.exports.addUser = (username, password) => {
  try {
    const stmt = db.prepare(`SELECT * FROM Users WHERE Username = '${username}'`);
    const res = stmt.get();
    if (res === undefined) {
      const stmt2 = db.prepare(`INSERT INTO Users (Username, Password) VALUES ('${username}', '${password}')`);
      const res2 = stmt2.run();
      if (res2.changes > 0) {
        return {
          status: 'OK',
          message: 'User aded',
        };
      } else {
        return {
          status: 'KO',
          message: 'Error adding user',
        };
      }
    } else {
      return {
        status: 'KO',
        message: 'Error adding vote Username unknown',
      };
    }
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};
