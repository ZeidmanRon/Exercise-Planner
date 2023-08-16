// exercises-frontend/src/App.tsx

import React from 'react';
import './App.css';
import ExerciseList from './components/ExerciseList';
import ExerciseForm from './components/ExerciseForm';

function App() {
  return (
    <div className="App">
      <main>
        <ExerciseList />
        {/* <ExerciseForm /> */}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Exercise App</p>
      </footer>
    </div>
  );
}

export default App;
