import './App.css';
import FitnessPage from './pages/Fitness';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Habits from './pages/Habits';
import Settings from './pages/Settings';
import { Routes, Route } from 'react-router-dom';
import NavigationContext from './context/NavigationContext';
import Movements from './components/Movements';
import APIState from './context/APIContext';
import MovementState from './context/MovementsContext';
import MovementDetailState from './context/MovementDetailContext';

function App() {
  return (
    <APIState>
      <NavigationContext>
        <MovementState>
          <MovementDetailState>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='fitness'>
                <Route index element={<FitnessPage />} />
                <Route path="movements" element={<Movements />} />
              </Route>
              <Route path="/meals" element={<Meals />} />
              <Route path="/habits" element={<Habits />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </MovementDetailState>
        </MovementState>
      </NavigationContext>
    </APIState >
  );
}

export default App;
