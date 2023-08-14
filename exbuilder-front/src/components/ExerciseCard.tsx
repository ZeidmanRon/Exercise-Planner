import React from 'react';
import { Exercise } from '../models/Exercise';
import './ExerciseCard.css'; // Import the CSS file for styling

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <div className="exercise-card">
      <h2 className="exercise-title">{exercise.Title}</h2>
      <div className="exercise-details">
        <p><strong>Type:</strong> {exercise.Type}</p>
        <p><strong>Body Part:</strong> {exercise.BodyPart}</p>
        <p><strong>Equipment:</strong> {exercise.Equipment}</p>
        <p><strong>Level:</strong> {exercise.Level}</p>
      </div>
    </div>
  );
};

export default ExerciseCard;
