const userDB = require('../services/user_db');

module.exports.getuserbyusername = (username) => {
  return userDB.getUserWithUsername(username);
};
