const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

const inputFilePath = '../../../megaGymDataset.csv'; // Change this to your CSV file's path
const outputFilePath = '../../exerciseData.json'; // Change this to the desired JSON output path

const results = [];

fs.createReadStream(inputFilePath)
  .pipe(csvParser())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFile(
      outputFilePath,
      JSON.stringify(results, null, 2),
      (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
        } else {
          console.log('CSV to JSON conversion successful.');
        }
      }
    );
  });
