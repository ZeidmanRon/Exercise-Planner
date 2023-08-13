const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

const { readExerciseData } = require('./exerciseData');

//Todo: delete in production Use the cors middleware
app.use(cors());

// app.use(bodyParser.json());

app.get('/api/exercises', (req, res) => {
  console.log("chill im here");
  const exercises = readExerciseData();
  res.json(exercises);
});

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
