import React from 'react';
import GlassCard from './GlassCard';
import SkillCategory from './SkillCategory'; // Import the new component

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
  'Fitness & Weightlifting',
  'Competitive Swimming',
  'Exploring New Tech',
  'Building Side Projects',
  'Volunteering'
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
            <SkillCategory title="Languages" skills={languages} />
            <SkillCategory title="Tools & Technologies" skills={toolsAndTech} />
            <SkillCategory title="Methodologies & Frameworks" skills={methodologiesAndFrameworks} />
            <SkillCategory title="Soft Skills" skills={softSkills} />
          </div>
        </GlassCard>

        {/* Container for Education and Personal Interests */}
        <div className="about-cards-container">
          <GlassCard hoverIntensity={2}>
            <h3>Education</h3>
            <div className="education-entry">
              <h4>Bachelor of Engineering (Honours) in Software Engineering</h4>
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
        <GlassCard hoverIntensity={3} className="summary-card">
          <h3>Summary</h3>
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