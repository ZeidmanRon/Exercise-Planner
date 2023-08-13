// exercises-frontend/src/App.tsx

import React from 'react';
import './App.css';
import ExerciseList from './components/ExerciseList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise App</h1>
      </header>
      <main>
        <ExerciseList />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Exercise App</p>
      </footer>
    </div>
  );
}

export default App;
