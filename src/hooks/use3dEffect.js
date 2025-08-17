import { useCallback } from 'react';

/**
 * A hook that provides event handlers for a 3D tilt and highlight effect on hover.
 * @param {number} hoverIntensity - The intensity of the tilt effect.
 * @returns {{onMouseMove: (e: React.MouseEvent) => void, onMouseLeave: (e: React.MouseEvent) => void}}
 */
export function use3dEffect(hoverIntensity = 10) {
  const handleMouseMove = useCallback((e) => {
    const element = e.currentTarget;
    const { width, height, left, top } = element.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = -((y - height / 2) / (height / 2)) * hoverIntensity;
    const rotateY = ((x - width / 2) / (width / 2)) * hoverIntensity;

    element.style.setProperty('--rotateX', `${rotateX}deg`);
    element.style.setProperty('--rotateY', `${rotateY}deg`);
    element.style.setProperty('--mouseX', `${x}px`);
    element.style.setProperty('--mouseY', `${y}px`);
  }, [hoverIntensity]);

  const handleMouseLeave = useCallback((e) => {
    const element = e.currentTarget;
    element.style.setProperty('--rotateX', '0deg');
    element.style.setProperty('--rotateY', '0deg');
  }, []);

  return { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}