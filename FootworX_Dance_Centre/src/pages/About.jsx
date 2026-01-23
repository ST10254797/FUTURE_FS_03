import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container dark-theme">
      {/* SECTION 1: THE LEGACY */}
      <section className="about-hero">
        <div className="container">
          <span className="eyebrow">The FootworX Story</span>
          <h1 className="display-title">13 Years of <br/>Technical Excellence.</h1>
          <p className="large-lead">
            Founded in 2011, FootworX Dance Centre has become Ballito’s premier 
            destination for dancers who demand more from their training.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE STUDIO (RICHARD PARK) */}
      <section className="studio-feature">
        <div className="container grid-2">
          <div className="studio-info">
            <h2 className="section-title">The Facility</h2>
            <p>
              Located in the heart of Ballito at <strong>Richard Park</strong>, our 
              studios are designed with professional-grade sprung flooring, full-length 
              mirrors, and climate control to provide an optimal environment for growth.
            </p>
            <ul className="feature-list">
              <li>— Professional Sprung Floors</li>
              <li>— Sound-Engineered Studios</li>
              <li>— Parent Lounge & Viewing Areas</li>
              <li>— Safe, Secure Parking</li>
            </ul>
          </div>
          <div className="studio-image-box">
             {/* Replace with a photo of your actual studio interior */}
             <img src="/studio_interior.jpg" alt="FootworX Studio" className="studio-img" />
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES */}
      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <h3>Discipline</h3>
              <p>The foundation of every great performer starts with technical rigour.</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>A supportive environment where passion is shared across all ages.</p>
            </div>
            <div className="value-card">
              <h3>Artistry</h3>
              <p>Beyond the steps, we teach the soul of movement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;