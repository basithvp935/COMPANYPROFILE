import React from 'react';
import { Bookmark, Flag } from 'lucide-react';
import './LogoSlider.css';

const logos = [
  { 
    id: 1, 
    arabic: "بريليانت إيديوكيشن سنتر",
    english1: "Brilliant Education",
    english2: "Centre",
    isBritish: false
  },
  { 
    id: 2, 
    arabic: "مركز وسام التعليمي",
    english1: "Wisdom Education",
    english2: "Centre",
    isBritish: false
  },
  { 
    id: 3, 
    arabic: "مركز المواهب التعليمي",
    english1: "Talent Education",
    english2: "Centre",
    isBritish: false
  },
  { 
    id: 4, 
    arabic: "",
    english1: "BRITISH",
    english2: "LANGUAGE CENTRE",
    isBritish: true
  },
  { 
    id: 5, 
    arabic: "مركز بريليانت لتدريب الحاسب الآلي",
    english1: "Brilliant Computer",
    english2: "& Robotics Centre",
    isBritish: false
  },
];

const LogoSlider = () => {
  // We duplicate the array to create a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="logo-slider-container">
      <div className="container">
        <div className="slider-wrapper">
          <div className="slider-track">
            {duplicatedLogos.map((logo, index) => (
              <div className="logo-item" key={index}>
                
                {logo.isBritish ? (
                  <div className="british-logo">
                    <div className="british-flag">
                      <Flag fill="#d32f2f" strokeWidth={0} size={36} />
                    </div>
                    <div className="british-text-wrapper">
                      <div className="british-text">{logo.english1}</div>
                      <div className="british-sub">{logo.english2}</div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="logo-icon">
                      {/* Simulating the geometric logo mark */}
                      <div className="geometric-mark">
                        <div className="mark-part-1"></div>
                        <div className="mark-part-2"></div>
                      </div>
                    </div>
                    <div className="logo-text">
                      <div className="arabic-text">{logo.arabic}</div>
                      <div className="english-text">{logo.english1}</div>
                      <div className="english-text">{logo.english2}</div>
                    </div>
                  </>
                )}

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
