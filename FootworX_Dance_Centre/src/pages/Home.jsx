import React from 'react';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <section className="intro-section">
        <div className="intro-content">
          <h2>Dance training in Ballet, Contemporary, Hip Hop, Modern & Jazz.</h2>
          <p>Located in the heart of Ballito at Richard Park.</p>
        </div>
      </section>
      {/* You would add a Styles preview or Gallery snippet here */}
    </div>
  );
};

export default Home;