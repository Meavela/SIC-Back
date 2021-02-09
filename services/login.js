module.exports.loginAdmin = (username, password) => {
  try {
    if (username === 'admin') {
      if (password === '123456') {
        return {status: 'OK', message: 'OK'};
      } else {
        return {status: 'KO', message: 'Passsword is wrong'};
      }
    } else {
      return {status: 'KO', message: 'This user is unkown'};
    }
  } catch (err) {
    return console.error(err.message);
  }
};
