import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content-new">

          <div className="footer-brand-section">
            <h2 className="footer-logo">
              <span className="logo-white">Mohammed</span> <span className="logo-accent">Ashraf</span>
            </h2>
            <div className="footer-left-card">
              <p>
                Founder & Educational Leader based in Qatar, dedicated to shaping the future through excellence in education, guiding institutional growth, and ensuring sustainable success.
              </p>
              <div className="social-links-new">
                <a href="#" className="social-icon" aria-label="Instagram"><FiInstagram size={20} /></a>
                <a href="#" className="social-icon" aria-label="Facebook"><FiFacebook size={20} /></a>
                <a href="https://www.linkedin.com/in/mohammed-ashraf-brilliant-qatar" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter"><FiTwitter size={20} /></a>
              </div>
            </div>
          </div>

          <div className="footer-right-info">
            <h3>Connect</h3>

            <div className="contact-block">
              <h4>Email</h4>
              <p>contact@example.com</p>
            </div>

            <div className="contact-block">
              <h4>Phone</h4>
              <p>+974 (123) 456-7890</p>
            </div>

            <div className="contact-block">
              <h4>Address</h4>
              <p>Doha, Qatar</p>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mohammed Ashraf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
