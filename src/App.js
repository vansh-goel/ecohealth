import React from 'react';
import './nav.css';
import './home.css';
import './founders.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import Founders from './founders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founders" element={<Founders />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
