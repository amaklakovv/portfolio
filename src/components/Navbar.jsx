import React from 'react';
import './Navbar.css';
import { useHighlightEffect } from '../hooks/useHighlightEffect';

function Navbar() {
  const eventHandlers = useHighlightEffect();

  return (
    <nav className="navbar" {...eventHandlers}>
      <div className="navbar-logo">
        <a href="#home">
          <span className="full-name">Andrew Maklakov</span>
          <span className="short-name">AM</span>
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
