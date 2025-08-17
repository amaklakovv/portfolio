import React, { useRef } from 'react';
import './GlassCard.css';
import { use3dEffect } from '../hooks/use3dEffect';
import { useHighlightEffect } from '../hooks/useHighlightEffect';
import { useDeviceOrientationEffect } from '../hooks/useDeviceOrientationEffect';

/**
 * A reusable component that applies a "glassmorphism" effect.
 * It accepts children, so you can put any content inside it.
 * It also has a 3D tilt effect on hover, which can be replaced by
 * a device orientation effect on mobile.
 * @param {{
 *   children: React.ReactNode,
 *   className?: string,
 *   hoverIntensity?: number,
 *   isMotionEnabled?: boolean
 * }} props
 */
function GlassCard({
  children,
  className = '',
  hoverIntensity = 10,
  isMotionEnabled = false,
}) {
  const cardRef = useRef(null);

  // Conditionally enable hover effects only when motion is not active
  use3dEffect(cardRef, { enabled: !isMotionEnabled, hoverIntensity });
  useHighlightEffect(cardRef, { enabled: !isMotionEnabled });
  useDeviceOrientationEffect(cardRef, { enabled: isMotionEnabled });

  return (
    <div ref={cardRef} className={`glass-card ${className}`}>
      {children}
    </div>
  );
}

export default GlassCard;
