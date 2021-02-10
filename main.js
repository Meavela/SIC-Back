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
const {getQuestionForID, getAllQuestions} = require('./services/question_db');
const {loginAdmin, login} = require('./services/login');

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
    res.send(await getUsers());
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * get question for an id
 * @route GET /question/{pollId}
 * @group question
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.get('/question/:pollId', async (req, res) => {
  try {
    res.send(getQuestionForID(req.params.pollId));
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
app.get('/question/all', async (req, res) => {
  try {
    res.send(getAllQuestions());
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * Add a Vote
 * @route POST /question/{pollId}/vote/remove
 * @group vote
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.post('/question/:pollId/vote/add', async (req, res) => {
  try {
    res.send(getQuestionForID(req.params.pollId));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

/**
 * Remove a vote
 * @route DELETE /question/{pollId}/vote/remove
 * @group vote
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
app.delete('/question/:pollId/vote/remove', async (req, res) => {
  try {
    res.send(getQuestionForID(req.params.pollId));
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
    const l = login(req.body.username, req.login.password);
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
