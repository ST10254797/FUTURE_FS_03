import React from 'react';
import './Disciplines.css';

const Disciplines = () => {
  const danceStyles = [
    { name: 'Classical Ballet', info: 'The foundation of technique, poise, and strength.' },
    { name: 'Contemporary', info: 'Expressive movement merging ballet and modern dance.' },
    { name: 'Hip Hop', info: 'High-energy street dance and commercial choreography.' },
    { name: 'Modern & Jazz', info: 'Dynamic rhythmic training and technical style.' }
  ];

  return (
    <div className="disciplines-page dark-theme">
      <section className="disciplines-header">
        <div className="container">
          <span className="accent-text">// Training</span>
          <h1 className="huge-title">THE <br/>DISCIPLINES.</h1>
        </div>
      </section>

      <section className="disciplines-list">
        <div className="container">
          {danceStyles.map((style, index) => (
            <div key={index} className="style-block">
              <div className="style-header">
                <span className="style-index">0{index + 1}</span>
                <h2>{style.name}</h2>
              </div>
              <p className="style-info">{style.info}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Disciplines;