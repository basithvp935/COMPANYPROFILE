import React from 'react';
import { Building, GraduationCap, Globe, ArrowRight } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Brilliant Group of Institutions",
      role: "Founder & Leader",
      icon: <Building size={48} strokeWidth={1} />,
      desc: "Providing top-tier educational coaching and mentoring to thousands of students across Qatar. Unlocking new value with tailored IT services and institutional guidance."
    },
    {
      id: 2,
      title: "Noble International School",
      role: "Educational Leadership",
      icon: <GraduationCap size={48} strokeWidth={1} />,
      desc: "We help institutions grow with strategies that drive impact. Guiding institutional growth and maintaining high standards of academic excellence."
    },
    {
      id: 3,
      title: "Brilliant Education Centre",
      role: "Founder",
      icon: <Globe size={48} strokeWidth={1} />,
      desc: "At Brilliant, we deliver trusted coaching that helps our students grow. Founded 15 years ago to deliver trusted guidance in the Middle East."
    }
  ];

  return (
    <section className="section experience-modern" id="experience">
      <div className="container">
        <div className="experience-header">
          <div className="header-left">
            <span className="section-badge-dark">PROFESSIONAL ENDEAVORS</span>
            <h2 className="section-title-dark">Institutions built on <br/><span className="text-secondary">trust & quality</span></h2>
          </div>
          <div className="header-right">
            <p>
              My journey is defined by creating educational institutions that prioritize student success. We provide top-tier coaching to thousands of students, maintaining the highest standards of academic excellence.
            </p>
            <p>
              From custom curriculums to secure environments, we ensure students get the exact tools they need to lead in today's competitive world.
            </p>
          </div>
        </div>
        
        <div className="modern-cards-grid">
          {experiences.map((exp) => (
            <div className="modern-experience-card" key={exp.id}>
              <div className="modern-card-icon">{exp.icon}</div>
              <h3>{exp.title}</h3>
              <p>{exp.desc}</p>
              <a href="#about" className="learn-more-link">
                Learn More <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
