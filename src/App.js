import React from 'react';
import './nav.css';
import './home.css';
import './founders.css';
import './plants.css';
import './partners.css';
import './feedback.css';
import './footer.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import Founders from './founders';
import Plants from './plants';
import Partners from './partners';
import Feedback from './feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
