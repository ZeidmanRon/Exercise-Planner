export async function fetchExercises() {
  const response = await fetch('http://localhost:5000/api/exercises');
  if (!response.ok) {
    throw new Error('Failed to fetch exercises');
  }
  return response.json();
}
