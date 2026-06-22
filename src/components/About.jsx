import React from 'react';
import GlassCard from './GlassCard';
import SkillsTabs from './SkillsTabs';
import { BsPersonFill } from 'react-icons/bs';
import { useOnScreen } from '../hooks/useOnScreen';

const personalInterests = [
  'Fitness & Weightlifting',
  'Competitive Swimming',
  'Exploring New Tech',
  'Building Side Projects',
  'Entrepreneurship',
  'Volunteering'
];

function About() {
  const [interestsRef, interestsAreOnScreen] = useOnScreen({ threshold: 0.3 });

  return (
    <section id="about" className="fullscreen-section">
      <div className="section-wrapper">
        <h2><BsPersonFill /> About Me</h2>

        <SkillsTabs />

        {/* Container for Education and Personal Interests */}
        <div className="about-cards-container">
          <GlassCard hoverIntensity={2} className="education-card">
            <h3>Education</h3>
            <div className="education-entry">
              <h4>Bachelor of Engineering (Honours) in Software Engineering</h4>
              <p>Victoria University of Wellington | Graduating Nov. 2026</p>
              <p>Specialising in Artificial Intelligence</p>
            </div>
          </GlassCard>
          <GlassCard hoverIntensity={2}>
            <h3>Personal Interests</h3>
            <ul ref={interestsRef} className={`skills-list ${interestsAreOnScreen ? 'is-visible' : ''}`}>
              {personalInterests.map(interest => <li key={interest}>{interest}</li>)}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default About;