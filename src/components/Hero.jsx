import React, { useState, useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import './Hero.css';
import heroImage from '../assets/images/ashraf.png';

const Hero = () => {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const target = 1000;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setStudentCount(target);
        clearInterval(timer);
      } else {
        setStudentCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        
        {/* Left Side: Image & Vertical Text */}
        <div className="hero-left">
          <div className="vertical-text-container stagger-1">
            <div className="circle-arrow">
              <ArrowUpRight size={20} />
            </div>
            <span className="vertical-text">Educational Leader</span>
          </div>
          
          <div className="image-wrapper stagger-2">
            <img 
              src={heroImage} 
              alt="Mohammed Ashraf" 
              className="hero-person-img"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="hero-right">
          <p className="hero-top-text stagger-3">15 Years of Excellence, Building Futures</p>
          
          <div className="hero-title-container">
            <h1 className="hero-title">
              <div className="title-line stagger-4">Educational</div>
              <div className="title-line indented stagger-5">
                <div className="title-arrow">
                  <ArrowDownRight size={56} strokeWidth={1.5} />
                </div>
                <span className="text-unfiltered">Excellence</span>
              </div>
            </h1>
          </div>

          <div className="hero-bottom-section">
            <div className="hero-desc-box stagger-6">
              <p className="desc-subtitle">Founder & Visionary</p>
              <p className="desc-text">
                Hi, I'm Mohammed Ashraf, an educational leader with a passion for guiding students and building institutions like Brilliant Education Centre.
              </p>
              
              <div className="hero-buttons">
                <a href="#about" className="btn btn-solid">Get Started</a>
                <a href="#contact" className="btn-text">Contact Us</a>
              </div>
            </div>

            <div className="hero-stats-card stagger-7">
              <p className="stats-title">Happy Students</p>
              <div className="stats-content">
                <div className="avatar-group">
                  <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=100&h=100&fit=crop" alt="student" className="avatar" />
                  <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop" alt="student" className="avatar" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="student" className="avatar" />
                </div>
                <span className="stats-number">{studentCount}+</span>
              </div>
            </div>
          </div>

        </div>

      </div>
      
      {/* Decorative lines in background */}
      <div className="bg-line line-horizontal animate-line-x"></div>
      <div className="bg-line line-angled animate-line-diag"></div>
    </section>
  );
};

export default Hero;
