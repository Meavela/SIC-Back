const database = require('../services/db');
const db = database.getDatabase();

/**
 * Get all the available questions
 */
module.exports.getAllQuestions = () => {
    try {
        const stmt = db.prepare(`SELECT * FROM Questions`);
        const res = stmt.all();
        //console.log(res);
        return res;
    }
    catch (err) {
        return console.error(err.message);
    }
}

/**
 * Get the question linked to an id
 * @param {*} questionID 
 */

module.exports.getQuestionsForID = (questionID) => {
    try {
        const stmt = db.prepare(`SELECT * FROM Questions WHERE ID = ${questionID}`);
        const res = stmt.get();
        //console.log(res);
        return res;
    }
    catch (err) {
        return console.error(err.message);
    }
} 