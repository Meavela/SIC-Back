const votesDB = require('../services/vote_db');

module.exports.addVote = (OptionID, username) => {
  console.log(OptionID, username)
  return votesDB.addVote(OptionID, username);
};

module.exports.removeVote = (OptionID, username) => {
  return votesDB.removeVote(OptionID, username)
};

module.exports.getVotes = (OptionID) => {
  let res = votesDB.getVoteForOption(OptionID)
  return res;
};
