import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Move with Purpose.</h1>
        <p>Professional dance instruction in Ballito, Durban.</p>
        <button className="hero-btn">Explore Classes</button>
      </div>
    </div>
  );
};

export default Hero;