import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = [
    { id: 1, category: 'Ballet', src: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=2070&auto=format&fit=crop', size: 'tall' },
    { id: 2, category: 'Contemporary', src: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=1974&auto=format&fit=crop', size: 'wide' },
    { id: 3, category: 'Hip Hop', src: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070&auto=format&fit=crop', size: 'small' },
    { id: 4, category: 'Modern & Jazz', src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1887&auto=format&fit=crop', size: 'tall' },
    { id: 5, category: 'Ballet', src: 'data:image/jpeg;base64,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', size: 'small' },
    { id: 6, category: 'Hip Hop', src: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2070&auto=format&fit=crop', size: 'wide' },
    { id: 7, category: 'Contemporary', src: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1935&auto=format&fit=crop', size: 'tall' }
  ];

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="gallery-page dark-theme">
      {/* IMPROVED HEADER */}
      <section className="gallery-hero">
        <div className="container">
          <div className="title-wrapper">
            <span className="eyebrow">// Capturing Motion</span>
            <h1 className="display-title">THE VISUAL <br/><span>ARCHIVE.</span></h1>
            <div className="title-line"></div>
          </div>
          
          <div className="filter-bar">
            {['All', 'Ballet', 'Contemporary', 'Hip Hop', 'Modern & Jazz'].map(cat => (
              <button 
                key={cat} 
                className={filter === cat ? 'active' : ''} 
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="gallery-grid-section">
        <div className="container masonry-grid">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`grid-item ${photo.size}`}
              onClick={() => setSelectedImg(photo.src)}
              style={{ '--delay': index * 0.1 + 's' }}
            >
              <img src={photo.src} alt={photo.category} loading="lazy" />
              <div className="img-overlay">
                <div className="overlay-content">
                  <span className="photo-cat">{photo.category}</span>
                  <div className="view-btn">Full View +</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
          <button className="close-lightbox" onClick={() => setSelectedImg(null)}>&times;</button>
          <div className="lightbox-content">
            <img src={selectedImg} alt="Enlarged" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;