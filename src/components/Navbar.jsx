import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">AM</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#academics">Academics</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

