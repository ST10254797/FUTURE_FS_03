import React from 'react';
import './Disciplines.css';

const Disciplines = () => {
  const danceStyles = [
    { 
      name: 'Classical Ballet', 
      tag: 'Poise & Precision', 
      info: 'The foundation of all technical dance. We focus on the Vaganova method to build unmatched strength and discipline.' 
    },
    { 
      name: 'Contemporary', 
      tag: 'Fluidity & Soul', 
      info: 'A fusion of technical brilliance and emotional storytelling. Pushing the boundaries of traditional movement.' 
    },
    { 
      name: 'Hip Hop', 
      tag: 'Power & Rhythm', 
      info: 'Urban culture meets professional choreography. High-intensity training in street, popping, and commercial styles.' 
    },
    { 
      name: 'Modern & Jazz', 
      tag: 'Style & Dynamics', 
      info: 'Explosive energy and rhythmic complexity. Developing versatile performers with a sharp technical edge.' 
    }
  ];

  return (
    <div className="disciplines-page dark-theme">
      {/* HEADER SECTION */}
      <section className="disciplines-hero">
        <div className="container">
          <div className="header-flex">
            <span className="vertical-label">CATEGORIES</span>
            <h1 className="huge-outline">TRAINING</h1>
          </div>
          <p className="header-subtitle">Professional instruction across four core pillars of dance excellence in Ballito.</p>
        </div>
      </section>

      {/* INTERACTIVE CARDS */}
      <section className="disciplines-grid">
        <div className="container grid-wrapper">
          {danceStyles.map((style, index) => (
            <div key={index} className="discipline-card">
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
    </div>
  );
};

export default Disciplines;