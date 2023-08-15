const fs = require("fs");
const path = require("path");

const dbFilePath = path.join(__dirname, "exerciseData.json");

function getExercises() {
  const data = fs.readFileSync(dbFilePath, "utf8");
  return JSON.parse(data);
}

const addExercise = (exercise) => {
  const exercises = getExercises();
  exercises.push(exercise);
  saveExercises(exercises);

  return exercise; // Return the added exercise
};

const saveExercises = (exercises) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(exercises, null, 2));
};

const deleteExercise = (exerciseId) => {
  const exercises = getExercises();
  const updatedExercises = exercises.filter(
    (exercise) => exercise.id !== exerciseId
  );
  saveExercises(updatedExercises);
};

module.exports = {
  getExercises,
  addExercise,
  deleteExercise,
};
