import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  const values = [
    {
      id: 1,
      title: "ETHICAL LEADERSHIP",
      description: "We lead with integrity, transparency, and truth. Every action and decision is guided by fairness and moral strength because genuine success stands on the foundation of ethics.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "PURPOSE-DRIVEN GROWTH",
      description: "Business must serve beyond profit. We believe in entrepreneurship with purpose — creating value that uplifts people, solves real problems, and contributes to a better society.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "SUSTAINABILITY & LEGACY",
      description: "Legacy is built through continuity and contribution. We help leaders design systems, culture, and governance that sustain their vision for generations — leaving behind institutions of excellence, not just enterprises.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "BALANCED LIFE — FAMILY, BUSINESS, SOCIETY & SPIRITUALITY",
      description: "True growth is harmony. We nurture balance between personal well-being, family values, professional excellence, social contribution, and spiritual peace — ensuring success that feels complete.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "COLLECTIVE GROWTH & COLLABORATION",
      description: "We rise by lifting others. We foster a trusted circle of entrepreneurs who share ideas, resources, and opportunities — creating an ecosystem where everyone grows together.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "CONTINUOUS LEARNING & GROWTH MINDSET",
      description: "Great leaders never stop learning. We cultivate curiosity, innovation, and adaptability — preparing entrepreneurs to thrive in a fast-changing world with wisdom, humility, and vision.",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="section core-values-section" id="core-values">
      <div className="container">
        <h2 className="core-values-title">
          CORE <span className="title-accent">VALUES</span>
        </h2>
        
        <div className="values-grid">
          {values.map((val) => (
            <div className="value-card" key={val.id}>
              <div className="value-card-image">
                <img src={val.image} alt={val.title} />
              </div>
              <div className="value-card-content">
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
