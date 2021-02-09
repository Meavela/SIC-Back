const users = require('../services/user_db');

/**
 * Login as an admin
 * @param {string} username
 * @param {string} password
 * @return {json} status
 */
module.exports.loginAdmin = (username, password) => {
  try {
    if (username === 'admin') {
      if (password === '123456') {
        return {status: 'OK', message: 'OK'};
      } else {
        return {status: 'KO', message: 'Passsword is wrong'};
      }
    } else {
      return {status: 'KO', message: 'User is unkown'};
    }
  } catch (err) {
    return console.error(err.message);
  }
};

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
        return {status: 'OK', message: 'OK'};
      } else {
        return {status: 'KO', message: 'Passsword is wrong'};
      }
    } else {
      return {status: 'KO', message: 'User is unkown'};
    }
  } catch (err) {
    return console.error(err.message);
  }
};
