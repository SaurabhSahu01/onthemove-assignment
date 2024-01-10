import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import WorkoutDay from './components/WorkoutDay';
import { useState } from 'react';
import FitnessPage from './pages/Fitness';

function App() {
  return (
    <div className="App flex flex-col justify-start items-center">
      <FitnessPage/>
    </div>
  );
}

export default App;
