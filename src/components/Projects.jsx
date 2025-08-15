import React from 'react';
import GlassCard from './GlassCard';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="fullscreen-section">
      <div className="section-wrapper">
        <h2>My Projects</h2>
        <div className="projects-container">
          {/* Project 1 */}
          <GlassCard hoverIntensity={2}>
            <div className="project-card">
              <h3>Exam Scheduler</h3>
              <p>Created a web app to convert Excel exam timetables into a searchable, 
                real-time scheduling tool, used by dozens of students to quickly locate their exams, 
                replacing manual Excel searches with simple interfaces.</p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">JavaScript</span>
                <span className="tag">HTML/CSS</span>
                <span className="tag">Problem Solving</span>
              </div>
              <div className="project-links">
                <a href="https://am-examscheduler.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/amaklakovv/ExamScheduler" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </GlassCard>

          {/* Project 2 */}
          <GlassCard hoverIntensity={2}>
            <div className="project-card">
              <h3>Code Catchers</h3>
              <p>Overseeing Agile sprints and stand-ups, assisting in coordinating a six-person team across design, development, and testing. 
                Developed backend/frontend logic and UI features, contributing to improved game retention metrics.</p>
              <div className="project-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">Project Management</span>
                <span className="tag">Teamwork</span>
                <span className="tag">Agile</span>
                <span className="tag">UX</span>
              </div>
              <div className="project-links">
                <span className="project-link-disabled">Demo Coming Soon</span>
                <span className="project-link-disabled">Repo Private</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default Projects;