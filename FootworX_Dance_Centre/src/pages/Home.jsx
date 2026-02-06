import React, { useEffect } from 'react';
import './Home.css';

const disciplines = [
  { 
    name: 'Ballet', 
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&auto=format&fit=crop',
    desc: 'The foundation of all movement. Precision, grace, and strength.'
  },
  { 
    name: 'Contemporary', 
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    desc: 'Fluidity and emotional expression through modern storytelling.'
  },
  { 
    name: 'Hip Hop', 
    image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=1200&auto=format&fit=crop',
    desc: 'High energy, rhythm, and urban style exploration.'
  },
  { 
    name: 'Modern', 
    image: 'https://plus.unsplash.com/premium_photo-1682125258376-d6bc46f183c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D',
    desc: 'Grounding techniques and innovative physical dynamics.'
  },
];

const Home = () => {
  useEffect(() => {
    // Reveal animation logic on scroll
    const observers = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    observers.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="home-wrapper">
      {/* --- HERO SECTION --- */}
      <section className="hero-luxury">
        <div className="hero-bg-parallax">
          <img 
            src="https://images.unsplash.com/photo-1508204882723-81a69ad73c5a?q=80&w=2000&auto=format&fit=crop" 
            alt="Main Background" 
            className="parallax-img"
          />
          <div className="hero-overlay-gradient"></div>
        </div>

        <div className="hero-main-content">
          <div className="hero-layout-split">
            <div className="reveal fade-up">
              <span className="hero-top-label">ESTABLISHED 2011</span>
              <h1 className="hero-display-title">
                MOVE WITH <br />
                <span className="hollow-text">PURPOSE.</span>
              </h1>
              <div className="hero-separator"></div>
              <p className="hero-description">
                FootworX Dance Centre provides elite instruction in Ballito, Durban. 
                Defining the intersection of technique and soul.
              </p>
              <div className="hero-action-group">
                <button className="btn-white">EXPLORE CLASSES</button>
                <button className="btn-outline">OUR STORY</button>
              </div>
            </div>

            {/* --- NEW INTERACTIVE IMAGE ELEMENT --- */}
            <div className="hero-interactive-visual reveal scale-in delay-1">
               <div className="visual-float-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=1200&auto=format&fit=crop" 
                    alt="Artistic Dance Movement" 
                    className="interactive-hero-img"
                  />
                  <div className="visual-border-accent"></div>
                  <div className="visual-label-vertical">ART IN MOTION</div>
               </div>
            </div>
          </div>
        </div>

        <div className="hero-footer-stats">
          <div className="stat-item">
            <span className="stat-num">12+</span>
            <span className="stat-label">YEARS EXCELLENCE</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">500+</span>
            <span className="stat-label">STUDENTS TRAINED</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">PASSION DRIVEN</span>
          </div>
        </div>
      </section>

      {/* --- THE STORY (WHITE SECTION) --- */}
      <section className="story-section white-bg">
        <div className="content-container reveal fade-left">
          <div className="story-grid">
            <div className="story-text">
              <h2 className="section-tag">THE PHILOSOPHY</h2>
              <h3 className="section-main-heading">Crafting the <br/>Art of Motion.</h3>
              <p className="story-para">
                We believe dance is more than just steps—it is a discipline of the mind and body. 
                Our studio in Ballito serves as a sanctuary for those who seek to push their 
                boundaries and find their unique voice through movement.
              </p>
              <p className="story-para secondary">
                From the focused precision of Ballet to the raw energy of Hip Hop, 
                our world-class instructors guide every student toward their personal peak performance.
              </p>
              <div className="signature-box">
                <span className="founder-name">The FootworX Team</span>
              </div>
            </div>
            <div className="story-visual reveal fade-right">
              <div className="image-stack">
                <img src="https://images.unsplash.com/photo-1511715282680-fbf93a50e721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D" alt="Dance Detail" className="img-main" />
                <div className="img-accent-border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DISCIPLINES GRID --- */}
      <section className="disciplines-modern-dark">
        <div className="reveal fade-up text-center">
          <h2 className="centered-title">The Disciplines</h2>
          <p className="centered-subtitle">Selected training programs for the dedicated artist.</p>
        </div>

        <div className="bento-grid-container">
          {disciplines.map((item, idx) => (
            <div key={idx} className={`bento-item reveal delay-${idx}`}>
              <div className="bento-card">
                <img src={item.image} alt={item.name} className="bento-img" />
                <div className="bento-overlay">
                  <span className="bento-index">0{idx + 1}</span>
                  <div className="bento-text">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <button className="bento-btn">LEARN MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- QUOTE SECTION --- */}
      <section className="parallax-quote">
        <div className="quote-content reveal scale-in">
          <blockquote>
            "Dance is the hidden language of the soul."
          </blockquote>
          <cite>— Martha Graham</cite>
        </div>
      </section>

      {/* --- CONTACT & JOIN --- */}
      <section className="join-footer white-bg">
        <div className="reveal fade-up">
          <div className="join-card">
            <div className="join-left">
              <h2>Join the Studio.</h2>
              <p>Experience a trial class and find your rhythm.</p>
            </div>
            <div className="join-right">
              <div className="location-info">
                <strong>BALLITO STUDIO</strong>
                <p>Wimble Cl, Ballito, Durban</p>
              </div>
              <button className="final-cta">BOOK TRIAL NOW</button>
            </div>
          </div>
        </div>
        

      </section>
    </div>
  );
};

export default Home;