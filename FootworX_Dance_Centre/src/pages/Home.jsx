import React from 'react';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  const styles = ['Ballet', 'Contemporary', 'Hip Hop', 'Modern', 'Jazz'];

  return (
    <div className="home-container dark-theme">
      <Hero />
      
      {/* OVERLAP SECTION: THE PHILOSOPHY */}
      <section className="philosophy-section">
        <div className="container grid-layout">
          <div className="vertical-text">EST. 2011</div>
          <div className="main-statement">
            <span className="location-tag">Ballito // Richard Park</span>
            <h2 className="glitch-title">MOVEMENT <br/> IS ART.</h2>
            <p className="description">
              FootworX Dance Centre provides elite training in <strong>Ballet, Contemporary, Hip Hop, Modern & Jazz</strong>. 
              We don't just teach steps; we cultivate the next generation of South African performers.
            </p>
          </div>
<div className="feature-image-box">
  {/* The image is pulled directly from the public folder */}
  <img 
    src="/home_page_photo.jpg" 
    alt="FootworX Dance Silhouette" 
    className="feature-silhouette"
  />
</div>
        </div>
      </section>

      {/* INTERACTIVE STYLES EXPLORER */}
      <section className="styles-explorer">
        <div className="section-header">
          <h3>The Disciplines</h3>
        </div>
        <div className="styles-ticker">
          {styles.map((style, index) => (
            <div key={index} className="ticker-item">
              <span className="ticker-num">0{index + 1}</span>
              <span className="ticker-text">{style}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BOLD CONTACT STRIP */}
      <section className="contact-strip">
        <div className="strip-content">
          <p>Ready to join the studio? <span>Wimble Cl, Ballito</span></p>
          <button className="minimal-cta">Book Trial Class</button>
        </div>
      </section>
    </div>
  );
};

export default Home;