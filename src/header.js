import React from 'react';
import { Link } from 'react-router-dom';
import logo from './ecohealth.png';

function Header() {
  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <nav className="navbar">
        <Link to="/founders" className="nav-link">Founders</Link>
        <Link to="/map" className="nav-link">Map</Link>
        <Link to="/plants" className="nav-link">Plants</Link>
        <Link to="/events" className="nav-link">Events</Link>
        <Link to="/feedback" className="nav-link">Feedback</Link>
        <Link to="/engagement" className="nav-link">Engagement</Link>
        <Link to="/partners" className="nav-link">Partners</Link>
      </nav>
    </header>
  );
}

export default Header;
