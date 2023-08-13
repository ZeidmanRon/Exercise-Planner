// exerciseData.js
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'exerciseData.json');

function readExerciseData() {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
}

module.exports = {
  readExerciseData,
};
