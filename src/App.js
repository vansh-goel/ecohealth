import React from 'react';
import './nav.css';
import './home.css';
import './founders.css';
import './plants.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import Founders from './founders';
import Plants from './plants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/plants" element={<Plants />} />
      </Routes>
    </Router>
  );
}

export default App;
