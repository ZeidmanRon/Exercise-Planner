import React, { useEffect, useState } from "react";
import { Exercise } from "../models/Exercise";
import { fetchExercises } from "../api/ExerciseApi";
import ExerciseCard from "./ExerciseCard";

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
         <ExerciseCard exercise={exercise}/>
        </div>
      ))}
    </div>
  );
}

export default ExerciseList;
