import { useEffect } from 'react';

/**
 * A hook that applies a highlight effect following the mouse on hover.
 * @param {React.RefObject<HTMLElement>} elementRef
 * @param {{enabled?: boolean}} options
 */
export const useHighlightEffect = (elementRef, { enabled = true }) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !enabled) {
      if (element) {
        element.style.setProperty('--mouseX', '-1000px');
        element.style.setProperty('--mouseY', '-1000px');
      }
      return;
    }

    const handleMouseMove = (e) => {
      const { left, top } = element.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      element.style.setProperty('--mouseX', `${x}px`);
      element.style.setProperty('--mouseY', `${y}px`);
    };

    element.addEventListener('mousemove', handleMouseMove);
    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, [elementRef, enabled]);
};