import './App.css';
import FitnessPage from './pages/Fitness';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Habits from './pages/Habits';
import Settings from './pages/Settings';
import { Routes, Route } from 'react-router-dom';
import NavigationContext from './context/navigationContext';
import APIState from './context/APIContext';

function App() {
  return (
    <APIState>
      <NavigationContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fitness" element={<FitnessPage />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </NavigationContext>
    </APIState>
  );
}

export default App;
