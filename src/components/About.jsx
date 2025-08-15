import React from 'react';
import GlassCard from './GlassCard';

const languages = [
  'Java', 'C/C++', 'Python', 'HTML/CSS', 'JavaScript'
];

const toolsAndTech = [
  'AWS', 'Git', 'Docker', 'Unreal Engine 5', 'MySQL'
];

const methodologiesAndFrameworks = [
  'Agile Development', 'Testing (JUnit)', 'Node.js/React', 'UX Design', 'AI', 'Machine Learning'
];

const softSkills = [
  'Leadership', 'Teamwork', 'Problem Solving', 'Communication', 'Project Management', 'Public Speaking'
];

const personalInterests = [
  'Weightlifting & Fitness',
  'Competitive Swimming',
  'Exploring Tech Innovations',
  'Building Side Projects'
];

function About() {
  return (
    <section id="about" className="fullscreen-section">
      <div className="section-wrapper">
        <h2>About Me</h2>

        {/* Consolidated Skills Card */}
        <GlassCard hoverIntensity={2} className="skills-main-card">
          <h3>Skills</h3>
          <div className="skills-grid-2x2">
            <div className="skills-category">
              <h4>Languages</h4>
              <ul className="skills-list">
                {languages.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div className="skills-category">
              <h4>Tools & Technologies</h4>
              <ul className="skills-list">
                {toolsAndTech.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div className="skills-category">
              <h4>Methodologies & Frameworks</h4>
              <ul className="skills-list">
                {methodologiesAndFrameworks.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div className="skills-category">
              <h4>Soft Skills</h4>
              <ul className="skills-list">
                {softSkills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </div>
        </GlassCard>

        {/* Container for Education and Personal Interests */}
        <div className="about-cards-container">
          <GlassCard hoverIntensity={2}>
            <h3>Education</h3>
            <div className="education-entry">
              <h4>Bachelor of Engineering (Honours) - Software Major</h4>
              <p>Victoria University of Wellington, 2023 - 2026</p>
              <p>Specialising in Artificial Intelligence</p>
            </div>
          </GlassCard>
          <GlassCard hoverIntensity={2}>
            <h3>Personal Interests</h3>
            <ul className="skills-list">
              {personalInterests.map(interest => <li key={interest}>{interest}</li>)}
            </ul>
          </GlassCard>
        </div>

        {/* Summary Card */}
        <GlassCard hoverIntensity={3}>
          <h3>Summary</h3>
          <p>
            Currently in the third-year of a Bachelor of Engineering, majoring in Software Engineering with an AI specialisation. Solid
            foundation in coding and problem-solving skills built through hands-on experience. Leadership and teamwork
            demonstrated through academic projects and extracurricular activities. Looking to apply both technical knowledge and
            interpersonal skills to gain valuable industry experience before graduation.
          </p>
          <p>
            I've always had a hands-on approach to problem-solving, which all started with a simple coding project nearly a decade ago. That first experience kicked off my journey of learning and discovery in the tech world.
          </p>
          <p>
            I enjoy the opportunity to dive into in both team and solo projects, always working toward practical and impactful results. I enjoy collaborating with others, asking thought-provoking questions, and creating innovative solutions that fill gaps and add real value, making me motivated and resourceful.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}

export default About;