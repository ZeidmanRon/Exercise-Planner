const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 5000;

const { readExerciseData } = require('./exerciseData');

// Use the cors middleware
app.use(cors());

app.get('/api/exercises', (req, res) => {
  console.log('im here');
  const exercises = readExerciseData();
  res.json(exercises);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});