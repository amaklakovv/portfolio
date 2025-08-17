import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

function SkillCategory({ title, skills }) {
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.3 });

  return (
    <div className="skills-category">
      <h4>{title}</h4>
      <ul ref={ref} className={`skills-list ${isOnScreen ? 'is-visible' : ''}`}>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
}

export default SkillCategory;
