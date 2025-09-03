import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { useOnScreen } from '../hooks/useOnScreen';
import { BsCodeSlash, BsTools, BsGearFill, BsPeopleFill } from 'react-icons/bs';

const skillsConfig = [
  {
    name: "Languages",
    icon: <BsCodeSlash className="skill-tab-icon" />,
    skills: ["Java", "C/C++", "Python", "JavaScript", "HTML/CSS", "PHP"]
  },
  {
    name: "Tools & Tech",
    icon: <BsTools className="skill-tab-icon" />,
    skills: ["AWS (EC2, S3, Lambda)", "Git (Branching PRs, CI/CD)", "Docker", "Unreal Engine 5", "MySQL", "APIs", "WebSockets"]
  },
  {
    name: "Frameworks & Methodologies",
    icon: <BsGearFill className="skill-tab-icon" />,
    skills: ["Agile Development", "Testing (JUnit, Integration, E2E)", "Node.js/Express", "React", "Full-Stack Development", "UX Design/Testing", "Machine Learning", "AI"]
  },
  {
    name: "Soft Skills",
    icon: <BsPeopleFill className="skill-tab-icon" />,
    skills: ["Leadership", "Teamwork", "Problem Solving", "Communication", "Project Management", "E2E Feature Development", "Collaborative Codebase Contributions", "Public Speaking"]
  }
];

// A dedicated component for the list to handle its own animation state
const SkillsList = ({ skills }) => {
    const [listRef, isVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <ul ref={listRef} className={`skills-list ${isVisible ? "is-visible" : ""}`}>
            {skills.map((skill, index) => (
                <li key={skill} style={{ "--stagger-index": index }}>
                    {skill}
                </li>
            ))}
        </ul>
    );
};

export const SkillsTabs = () => {
  const [activeCategory, setActiveCategory] = useState(skillsConfig[0].name);

  const activeSkills = skillsConfig.find(cat => cat.name === activeCategory)?.skills || [];

  return (
    <GlassCard className="skills-main-card" hoverIntensity={2}>
      <h3>Skills</h3>
      <div className="skills-tabs-container">
        <div className="skills-tabs-buttons">
          {skillsConfig.map(category => (
            <button
              key={category.name}
              className={`skill-tab-button ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        <div className="skills-list-content">
            {/*
              Tells React to create a new instance of SkillsList whenever the activeCategory changes.
            */}
            <SkillsList key={activeCategory} skills={activeSkills} />
        </div>
      </div>
    </GlassCard>
  );
};

export default SkillsTabs;