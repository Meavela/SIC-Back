const votesDB = require('../services/vote_db');

module.exports.addVote = (OptionID, username) => {
  votesDB.addVote(1, 1);
  return true;
};

module.exports.removeVote = (OptionID, username) => {
  return true;
};
