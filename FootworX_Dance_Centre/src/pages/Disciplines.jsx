import React, { useState } from 'react';
import './Disciplines.css';

const Disciplines = () => {
  const [activeStyle, setActiveStyle] = useState(null);

  const danceStyles = [
    { 
      name: 'Classical Ballet', 
      tag: 'Poise & Precision', 
      info: 'The foundation of all technical dance...',
      requirements: ['Ages 4+', 'Pink Leather Ballet Shoes', 'FootworX Leotard', 'Hair in Neat Bun']
    },
    { 
      name: 'Contemporary', 
      tag: 'Fluidity & Soul', 
      info: 'A fusion of technical brilliance...',
      requirements: ['Ages 10+', 'Footless Tights', 'Bare feet or Foot thongs', 'Previous Ballet experience recommended']
    },
    { 
      name: 'Hip Hop', 
      tag: 'Power & Rhythm', 
      info: 'Urban culture meets professional choreography...',
      requirements: ['Ages 6+', 'Clean Indoor Sneakers', 'Loose Athletic Wear', 'Energy & Attitude']
    },
    { 
      name: 'Modern & Jazz', 
      tag: 'Style & Dynamics', 
      info: 'Explosive energy and rhythmic complexity...',
      requirements: ['Ages 5+', 'Black Jazz Shoes', 'Tight-fitting Dance Wear', 'Technical assessment for advanced levels']
    }
  ];

  return (
    <div className="disciplines-page dark-theme">
      <section className="disciplines-hero">
        <div className="container">
          <div className="header-flex">
            <span className="vertical-label">CATEGORIES</span>
            <h1 className="huge-outline">TRAINING</h1>
          </div>
          <p className="header-subtitle">Professional instruction across four core pillars of dance excellence in Ballito.</p>
        </div>
      </section>

      <section className="disciplines-grid">
        <div className="container grid-wrapper">
          {danceStyles.map((style, index) => (
            <div key={index} className="discipline-card" onClick={() => setActiveStyle(style)}>
              <div className="card-top">
                <span className="card-index">0{index + 1}</span>
                <span className="card-tag">{style.tag}</span>
              </div>
              <div className="card-main">
                <h2>{style.name}</h2>
                <p className="card-description">{style.info}</p>
              </div>
              <div className="card-footer">
                <button className="inquiry-link">View Requirements —</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REQUIREMENTS MODAL */}
      {activeStyle && (
        <div className="modal-overlay" onClick={() => setActiveStyle(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setActiveStyle(null)}>×</button>
            <span className="modal-tag">{activeStyle.tag}</span>
            <h2>{activeStyle.name} <br/><span>Requirements</span></h2>
            <ul className="req-list">
              {activeStyle.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            <button className="modal-cta" onClick={() => window.location.href='/enroll'}>Join this Class</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Disciplines;