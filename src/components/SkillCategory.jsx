import React from 'react';

function SkillCategory({ title, skills }) {
  return (
    <div className="skills-category">
      <h4>{title}</h4>
      <ul className="skills-list">
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
}

export default SkillCategory;
