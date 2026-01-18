import React from 'react';
import GlassCard from './GlassCard';
import { BsBriefcaseFill } from 'react-icons/bs';
import { useOnScreen } from '../hooks/useOnScreen';
import './WorkExperience.css';

const experienceData = [
  {
    title: "Engineer Intern",
    company: "Upstock",
    companyUrl: "https://www.upstock.app/",
    date: "Nov 2025 - Present",
    description: "Description TBC",
    tags: ["React", "TypeScript", "C# + .NET", "Docker", "SQL", "Git", "Agile"]
  }
];

function Experience() {
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

  return (
    <section id="experience" className="fullscreen-section">
      <div className="section-wrapper">
        <h2><BsBriefcaseFill /> Experience</h2>
        <div ref={ref} className={`experience-container ${isOnScreen ? 'is-visible' : ''}`}>
          {experienceData.map((job, index) => (
            <GlassCard key={index} hoverIntensity={2} style={{ '--stagger-index': index + 1 }}>
              <div className="experience-card">
                <div className="experience-header">
                  <h3>{job.title}</h3>
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-name"
                  >
                    {job.company}
                  </a>
                </div>
                <p className="experience-date">{job.date}</p>
                <p className="experience-description">{job.description}</p>
                <ul className="skills-list is-visible">
                  {job.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
