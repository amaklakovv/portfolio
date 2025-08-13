import React, { useState, useRef } from 'react';
import './GlassCard.css';

/**
 * A reusable component that applies a "glassmorphism" effect.
 * It accepts children, so you can put any content inside it.
 * It also has a 3D tilt effect on hover.
 * @param {{children: React.ReactNode}} props
 */
function GlassCard({ children }) {
  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  );
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate rotation based on cursor position. Max rotation is 10 degrees.
    const rotateX = -((y - height / 2) / (height / 2)) * 10;
    const rotateY = ((x - width / 2) / (width / 2)) * 10;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div className="glass-card" ref={cardRef} style={{ transform }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}

export default GlassCard;
