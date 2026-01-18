import React, { useRef } from 'react';
import './Navbar.css';
import { useHighlightEffect } from '../hooks/useHighlightEffect';

function Navbar() {
  const navRef = useRef(null);
  useHighlightEffect(navRef, { enabled: true });

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <span className="full-name">Andrew Maklakov</span>
          <span className="short-name">AM</span>
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
