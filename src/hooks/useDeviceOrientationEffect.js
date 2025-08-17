import { useEffect, useRef } from 'react';

/**
 * A hook that applies a smooth 3D tilt effect based on device orientation.
 * @param {React.RefObject<HTMLElement>} elementRef
 * @param {{enabled?: boolean, intensity?: number, smoothing?: number}} options
 */
export const useDeviceOrientationEffect = (elementRef, { enabled = false, intensity = 0.5, smoothing = 0.08 }) => {
  const animationFrameId = useRef(null);

  useEffect(() => {
    const card = elementRef.current;
    if (!enabled || !card) {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      if (card) {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
      }
      return;
    }

    let currentRotation = { x: 0, y: 0 };
    let targetRotation = { x: 0, y: 0 };

    const handleOrientation = (event) => {
      const { beta, gamma } = event; // beta: front-to-back, gamma: left-to-right

      if (beta === null || gamma === null) return;

      // Cap the values to prevent excessive rotation
      const cappedBeta = Math.max(-30, Math.min(30, beta));
      const cappedGamma = Math.max(-30, Math.min(30, gamma));

      // Update target rotation (where card wants to be)
      targetRotation.x = cappedBeta * intensity;
      targetRotation.y = cappedGamma * -intensity;
    };

    window.addEventListener('deviceorientation', handleOrientation, false);

    // The animation loop that smoothly interpolates from the current to the target rotation.
    const animate = () => {
      // Linear interpolation (lerp) for a smooth, spring-like effect.
      currentRotation.x += (targetRotation.x - currentRotation.x) * smoothing;
      currentRotation.y += (targetRotation.y - currentRotation.y) * smoothing;
      
      card.style.setProperty('--rotateX', `${currentRotation.x}deg`);
      card.style.setProperty('--rotateY', `${currentRotation.y}deg`);

      // Continue the animation loop on the next frame.
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function to remove the event listener and cancel the animation frame.
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, false);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    // We depend on these values. If they change, the effect will re-run.
  }, [enabled, elementRef, intensity, smoothing]);
};
