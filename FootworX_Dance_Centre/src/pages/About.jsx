import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container dark-theme">
      {/* SECTION 1: CINEMATIC HERO */}
      <section className="about-hero-v2">
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow fade-in">Since 2011</span>
            <h1 className="outline-title">LEGACY IN</h1>
            <h1 className="solid-title">MOTION.</h1>
            <p className="hero-description">
              FootworX is more than a studio; it is a technical powerhouse in Ballito, 
              where discipline meets the raw emotion of dance.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE LEGACY STATS */}
      <section className="stats-bar">
        <div className="container stats-flex">
          <div className="stat-item">
            <span className="stat-num">13+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">5</span>
            <span className="stat-label">Core Disciplines</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">1</span>
            <span className="stat-label">State-of-the-Art Studio</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE STUDIO EXPERIENCE */}
      <section className="studio-experience">
        <div className="container split-layout">
          <div className="image-stack">
            <img src="/studio.jpg" alt="FootworX Facility" className="main-img" />
            <div className="accent-box"></div>
          </div>
          <div className="experience-text">
            <h2 className="section-title">Richard Park <br/><span>Professional Facility</span></h2>
            <p>
              Our Richard Park location is meticulously designed for high-performance training. 
              From the acoustics to the impact-absorbing floors, every detail serves the dancer.
            </p>
            <div className="feature-grid">
              <div className="f-item"><span>//</span> Professional Sprung Floors</div>
              <div className="f-item"><span>//</span> Full-Length Performance Mirrors</div>
              <div className="f-item"><span>//</span> Climate-Controlled Environment</div>
              <div className="f-item"><span>//</span> Parent Viewing Lounge</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE VALUES (MODERN CARDS) */}
      <section className="values-modern">
        <div className="container">
          <div className="values-header">
            <h2>The FootworX Way</h2>
            <div className="line"></div>
          </div>
          <div className="values-cards-v2">
            <div className="v-card">
              <div className="v-num">01</div>
              <h3>DISCIPLINE</h3>
              <p>We believe technique is the key to freedom. Our students learn the "why" behind every move.</p>
            </div>
            <div className="v-card">
              <div className="v-num">02</div>
              <h3>COMMUNITY</h3>
              <p>Ballito's dance family. We grow together, supporting every leap and every fall.</p>
            </div>
            <div className="v-card">
              <div className="v-num">03</div>
              <h3>ARTISTRY</h3>
              <p>Technical perfection is just the start. We teach dancers how to move an audience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;