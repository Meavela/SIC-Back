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

// IMPORTS
const {getQuestionForID, getAllQuestions} = require('./services/question_db');
const {loginAdmin, login} = require('./services/login');

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

app.get('/users/', async (req, res) => {
  try {
    res.send(await getUsers());
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.get('/question/:pollId', async (req, res) => {
  try {
    res.send(getQuestionForID(req.params.pollId));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.get('/question/all', async (req, res) => {
  try {
    res.send(getAllQuestions());
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post('/question/:pollId/vote/add', async (req, res) => {
  try {
    res.send(getQuestionForID(req.params.pollId));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post('/question/:pollId/vote/remove', async (req, res) => {
  try {
    res.send(getQuestionForID(req.params.pollId));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

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

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  // handleConnection();
});
