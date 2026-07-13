import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import './About.css';
import aboutImg from '../assets/images/founder.png';

const About = () => {
  return (
    <section className="section about-light" id="about">
      <div className="container">
        <div className="about-grid-light">
          
          <div className="about-content-left">
            <h2 className="section-title-dark">My Journey in <span className="text-secondary-gradient">Education</span></h2>
            
            <p className="about-text-dark">
              Fifteen years ago, I embarked on a mission to transform the educational landscape by founding Brilliant Education Centre. What started as a vision has grown into a trusted coaching center and educational group in the Middle East.
            </p>
            <p className="about-text-dark">
              My major concern has always been student success—helping them develop the skills, knowledge, and confidence needed to face various challenges and become well-prepared for today's competitive world.
            </p>
            
            <ul className="about-check-list">
              <li>
                <CheckCircle2 size={24} className="check-icon" />
                <span><strong>Proven Excellence:</strong> Consistent results and top achievers.</span>
              </li>
              <li>
                <CheckCircle2 size={24} className="check-icon" />
                <span><strong>Expert Mentorship:</strong> Tailored guidance for every student.</span>
              </li>
              <li>
                <CheckCircle2 size={24} className="check-icon" />
                <span><strong>Innovative Curriculum:</strong> Modern approaches to classic learning.</span>
              </li>
            </ul>

            <div className="about-actions">
              <a href="#contact" className="btn btn-yellow">Get Started</a>
              <a href="#experience" className="btn btn-outline">Our Services</a>
            </div>
          </div>

          <div className="about-image-right">
            <div className="image-wrapper">
              <img 
                src={aboutImg} 
                alt="Education abstract" 
                className="main-portrait-img"
              />
              <div className="floating-quote-box">
                <div className="quote-avatar">
                  <Award size={28} />
                </div>
                <div className="quote-text">
                  <p>"15+ Years of Excellence. My major concern has always been student success and building confidence." - Founder</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
