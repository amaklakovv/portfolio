import React, { useState, useLayoutEffect, useRef } from 'react';
import GlassCard from './GlassCard';
import { useOnScreen } from '../hooks/useOnScreen';
import { BsCodeSlash, BsTools, BsGearFill, BsPeopleFill } from 'react-icons/bs';
import { trackButtonClick } from '../analytics';

const skillsConfig = [
  {
    name: "Languages",
    icon: <BsCodeSlash className="skill-tab-icon" />,
    skills: ["Java", "C#", "C/C++", "Python", "JavaScript", "TypeScript", "PHP", "SQL", "Linux"]
  },
  {
    name: "Tools & Tech",
    icon: <BsTools className="skill-tab-icon" />,
    skills: ["AWS (EC2, S3, Lambda)", "Git (Branching, PRs, CI/CD)", "Docker", "Unreal Engine 5", "MySQL", "APIs", "WebSockets"]
  },
  {
    name: "Frameworks & Methodologies",
    icon: <BsGearFill className="skill-tab-icon" />,
    skills: ["Agile Development", "Testing (JUnit, Integration, E2E)", ".NET", "Node.js/Express", "React", "Full-Stack Development", "UX Design/Testing", "Machine Learning", "AI"]
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
  const contentContainerRef = useRef(null); // The element that will be animated
  const contentWrapperRef = useRef(null);   // The element whose height we measure

  const activeSkills = skillsConfig.find(cat => cat.name === activeCategory)?.skills || [];

  // Smoothly animates the height of the container when the content changes
  useLayoutEffect(() => {
    const containerEl = contentContainerRef.current;
    const wrapperEl = contentWrapperRef.current;
    if (containerEl && wrapperEl) {
      // Set container height to the measured height of the inner wrapper, the inner wrapper always has the correct auto height of its content
      containerEl.style.height = `${wrapperEl.clientHeight}px`;
    }
    // Rerun this effect whenever the active skills change
  }, [activeSkills]);

  return (
    <GlassCard className="skills-main-card" hoverIntensity={2}>
      <h3>Skills</h3>
      <div className="skills-tabs-container">
        <div className="skills-tabs-buttons">
          {skillsConfig.map(category => (
            <button
              key={category.name}
              className={`skill-tab-button ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category.name);
                trackButtonClick(`Skills tab: ${category.name}`);
              }}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        <div ref={contentContainerRef} className="skills-list-content">
          <div ref={contentWrapperRef}>
            <SkillsList key={activeCategory} skills={activeSkills} />
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default SkillsTabs;