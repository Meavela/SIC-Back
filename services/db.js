const Database = require('better-sqlite3');

module.exports.getDatabase = () => {
  if (process.env.IN_TEST === null || process.env.IN_TEST === undefined) {
    // we are not in a test
    // console.log('Getting Production database file');
    return new Database('./database/db.sqlite',
    /* { verbose: console.log }*/);
  } else {
    // we are in a test case here
    // console.log('Getting Test database file');
    return new Database('./database/db.test.sqlite',
    /* { verbose: console.log }*/);
  }
};
