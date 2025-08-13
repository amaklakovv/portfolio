import React from 'react';
import './GlassCard.css';

/**
 * A reusable component that applies a "glassmorphism" effect.
 * It accepts children, so you can put any content inside it.
 * @param {{children: React.ReactNode}} props
 */
function GlassCard({ children }) {
  return <div className="glass-card">{children}</div>;
}

export default GlassCard;

