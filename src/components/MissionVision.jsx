import React from 'react';
import { Plus } from 'lucide-react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="section mission-vision-white" id="mission-vision">
      <div className="container">
        
        {/* Headings Row */}
        <div className="mv-headings-row">
          <div className="mv-heading-box left-heading">
            <Plus size={60} className="plus-icon" strokeWidth={1} />
            <h2 className="mv-title">
              <span className="title-dark">OUR</span>
              <span className="title-accent">MISSION</span>
            </h2>
          </div>
          <div className="mv-heading-box right-heading">
            <h2 className="mv-title">
              <span className="title-dark">OUR</span>
              <span className="title-accent">VISION</span>
            </h2>
            <Plus size={60} className="plus-icon" strokeWidth={1} />
          </div>
        </div>

        {/* Cards Row */}
        <div className="mv-cards-row">
          
          {/* Mission Card */}
          <div className="mv-light-card">
            <div className="mv-card-content">
              <p>
                To provide world-class educational coaching and leadership guidance that unlocks the true potential of students and educators. We are committed to fostering an environment built on trust, quality, and continuous, purposeful growth.
              </p>
              <div className="accent-square solid"></div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="mv-light-card">
            <div className="mv-card-content">
              <div className="accent-square outline"></div>
              <p>
                To be a global leader in shaping the future of education by empowering institutions with innovative strategies, enduring values, and an unwavering commitment to academic excellence for generations to come.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
