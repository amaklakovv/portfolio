import React from 'react';
import GlassCard from './GlassCard';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="fullscreen-section">
      <div className="section-wrapper">
        <h2><FaPaperPlane /> Get In Touch</h2>
        <GlassCard hoverIntensity={3}>
          <div className="contact-content">
            <p>
              I'm always open to discussing new opportunities, projects, or ideas. Feel free to reach out to me!
            </p>
            <div className="contact-links-container">
              <a href="https://www.linkedin.com/in/andrewmaklakov/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <FaLinkedin className="contact-icon" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/amaklakovv" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <FaGithub className="contact-icon" />
                <span>GitHub</span>
              </a>
              <a href="mailto:andy.maklakov@gmail.com" className="contact-link-item">
                <FaEnvelope className="contact-icon" />
                <span>andy.maklakov@gmail.com</span>
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default Contact;
