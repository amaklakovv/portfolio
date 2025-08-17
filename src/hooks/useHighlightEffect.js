import { useCallback } from 'react';

/**
 * A hook that provides an event handler for a moving highlight effect on hover.
 * @returns {{onMouseMove: (e: React.MouseEvent) => void}}
 */
export function useHighlightEffect() {
  const handleMouseMove = useCallback((e) => {
    const element = e.currentTarget;
    const { left, top } = element.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Pass mouse coordinates for the highlight effect
    element.style.setProperty('--mouseX', `${x}px`);
    element.style.setProperty('--mouseY', `${y}px`);
  }, []);

  // No-op, but kept for consistent API if needed later
  const handleMouseLeave = useCallback(() => {}, []);

  return { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}