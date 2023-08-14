import React from "react";
import { Exercise } from "../models/Exercise";

interface ExerciseCardProps {
  exercise: Exercise;
}
const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <div className="exercise-card">
      <h2>{exercise.Title}</h2>
      <p>
        {exercise.Type}, {exercise.BodyPart}, {exercise.Equipment},{" "}
        {exercise.Level}
      </p>


    </div>
  );
};

export default ExerciseCard;
