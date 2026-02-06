import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Background Story & Data
  const archivePhotos = [
    { id: 1, category: 'Ballet', src: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2000&auto=format&fit=crop', size: 'tall', story: 'Precision in the Ballito sunlight. Captured during the 2025 Summer Intensive.' },
    { id: 2, category: 'Contemporary', src: 'https://media.istockphoto.com/id/1148049091/photo/young-beautiful-dancer-dancing-on-gray-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=EYHEB_RgvV5KMLMtZ-yFVaYlEpBE7i2nY14ROOH6Qzo=', size: 'wide', story: 'Fluidity in motion. An exploration of gravity and emotional release.' },
    { id: 3, category: 'Hip Hop', src: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2000&auto=format&fit=crop', size: 'standard', story: 'Raw energy. The rhythm of the Durban streets translated to the studio floor.' },
    { id: 4, category: 'Modern & Jazz', src: 'https://images.unsplash.com/photo-1524580477099-d6ef682e2a2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D', size: 'tall', story: 'Angular dynamics and theatrical soul. Defining the Broadway aesthetic.' },
    { id: 5, category: 'Ballet', src: 'https://media.istockphoto.com/id/1135143424/photo/ballet-class-on-the-stage-of-the-theater-with-light-and-smoke-children-are-engaged-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=qdkGmuwk1N1S8waqnIShDgCzxegST0OH6dSVetFUQMg=', size: 'standard', story: 'The foundation of discipline. Every movement is a calculated masterpiece.' },
    { id: 6, category: 'Hip Hop', src: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2000&auto=format&fit=crop', size: 'wide', story: 'Synchronized power. When the beat and the body become one architecture.' },
    { id: 7, category: 'Contemporary', src: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=2000&auto=format&fit=crop', size: 'tall', story: 'Ethereal leaps. Exploring the silent spaces between movements.' },
    { id: 8, category: 'Modern & Jazz', src: 'https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVybiUyMGRhbmNlfGVufDB8fDB8fHww', size: 'wide', story: 'The glow of performance. Capturing the heat of the stage lights.' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for scroll reveals
    const observers = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.15 });
    observers.forEach(el => observer.observe(el));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredPhotos = filter === 'All' ? archivePhotos : archivePhotos.filter(p => p.category === filter);

  return (
    <div className={`gallery-master ${isScrolled ? 'scrolled' : ''}`}>
      
      {/* --- CINEMATIC HEADER --- */}
      <section className="gallery-header-section">
        <div className="header-inner">
          <div className="header-content reveal fade-up">
            <span className="archive-tag">SINCE 2011 // BALLITO</span>
            <h1 className="archive-title">
              THE VISUAL <br />
              <span className="outline-text">ARCHIVE.</span>
            </h1>
            <div className="archive-meta">
              <p>A curated collection of human architecture. Every frame captures the 13-year legacy of FootworX Dance Centre's pursuit of technical perfection.</p>
              <div className="meta-stats">
                <div className="m-stat"><span>13</span> YEARS</div>
                <div className="m-stat"><span>850+</span> ALUMNI</div>
                <div className="m-stat"><span>∞</span> PASSION</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED FILM STRIP --- */}
      <section className="film-strip-section reveal fade-up">
        <div className="strip-track">
          <div className="strip-item"><img src="https://media.istockphoto.com/id/1148049091/photo/young-beautiful-dancer-dancing-on-gray-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=EYHEB_RgvV5KMLMtZ-yFVaYlEpBE7i2nY14ROOH6Qzo=" alt="f1" /></div>
          <div className="strip-item"><img src="https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=2000&auto=format&fit=crop" alt="f2" /></div>
          <div className="strip-item"><img src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2000&auto=format&fit=crop" alt="f3" /></div>
          <div className="strip-item"><img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2000&auto=format&fit=crop" alt="f4" /></div>
        </div>
      </section>

      {/* --- NAVIGATION & FILTER --- */}
      <nav className="gallery-navigation">
        <div className="nav-container">
          <div className="category-filters">
            {['All', 'Ballet', 'Contemporary', 'Hip Hop', 'Modern & Jazz'].map(cat => (
              <button 
                key={cat} 
                className={`filter-link ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
                <span className="link-dot"></span>
              </button>
            ))}
          </div>
          <div className="nav-indicator">
            CURRENT SELECTION / {filter.toUpperCase()}
          </div>
        </div>
      </nav>

      {/* --- ARCHIVE GRID --- */}
      <section className="archive-grid-wrapper">
        <div className="bento-container">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`archive-item reveal scale-in ${photo.size}`}
              onClick={() => setSelectedImg(photo)}
              style={{ '--delay': index * 0.15 + 's' }}
            >
              <div className="image-wrapper">
                <img src={photo.src} alt={photo.category} loading="lazy" />
                <div className="hover-info">
                  <div className="h-top">
                    <span className="h-cat">{photo.category}</span>
                    <span className="h-year">EST 2011</span>
                  </div>
                  <div className="h-bottom">
                    <p>{photo.story}</p>
                    <span className="view-link">EXPAND VIEW [+]</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER STORY --- */}
      <section className="archive-outro reveal fade-up">
        <div className="outro-inner">
          <h2>Every frame <br/><span>is a testament.</span></h2>
          <p>The archive grows with every leap. We don't just teach dance; we create moments that last long after the music stops.</p>
          <button className="book-btn">BOOK A PRIVATE SHOOT</button>
        </div>
      </section>

      {/* --- LUXURY LIGHTBOX --- */}
      {selectedImg && (
        <div className="luxury-lightbox" onClick={() => setSelectedImg(null)}>
          <div className="lb-header">
            <span className="lb-tag">{selectedImg.category}</span>
            <button className="lb-close">CLOSE [X]</button>
          </div>
          <div className="lb-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImg.src} alt="Selected" />
            <div className="lb-info">
              <h3>MOTION ARCHIVE REF: 0{selectedImg.id}</h3>
              <p>{selectedImg.story}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;