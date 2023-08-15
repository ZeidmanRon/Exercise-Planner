import { Exercise } from "../models/Exercise";

const API_URL = "http://localhost:5000/api"; // Update with your API URL

export async function fetchExercises() {
  const response = await fetch(`${API_URL}/exercises`);
  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }
  return response.json();
}

export const addExercise = async (exercise: Exercise) => {
  try {
    const response = await fetch(`${API_URL}/exercises`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exercise),
    });

    if (!response.ok) {
      throw new Error("Error adding exercise");
    }

    const addedExercise = await response.json();
    return addedExercise;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteExercise = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/exercises/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error deleting exercise");
    }

    // No need to return data after a successful delete
  } catch (error: any) {
    throw new Error(error.message);
  }
};
