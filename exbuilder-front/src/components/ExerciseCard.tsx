import React, { useState } from 'react';
import { Exercise } from '../models/Exercise';
import './ExerciseCard.css';

interface ExerciseCardProps {
  exercise: Exercise;
  enableDelete?: boolean; // Optional flag to enable delete button
  onDelete?: (id: string) => void; // Optional callback for delete action
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, enableDelete, onDelete }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(exercise.id);
    }
  };

  return (
    <div className={`exercise-card ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className={`exercise-title ${isDarkMode ? 'dark-text' : ''}`}>{exercise.Title}</h2>
      <div className={`exercise-details ${isDarkMode ? 'dark-text' : ''}`}>
        <p><strong>Type:</strong> {exercise.Type}</p>
        <p><strong>Body Part:</strong> {exercise.BodyPart}</p>
        <p><strong>Equipment:</strong> {exercise.Equipment}</p>
        <p><strong>Level:</strong> {exercise.Level}</p>
      </div>
      <button className={`dark-mode-button m-5`} onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {enableDelete && (
        <button className={`delete-button border border-black `} onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

export default ExerciseCard;
