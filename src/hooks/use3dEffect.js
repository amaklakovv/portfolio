import { useEffect } from 'react';

/**
 * A hook that applies a 3D tilt effect on hover.
 * @param {React.RefObject<HTMLElement>} elementRef
 * @param {{enabled?: boolean, hoverIntensity?: number}} options
 */
export const use3dEffect = (elementRef, { enabled = true, hoverIntensity = 10 }) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !enabled) {
      if (element) {
        element.style.setProperty('--rotateX', '0deg');
        element.style.setProperty('--rotateY', '0deg');
      }
      return;
    }

    const handleMouseMove = (e) => {
      const { width, height, left, top } = element.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const rotateX = -((y - height / 2) / (height / 2)) * hoverIntensity;
      const rotateY = ((x - width / 2) / (width / 2)) * hoverIntensity;

      requestAnimationFrame(() => {
        element.style.setProperty('--rotateX', `${rotateX}deg`);
        element.style.setProperty('--rotateY', `${rotateY}deg`);
      });
    };

    const handleMouseLeave = () => {
      requestAnimationFrame(() => {
        element.style.setProperty('--rotateX', '0deg');
        element.style.setProperty('--rotateY', '0deg');
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef, enabled, hoverIntensity]);
};
