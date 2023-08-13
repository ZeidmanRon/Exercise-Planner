import React, { useEffect, useState } from "react";
import { Exercise } from "../models/Exercise";
import { fetchExercises } from "../api/ExerciseApi";

function ExerciseList() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    fetchExercises()
      .then((data) => setExercises(data))
      .catch((error) => console.error("Error fetching exercises:", error));
  }, []);

  return (
    <div>
      <h1>Exercise List</h1>
      {exercises.map((exercise, index) => (
        <div key={index} className="exercise">
          <h2>{exercise.Title}</h2>
          <p>
            {exercise.Type}, {exercise.BodyPart}, {exercise.Equipment},{" "}
            {exercise.Level}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ExerciseList;
