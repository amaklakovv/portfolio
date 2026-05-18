import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <p>&copy; Andrew Maklakov. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/amaklakovv" target="_blank" rel="noopener noreferrer" data-analytics-label="Footer GitHub" data-analytics-category="link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/andrewmaklakov/" target="_blank" rel="noopener noreferrer" data-analytics-label="Footer LinkedIn" data-analytics-category="link">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;