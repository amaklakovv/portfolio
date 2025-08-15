import React, { useState, useEffect } from 'react';
import './FlippingText.css';

/**
 * A component that displays text with a flipping animation, cycling through a list of phrases.
 * @param {{phrases: string[], period?: number}} props
 */
function FlippingText({ phrases, period = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('in'); // In or out

  // This effect handles the interval for flipping
  useEffect(() => {
    // When phrases change, reset the animation to show the first new phrase immediately.
    setCurrentIndex(0);
    setAnimationClass('in');

    const intervalId = setInterval(() => {
      setAnimationClass('out'); // Trigger the flip out animation
    }, period);

    return () => clearInterval(intervalId);
  }, [phrases, period]);

  const handleAnimationEnd = () => {
    // After the 'out' animation finishes, update the text and trigger the 'in' animation
    if (animationClass === 'out') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setAnimationClass('in');
    }
  };

  return (
    <div className="flipping-text-container">
      I'm a
      <span className="flipping-text-wrapper">
        <span className={`flipping-text ${animationClass}`} onAnimationEnd={handleAnimationEnd}>
          {phrases[currentIndex]}
        </span>
      </span>
    </div>
  );
}

export default FlippingText;
