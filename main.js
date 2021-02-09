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
const {getUsers} = require('./routes/users');
const {getQuestionsForID, getAllQuestions} = require('./services/question_db');

app.get('/users/', async (req, res) => {
  try {
    res.send(await getUsers());
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.get('/poll/:pollId', async (req, res) => {
  try {
    res.send(getQuestionsForID(req.params.pollId));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    res.send(getQuestionsForID(req.params.pollId));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

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

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  // handleConnection();
});
