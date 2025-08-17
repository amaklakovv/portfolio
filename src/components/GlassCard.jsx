import React from 'react';
import './GlassCard.css';
import { use3dEffect } from '../hooks/use3dEffect';

/**
 * A reusable component that applies a "glassmorphism" effect.
 * It accepts children, so you can put any content inside it.
 * It also has a 3D tilt effect on hover.
 * @param {{children: React.ReactNode, className?: string, hoverIntensity?: number}}
 */
function GlassCard({ children, className = '', hoverIntensity = 10 }) {
    const eventHandlers = use3dEffect(hoverIntensity);

    return (
        <div className={`glass-card ${className}`} {...eventHandlers}>
            {children}
        </div>
    );
}

export default GlassCard;
