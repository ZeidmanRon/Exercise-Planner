import React, { useState } from "react";
import { Exercise } from "../models/Exercise";
import "./ExerciseCard.css";

interface ExerciseCardProps {
  exercise: Exercise;
  enableDelete?: boolean; // Optional flag to enable delete button
  onDelete?: (id: string) => void; // Optional callback for delete action
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  enableDelete,
  onDelete,
}) => {
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
    <tr className={`${isDarkMode ? "dark-mode" : ""}`}>
      <th scope="row" className="px-6 py-4 font-medium">
        {exercise.Title}
      </th>
      <td className="px-6 py-4 w-3/5 lg:w-1/2 min-w-[300px]">
        <div className="px-5 max-h-20 overflow-y-auto">{exercise.Desc}</div>
      </td>
      <td className="px-6 py-4">
        {`${exercise.BodyPart.map((bodyPart) => ` ${bodyPart}`)}`}
      </td>
      <td className="px-6 py-4">
        {`${exercise.Equipment.map((bodyPart) => ` ${bodyPart}`)}`}
      </td>
      <td className="px-6 py-4 ">{exercise.Level}</td>
      <td className="px-6 py-4 ">{exercise.Type}</td>
    </tr>
    // <div className={`exercise-card ${isDarkMode ? 'dark-mode' : ''}`}>
    //   <h2 className={`exercise-title ${isDarkMode ? 'dark-text' : ''}`}>{exercise.Title}</h2>
    //   <div className={`exercise-details ${isDarkMode ? 'dark-text' : ''}`}>
    //     <p><strong>Type:</strong> {exercise.Type}</p>
    //     <p><strong>Body Part:</strong> {exercise.BodyPart}</p>
    //     <p><strong>Equipment:</strong> {exercise.Equipment}</p>
    //     <p><strong>Level:</strong> {exercise.Level}</p>
    //   </div>
    //   <button className={`dark-mode-button m-5`} onClick={toggleDarkMode}>
    //     {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    //   </button>
    //   {enableDelete && (
    //     <button className={`delete-button border border-black `} onClick={handleDelete}>
    //       Delete
    //     </button>
    //   )}
    // </div>
  );
};

export default ExerciseCard;
