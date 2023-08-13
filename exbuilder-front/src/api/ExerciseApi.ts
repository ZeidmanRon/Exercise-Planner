export async function fetchExercises() {
  const response = await fetch('/api/exercises');
  if (!response.ok) {
    throw new Error('Failed to fetch exercises');
  }
  return response.json();
}
