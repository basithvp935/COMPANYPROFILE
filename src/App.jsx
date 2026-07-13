import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LogoSlider from './components/LogoSlider';
import CoreValues from './components/CoreValues';
import Experience from './components/Experience';
import MissionVision from './components/MissionVision';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader completely from the DOM after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll Reveal Animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            // Stop observing once revealed so it doesn't animate out and in repeatedly
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' } 
    );

    const elements = document.querySelectorAll('.section .container, footer .container');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="app-wrapper">
      {loading && <Preloader />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <LogoSlider />
        <CoreValues />
        <Experience />
        <MissionVision />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
