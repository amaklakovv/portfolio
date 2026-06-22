import React from 'react';
import GlassCard from './GlassCard';
import './Projects.css';
import { projects } from '../data/projectsData';
import { BsFolderFill } from 'react-icons/bs';
import { useOnScreen } from '../hooks/useOnScreen';

function Projects() {
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

  return (
    <section id="projects" className="fullscreen-section">
      <div className="section-wrapper">
        <h2><BsFolderFill />My Projects</h2>
        <div ref={ref} className={`projects-container ${isOnScreen ? 'is-visible' : ''}`}>
          {projects.map((project, index) => (
            <GlassCard key={project.title} hoverIntensity={2} style={{ '--stagger-index': index + 1 }}>
              <div className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <div className="project-links">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-label={`${project.title} Demo`}
                      data-analytics-category="link"
                    >
                      Demo
                    </a>
                  ) : (
                    <span className="project-link-disabled">Demo Coming Soon</span>
                  )}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-label={`${project.title} GitHub`}
                      data-analytics-category="link"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="project-link-disabled">Repo Private</span>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;