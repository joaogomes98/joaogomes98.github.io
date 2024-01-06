import React from 'react';
import { Routes, Route} from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import Matchbox from './Matchbox/Matchbox';
import AnimalCare from './AnimalCare/AnimalCare';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/matchbox" element={<Matchbox />}></Route>
      <Route path="/animalcare" element={<AnimalCare />}></Route>
    </Routes>
  );
}

export default App;
