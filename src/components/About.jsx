import React from 'react';
import GlassCard from './GlassCard';
import SkillsTabs from './SkillsTabs'; // Import the new SkillsTabs component
import { BsPersonFill } from 'react-icons/bs';
import { useOnScreen } from '../hooks/useOnScreen';

const personalInterests = [
  'Fitness & Weightlifting',
  'Competitive Swimming',
  'Exploring New Tech',
  'Building Side Projects',
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
              <p>Victoria University of Wellington, 2023 - 2026</p>
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

        {/* Summary Card */}
        <GlassCard hoverIntensity={3} className="summary-card">
          <h3>Summary</h3>
          <p>
            Currently looking for tech-related work experience or an internship for Summer 2025, looking to apply both technical knowledge and interpersonal skills to gain valuable industry experience.
          </p>
          <p>
            I've always had a hands-on approach to problem-solving, which all started with a simple coding project nearly a decade ago. 
            That first experience kicked off my journey of learning and discovery in the tech world.
          </p>

          <p>
            I enjoy the opportunity to dive into in both team and solo projects, always working toward practical and impactful results. 
            I enjoy collaborating with others, asking thought-provoking questions, and creating innovative solutions that fill gaps and add real value, 
            making me motivated and resourceful.
          </p>

          <p>
            I always take on a challenge, focusing on finding real, effective solutions. I use tools, mentors, and peer collaboration to stay productive and knowledgeable. 
            Growing my skill set through this is something I plan to keep doing.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}

export default About;