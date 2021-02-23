const express = require('express');
const cors = require('cors');

// EXPRESS SETUP
const app = express();
const port = 3005;
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(cors());
const expressSwagger = require('express-swagger-generator')(app);

// IMPORTS
const {getQuestion, getAllQuestions} = require('./services/question');
const {loginAdmin, login} = require('./services/login');
const {getAllUsers, getUserForID, addUser} = require('./services/user_db');
const {addVote, getVotes} = require('./services/vote');
const { getuserbyusername } = require('./services/user');

/**
 * get the server status
 * @route GET /
 * @group general
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.get('/', async (req, res) => {
  try {
    res.send({
      status: 'ok',
      date: new Date(),
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * get all the users
 * @route GET /users/
 * @group user
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.get('/users/', async (req, res) => {
  try {
    res.send(getAllUsers());
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * get user based on the id
 * @route GET /user/{id}
 * @group user
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.get('/user/:id', async (req, res) => {
  try {
    res.send(getUserForID(req.params.id));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * get user based on the id
 * @route GET /user/{id}
 * @group user
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
 app.get('/user/:id/username', async (req, res) => {
  try {
    res.send(getuserbyusername(req.params.id));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * get question for an id
 * @route GET /question/{pollId}
 * @property {integer} pollId
 * @group question
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.get('/question/:pollId', async (req, res) => {
  try {
    res.send(getQuestion(req.params.pollId));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * get all questions
 * @route GET /question/all
 * @group question
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.get('/questions/all', async (req, res) => {
  try {
    res.send(getAllQuestions());
    // res.send('good');
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.get('/question/:pollId/vote', async (req, res) => {
  try {
    res.send(getVotes(req.params.pollId));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * Add a Vote
 * @route POST /question/{pollId}/vote/remove
 * @property {integer} pollId
 * @group vote
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.post('/question/vote/add', async (req, res) => {
  try {
    res.send(addVote(req.body.id, req.body.username));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post('/users/add/', async(req,res) => {
  try {
    res.send(addUser(req.body.username, req.body.password));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * Remove a vote
 * @route DELETE /question/{pollId}/vote/remove
 * @property {integer} pollId
 * @group vote
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.delete('/question/:pollId/vote/remove', async (req, res) => {
  try {
    res.send(getQuestionForID(req.params.pollId, req.params.username));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * Standard Login
 * @route POST /login/
 * @group user
 * @param {string} username.query.required - username eg: admin
 * @param {string} password.query.required - password eg: 123456
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.post('/login/', async (req, res) => {
  try {
    console.log(req.body);
    const l = login(req.body.username, req.body.password);
    res.send(l);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * Login Admin
 * @route POST /login/admin
 * @group admin
 * @param {string} username.query.required - username eg: admin
 * @param {string} password.query.required - password eg: 123456
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.post('/login/admin', async (req, res) => {
  try {
    console.log(req.body);
    const l = loginAdmin(req.body.username, req.login.password);
    res.send(l);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

const options = {
  swaggerDefinition: {
    info: {
      description: 'SIC-Back api',
      title: 'Swagger',
      version: '1.0.0',
    },
    host: 'localhost:3005',
    basePath: '/',
    produces: [
      'application/json',
    ],
    schemes: ['http', 'https'],
  },
  basedir: __dirname, // app absolute path
  files: ['main.js'], // Path to the API handle folder
};
expressSwagger(options);
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  // handleConnection();
});
