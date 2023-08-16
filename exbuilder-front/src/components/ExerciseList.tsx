import React, { useEffect, useState } from "react";
import { Exercise } from "../models/Exercise";
import { fetchExercises, deleteExercise } from "../api/ExerciseApi";
import ExerciseCard from "./ExerciseCard";

function ExerciseList() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    fetchExercises()
      .then((data) => setExercises(data))
      .catch((error) => console.error("Error fetching exercises:", error));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteExercise(id);
      // Update exercise list after successful deletion
      setExercises((prevExercises) =>
        prevExercises.filter((exercise) => exercise.id !== id)
      );
    } catch (error) {
      console.error("Error deleting exercise:", error);
    }
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="table-auto w-full text-sm text-gray-500 dark:text-gray-400  text-center">
        <caption className="">my table Caption</caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              שם התרגיל
            </th>
            <th scope="col" className="px-6 py-3">
              פירוט
            </th>
            <th scope="col" className="px-6 py-3">
              קבוצות שריר
            </th>
            <th scope="col" className="px-6 py-3">
              ציוד
            </th>
            <th scope="col" className="px-6 py-3">
              רמת קושי
            </th>
            <th scope="col" className="px-6 py-3">
              סוג
            </th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              enableDelete={true}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExerciseList;
