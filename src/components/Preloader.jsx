import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const text = "MOHAMMED ASHRAF";

  useEffect(() => {
    // Start the CSS fade out transition right before the component unmounts
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className="preloader-char" 
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
