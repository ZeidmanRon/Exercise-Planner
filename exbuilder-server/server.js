const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

const { getExercises, addExercise, deleteExercise } = require('./exerciseData');

// Use the cors middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/api/exercises', (req, res) => {
  const exercises = getExercises();
  res.json(exercises);
});

app.post('/api/exercises', (req, res) => {
  const newExercise = req.body;
  try {
    const addedExercise = addExercise(newExercise);
    res.status(201).json(addedExercise);
  } catch (error) {
    console.error('Error adding exercise:', error);
    res.status(500).json({ error: 'Error adding exercise' });
  }
});

app.delete('/api/exercises/:id', (req, res) => {
  const exerciseId = req.params.id;

  try {
    deleteExercise(exerciseId);
    res.sendStatus(204); // Success with no content
  } catch (error) {
    console.error('Error deleting exercise:', error);
    res.status(500).json({ error: 'Error deleting exercise' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});