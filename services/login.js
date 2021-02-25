const users = require('../services/user_db');

/**
 * Login as a normal user
 * @param {string} username
 * @param {string} password
 * @return {json} status
 */
module.exports.login = (username, password) => {
  try {
    const user = users.getUserWithUsername(username);
    if (user !== undefined && user.Username === username) {
      if (user.Password === password) {
        if (user.IsAdmin === 'false') {
          // if the user is not an admin
          return {status: 'OK', message: 'OK'};
        } else if (user.IsAdmin === 'true') {
          return {status: 'OK', message: 'OK', IsAdmin: 'true'};
        }
      } else {
        return {status: 'KO', message: 'Passsword is wrong'};
      }
    } else {
      return {status: 'KO', message: 'User is unkown'};
    }
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};
