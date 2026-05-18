import React, { useState } from 'react';
import './MotionPermissionButton.css';
import { MdScreenRotation } from 'react-icons/md';
import { trackButtonClick } from '../analytics';

function MotionPermissionButton({ onGrant }) {
  const [status, setStatus] = useState('idle');

  const handleClick = async () => {
    trackButtonClick('Motion permission request');

    // This is the iOS-specific API
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      setStatus('requesting');
      try {
        const permissionState = await DeviceOrientationEvent.requestPermission();
        if (permissionState === 'granted') {
          onGrant();
        } else {
          setStatus('denied');
        }
      } catch (error) {
        console.error("Error requesting device motion permission:", error);
        setStatus('denied');
      }
    } else {
      onGrant();
    }
  };

  return (
    <button className="motion-button" onClick={handleClick} disabled={status === 'requesting'}>
      <MdScreenRotation />
    </button>
  );
}

export default MotionPermissionButton;
