import { useEffect } from 'react';

// A simple throttle function to limit how often the event handler runs.
const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const useDeviceOrientationEffect = (elementRef, { enabled = false, intensity = 0.25 }) => {
  useEffect(() => {
    const card = elementRef.current;
    if (!enabled || !card) {
      if (card) {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
      }
      return;
    }

    const handleOrientation = (event) => {
      const { beta, gamma } = event; // beta: front-to-back, gamma: left-to-right

      if (beta === null || gamma === null) return;

      const cappedBeta = Math.max(-30, Math.min(30, beta));
      const cappedGamma = Math.max(-30, Math.min(30, gamma));

      const rotateX = cappedBeta * intensity;
      const rotateY = cappedGamma * -intensity;

      requestAnimationFrame(() => {
        card.style.setProperty('--rotateX', `${rotateX}deg`);
        card.style.setProperty('--rotateY', `${rotateY}deg`);
      });
    };

    const throttledHandler = throttle(handleOrientation, 100);
    window.addEventListener('deviceorientation', throttledHandler);

    return () => window.removeEventListener('deviceorientation', throttledHandler);
  }, [enabled, elementRef, intensity]);
};
