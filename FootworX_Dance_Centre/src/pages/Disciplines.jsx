import React, { useState, useEffect } from 'react';
import './Disciplines.css';

const danceStyles = [
  { 
    id: '01',
    name: 'Classical Ballet', 
    tag: 'Architectural Poise', 
    shortInfo: 'The rigorous pursuit of technical perfection and gravity-defying grace.',
    detailedLore: 'Since our inception in 2011, the Ballet program at FootworX has been the cornerstone of our technical identity. We follow a modified Vaganova method, focusing on the architectural alignment of the spine and the explosive power of the lower extremities. This is not just dance; it is the mastery of human physics.',
    bgImage: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2000&auto=format&fit=crop',
    syllabus: ['Anatomy & Alignment', 'Classical Adagio', 'En Pointe Artistry', 'Repertoire Study'],
    requirements: ['Ages 4+', 'Official FootworX Leotard', 'Hair: Professional Slick-back Bun', 'Pink Canvas Ribbed Shoes']
  },
  { 
    id: '02',
    name: 'Contemporary', 
    tag: 'Visceral Narrative', 
    shortInfo: 'A profound exploration of emotional weight, floorwork, and abstract storytelling.',
    detailedLore: 'Our Contemporary program is a laboratory for movement exploration. We strip away the rigid verticality of classical forms to explore the floor, momentum, and the "honest" movement of the body. Our Ballito studio has become a sanctuary for those looking to translate raw human experience into physical motion.',
    bgImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2000&auto=format&fit=crop',
    syllabus: ['Release Technique', 'Contact Improvisation', 'Momentum Dynamics', 'Emotional Mapping'],
    requirements: ['Ages 10+', 'Footless Black Tights', 'Knee Pads (Studio Grade)', 'Previous Technical Foundation']
  },
  { 
    id: '03',
    name: 'Hip Hop', 
    tag: 'Urban Sophistication', 
    shortInfo: 'High-velocity rhythm and professional-grade commercial choreography.',
    detailedLore: 'Breaking the mold of traditional studio training, our Hip Hop division focuses on the culture, the groove, and the precision of isolations. From the streets to the stage, we teach the "geometry of the beat." This program is designed for the high-performance athlete who moves with attitude and surgical accuracy.',
    bgImage: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2000&auto=format&fit=crop',
    syllabus: ['Isolation Mechanics', 'Rhythmic Syncopation', 'Commercial Performance', 'Freestyle Theory'],
    requirements: ['Ages 6+', 'Clean Sole Studio Sneakers', 'Oversized Editorial Gear', 'High Stamina Threshold']
  },
  { 
    id: '04',
    name: 'Modern & Jazz', 
    tag: 'Dynamic Propulsion', 
    shortInfo: 'A high-octane fusion of Broadway-style theater and technical Jazz power.',
    detailedLore: 'Explosive, rhythmic, and unapologetically bold. The Modern & Jazz stream at FootworX is where technical ability meets theatrical charisma. We focus on the "big" movement—leaps that span the studio and turns that defy the axis. It is the intersection of athletic strength and stylistic flair.',
    bgImage: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2000&auto=format&fit=crop',
    syllabus: ['Axial Rotation', 'Grand Allegro Leaps', 'Lyrical Fluidity', 'Theatrical Characterization'],
    requirements: ['Ages 5+', 'Black Leather Jazz Shoes', 'Technical Form-fitting Wear', 'Assessment for Advanced Levels']
  }
];

const Disciplines = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [activeStyle, setActiveStyle] = useState(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="disciplines-master">
      {/* --- CINEMATIC DYNAMIC BACKGROUND --- */}
      <div className="dynamic-bg-container">
        {danceStyles.map((style, index) => (
          <div 
            key={index} 
            className={`bg-slide ${hoveredIndex === index ? 'visible' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${style.bgImage})` }}
          />
        ))}
      </div>

      {/* --- HERO HEADER --- */}
      <section className="disciplines-hero-v4">
        <div className="container">
          <div className="reveal fade-up">
            <span className="master-tag">THE CURRICULUM</span>
            <h1 className="editorial-title">
              SYLLABUS OF <br />
              <span className="outline-text">MOTION.</span>
            </h1>
            <p className="hero-sub">
              A curated technical architecture designed to transform students into world-class performers. 
              Ballito's legacy of elite instruction begins here.
            </p>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE LIST --- */}
      <section className="disciplines-list-section">
        <div className="list-container">
          {danceStyles.map((style, index) => (
            <div 
              key={index} 
              className={`discipline-row reveal fade-left delay-${index}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={() => setActiveStyle(style)}
            >
              <div className="row-content">
                <span className="row-id">{style.id}</span>
                <div className="row-main">
                  <h2>{style.name}</h2>
                  <span className="row-tag">{style.tag}</span>
                </div>
                <p className="row-short-info">{style.shortInfo}</p>
                <div className="row-plus">+</div>
              </div>
              <div className="row-hover-line"></div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TECHNICAL DETAILS OVERLAY --- */}
      {activeStyle && (
        <div className="style-modal-overlay" onClick={() => setActiveStyle(null)}>
          <div className="style-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveStyle(null)}>CLOSE [X]</button>
            
            <div className="modal-grid">
              <div className="modal-left">
                <span className="m-tag">{activeStyle.tag}</span>
                <h2 className="m-title">{activeStyle.name}</h2>
                <div className="m-separator"></div>
                <p className="m-lore">{activeStyle.detailedLore}</p>
                
                <div className="syllabus-box">
                  <h4>SYLLABUS FOCUS</h4>
                  <ul>
                    {activeStyle.syllabus.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>

              <div className="modal-right">
                <div className="m-image-frame">
                  <img src={activeStyle.bgImage} alt={activeStyle.name} />
                </div>
                <div className="m-req-box">
                  <h4>TECHNICAL REQUIREMENTS</h4>
                  <ul>
                    {activeStyle.requirements.map((req, i) => <li key={i}>{req}</li>)}
                  </ul>
                  <button className="enroll-btn-modal" onClick={() => window.location.href='/enroll'}>
                    SECURE YOUR PLACE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER DECOR --- */}
      <div className="disciplines-footer-line">
        <div className="line-text">FOOTWORX DANCE CENTRE // TECHNICAL EXCELLENCE SINCE 2011</div>
      </div>
    </div>
  );
};

export default Disciplines;