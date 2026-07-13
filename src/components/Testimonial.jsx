import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    content: "Mohammed Ashraf's visionary leadership completely transformed our approach to learning. His focus on academic excellence at Brilliant Education Centre is truly unparalleled.",
    name: "Dr. Sarah Ahmed",
    role: "Director, Brilliant Education",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    content: "Working under his guidance at Wisdom Education Centre has been enriching. He builds not just modern facilities, but thriving ecosystems of student growth.",
    name: "David Chen",
    role: "Senior Educator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    content: "A true pioneer in Qatar's education sector. The strategic direction he provided for the Talent Education Centre helped us achieve record-breaking student performance.",
    name: "Aisha Rahman",
    role: "Academic Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonial = () => {
  return (
    <section className="section testimonial-section-white" id="testimonials">
      <div className="container">
        
        <div className="section-header center">
          <span className="subtitle-accent">TESTIMONIAL</span>
          <h2 className="section-title">
            <span className="title-dark">Professional</span> <span className="title-accent">Endorsements</span>
          </h2>
        </div>

        <div className="testimonial-grid-centered">
          {testimonials.map((testi) => (
            <div className="testimonial-card-centered" key={testi.id}>
              <div className="author-image-wrapper">
                <img src={testi.image} alt={testi.name} className="author-image-centered" />
              </div>
              <p className="testimonial-content-centered">{testi.content}</p>
              
              <div className="testimonial-author-centered">
                <h4 className="author-name-centered">{testi.name}</h4>
                <span className="author-role-centered">{testi.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dummy Pagination Dots */}
        <div className="slider-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
