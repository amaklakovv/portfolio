import React, { useState } from 'react';
import './MotionPermissionButton.css';
import { FaMagic } from 'react-icons/fa';

function MotionPermissionButton({ onGrant }) {
  const [status, setStatus] = useState('idle'); // 'idle', 'requesting', 'denied'

  const handleClick = async () => {
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
      // For non-iOS browsers, permission is usually granted by default.
      onGrant();
    }
  };

  return (
    <button className="motion-button" onClick={handleClick} disabled={status === 'requesting'}>
      <FaMagic />
      <span>Experience Something Magical</span>
    </button>
  );
}

export default MotionPermissionButton;
