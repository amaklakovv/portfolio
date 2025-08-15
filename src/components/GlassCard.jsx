import React, { useState, useRef } from 'react';
import './GlassCard.css';

/**
 * A reusable component that applies a "glassmorphism" effect.
 * It accepts children, so you can put any content inside it.
 * It also has a 3D tilt effect on hover.
 * @param {{children: React.ReactNode, disableHoverEffect?: boolean, hoverIntensity?: number}} props
 */
function GlassCard({ children, disableHoverEffect = false, hoverIntensity = 10 }) {
    const [transform, setTransform] = useState(
        'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    );
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (disableHoverEffect) return;
        const card = cardRef.current;
        if (!card) return;

        const { width, height, left, top } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        // Calculate rotation based on cursor position.
        const rotateX = -((y - height / 2) / (height / 2)) * hoverIntensity;
        const rotateY = ((x - width / 2) / (width / 2)) * hoverIntensity;

        setTransform(
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        );
    };

    const handleMouseLeave = () => {
        if (disableHoverEffect) return;
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    };

    const eventHandlers = disableHoverEffect
        ? {}
        : { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };

    const style = disableHoverEffect ? {} : { transform };

    return (
        <div className="glass-card" ref={cardRef} style={style} {...eventHandlers}>
            {children}
        </div>
    );
}

export default GlassCard;
