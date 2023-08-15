import React, { useEffect, useState } from 'react';
import { Exercise } from '../models/Exercise';
import { fetchExercises, deleteExercise } from '../api/ExerciseApi';
import ExerciseCard from './ExerciseCard';

function ExerciseList() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    fetchExercises()
      .then((data) => setExercises(data))
      .catch((error) => console.error('Error fetching exercises:', error));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteExercise(id);
      // Update exercise list after successful deletion
      setExercises((prevExercises) => prevExercises.filter((exercise) => exercise.id !== id));
    } catch (error) {
      console.error('Error deleting exercise:', error);
    }
  };

  return (
    <div className="exercise-list">
      <h1>Exercise List</h1>
      <div className="exercise-cards">
        {exercises.map((exercise) => (
         <ExerciseCard exercise={exercise} enableDelete onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default ExerciseList;
