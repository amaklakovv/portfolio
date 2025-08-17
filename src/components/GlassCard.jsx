import React from 'react';
import './GlassCard.css';

/**
 * A reusable component that applies a "glassmorphism" effect.
 * It accepts children, so you can put any content inside it.
 * It also has a 3D tilt effect on hover.
 * @param {{children: React.ReactNode, className?: string, hoverIntensity?: number}} props
 */
function GlassCard({ children, className = '', hoverIntensity = 10 }) {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const { width, height, left, top } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const rotateX = -((y - height / 2) / (height / 2)) * hoverIntensity;
        const rotateY = ((x - width / 2) / (width / 2)) * hoverIntensity;

        card.style.setProperty('--rotateX', `${rotateX}deg`);
        card.style.setProperty('--rotateY', `${rotateY}deg`);
    };

    const handleMouseLeave = (e) => {
        // Reset the card's rotation when the mouse leaves.
        const card = e.currentTarget;
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
    };

    return (
        <div className={`glass-card ${className}`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    );
}

export default GlassCard;
