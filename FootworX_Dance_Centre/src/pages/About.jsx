import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
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
    <div className="about-master-container">
      {/* --- SECTION 1: THE OVERTURE (HERO) --- */}
      <section className="about-hero-editorial">
        <div className="hero-video-fallback">
          <img 
            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2000&auto=format&fit=crop" 
            alt="Cinematic Dance" 
            className="hero-parallax-img"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content-wrapper">
          <div className="reveal fade-up">
            <span className="editorial-label">EST. 2011 // BALLITO</span>
            <h1 className="giant-title">
              THE <span className="outline-text">ART</span> OF <br />
              RESILIENCE.
            </h1>
            <div className="hero-meta">
              <div className="meta-line"></div>
              <p>Thirteen years of defining the architectural limits of the human body.</p>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>SCROLL TO DISCOVER</span>
        </div>
      </section>

      {/* --- SECTION 2: THE LEGACY TAPE --- */}
      <section className="legacy-stats-v3">
        <div className="stats-grid-modern">
          <div className="stat-card-v3 reveal fade-up delay-1">
            <div className="stat-header">
              <span className="stat-index">01</span>
              <h4 className="stat-title">YEARS</h4>
            </div>
            <span className="stat-big-num">13</span>
            <p className="stat-desc">A decade plus of cultivating South Africa's elite talent.</p>
          </div>
          <div className="stat-card-v3 reveal fade-up delay-2">
            <div className="stat-header">
              <span className="stat-index">02</span>
              <h4 className="stat-title">ALUMNI</h4>
            </div>
            <span className="stat-big-num">850+</span>
            <p className="stat-desc">Performers who have graced international stages.</p>
          </div>
          <div className="stat-card-v3 reveal fade-up delay-3">
            <div className="stat-header">
              <span className="stat-index">03</span>
              <h4 className="stat-title">STUDIOS</h4>
            </div>
            <span className="stat-big-num">01</span>
            <p className="stat-desc">A centralized technical sanctuary in Richard Park.</p>
          </div>
          <div className="stat-card-v3 reveal fade-up delay-4">
            <div className="stat-header">
              <span className="stat-index">04</span>
              <h4 className="stat-title">AWARDS</h4>
            </div>
            <span className="stat-big-num">42</span>
            <p className="stat-desc">Championship titles across multiple disciplines.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE BACKGROUND STORY (DEEP LORE) --- */}
      <section className="lore-section">
        <div className="container split-lore">
          <div className="lore-visual reveal fade-right">
            <div className="lore-img-wrapper">
              <img src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=1200&auto=format&fit=crop" alt="Founder" className="lore-img" />
              <div className="lore-accent-box"></div>
              <div className="floating-text-vertical">SINCE 2011</div>
            </div>
          </div>
          <div className="lore-text reveal fade-left">
            <h2 className="editorial-heading">Born from <br/><span>Discipline.</span></h2>
            <div className="editorial-body">
              <p className="dropcap-para">
                Founded in 2011, FootworX Dance Centre emerged not just as a school, but as a response to the need for technical purity in the Ballito dance scene. What began as a small collective of dedicated performers has evolved into the region's premier technical powerhouse.
              </p>
              <p>
                Our history is etched in the floorboards of our Richard Park studio. We believe that dance is 50% physics and 50% soul. By mastering the geometry of the body, our students unlock the ability to express the deepest human emotions without the interference of physical limitation.
              </p>
              <p>
                Today, FootworX stands as a beacon for aspiring professionals and dedicated hobbyists alike, fostering an environment where "good enough" is replaced by a pursuit of the extraordinary.
              </p>
            </div>
            <button className="minimal-link-btn">READ THE FULL ARCHIVE <span>→</span></button>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE TECHNICAL SANCTUARY --- */}
      <section className="sanctuary-section">
        <div className="sanctuary-header reveal fade-up">
          <h2 className="outline-title-mid">THE FACILITY</h2>
          <h3>ENGINEERED FOR EXCELLENCE</h3>
        </div>
        
        <div className="facility-grid">
          <div className="facility-feature reveal scale-in">
            <img src="https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=800&auto=format&fit=crop" alt="Floor" />
            <div className="feature-overlay">
              <h4>NEO-SPRUNG FLOORS</h4>
              <p>Impact-absorbing technology to protect the joints of the next generation.</p>
            </div>
          </div>
          <div className="facility-feature reveal scale-in delay-1">
            <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop" alt="Mirrors" />
            <div className="feature-overlay">
              <h4>PANORAMIC ANALYTICS</h4>
              <p>Full-length performance mirrors for instant postural correction.</p>
            </div>
          </div>
          <div className="facility-feature reveal scale-in delay-2">
            <img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop" alt="Lounge" />
            <div className="feature-overlay">
              <h4>CURATED LOUNGE</h4>
              <p>A sophisticated observation space for parents and visitors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: THE CORE VALUES (INTERACTIVE) --- */}
      <section className="values-interactive">
        <div className="container">
          <div className="values-main-grid">
            <div className="value-block reveal fade-up">
              <div className="value-inner">
                <span className="val-tag">CORE // 01</span>
                <h3>TECHNICAL RIGOR</h3>
                <p>We don't skip steps. Every student is drilled in the foundational physics of their craft until the movement becomes second nature.</p>
              </div>
            </div>
            <div className="value-block reveal fade-up delay-1">
              <div className="value-inner accent-bg">
                <span className="val-tag">CORE // 02</span>
                <h3>CREATIVE FREEDOM</h3>
                <p>Discipline provides the wings. Once the technique is mastered, we encourage our dancers to break the rules and find their voice.</p>
              </div>
            </div>
            <div className="value-block reveal fade-up delay-2">
              <div className="value-inner">
                <span className="val-tag">CORE // 03</span>
                <h3>COMMUNAL STRENGTH</h3>
                <p>We are a family by choice. We celebrate every breakthrough and support every setback with equal intensity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: THE CALL TO MOTION --- */}
      <section className="about-footer-cta reveal fade-up">
        <div className="cta-wrap">
          <h2>BECOME PART OF <br/><span className="outline-text">THE LEGACY.</span></h2>
          <div className="cta-btns">
            <button className="prime-cta">VIEW CLASSES</button>
            <button className="sec-cta">BOOK A CONSULTATION</button>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2026 FOOTWORX DANCE CENTRE. ARCHITECTS OF MOTION.</p>
        </div>
      </section>
    </div>
  );
};

export default About;