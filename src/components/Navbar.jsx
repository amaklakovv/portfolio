import React, { useRef } from 'react';
import './Navbar.css';
import { useHighlightEffect } from '../hooks/useHighlightEffect';

function Navbar() {
  const navRef = useRef(null);
  useHighlightEffect(navRef, { enabled: true });

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-logo">
        <a href="#home" data-analytics-label="Nav Home" data-analytics-category="navigation">
          <span className="full-name">Andrew Maklakov</span>
          <span className="short-name">AM</span>
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#about" data-analytics-label="Nav About" data-analytics-category="navigation">About</a></li>
        <li><a href="#experience" data-analytics-label="Nav Experience" data-analytics-category="navigation">Experience</a></li>
        <li><a href="#projects" data-analytics-label="Nav Projects" data-analytics-category="navigation">Projects</a></li>
        <li><a href="#contact" data-analytics-label="Nav Contact" data-analytics-category="navigation">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
