// exercises-frontend/src/components/ExerciseForm.tsx

import React, { useState } from "react";
import { Exercise } from "../models/Exercise";
import { addExercise } from "../api/ExerciseApi";
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4

const ExerciseForm: React.FC = () => {
  const [exercise, setExercise] = useState<Exercise>({
    id: uuidv4(),
    Title: "",
    Desc: "",
    Type: "",
    BodyPart: [""],
    Equipment: [""],
    Level: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExercise((prevExercise) => ({
      ...prevExercise,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await addExercise(exercise);

      // Reset form inputs
      setExercise({
        id: uuidv4(),
        Title: "",
        Desc: "",
        Type: "",
        BodyPart: [""],
        Equipment: [""],
        Level: "",
      });
    } catch (error) {
      console.error("Error adding exercise:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Title">שם:</label>
        <input
          type="text"
          id="Title"
          name="Title"
          value={exercise.Title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="Desc">פירוט:</label>
        <input
          type="text"
          id="Desc"
          name="Desc"
          value={exercise.Desc}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="Type">סוג:</label>
        <input
          type="text"
          id="Type"
          name="Type"
          value={exercise.Type}
          onChange={handleInputChange}
          required
        />
      </div>
      {/* Repeat similar input fields for BodyPart, Equipment, Level, etc. */}
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;
