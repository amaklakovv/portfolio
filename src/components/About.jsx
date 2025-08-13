import React from 'react';
import GlassCard from './GlassCard';

function About() {
  return (
    <section id="about" className="fullscreen-section">
      <GlassCard disableHoverEffect={true}>
        <h2>About Me</h2>
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
        <p>
          I always take on a challenge, focusing on finding real, effective solutions. I use tools, mentors, and peer collaboration to stay productive and knowledgeable. Growing my skill set through this is something I plan to keep doing.
        </p>
        <p>
          In my downtime, you'll find me at the gym, swimming, or exploring the latest trends in tech.
        </p>
      </GlassCard>
    </section>
  );
}

export default About;