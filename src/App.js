import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  return (
    <div className="App flex flex-col justify-center items-center">
      <Navbar currentPageIndex={currentPageIndex} setCurrentpageIndex={setCurrentPageIndex}/>
    </div>
  );
}

export default App;
