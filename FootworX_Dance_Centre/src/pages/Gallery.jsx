import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const photos = [
    { 
      id: 1, 
      category: 'Ballet', 
      src: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=2070&auto=format&fit=crop', 
      size: 'tall' 
    },
    { 
      id: 2, 
      category: 'Contemporary', 
      src: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=1974&auto=format&fit=crop', 
      size: 'wide' 
    },
    { 
      id: 3, 
      category: 'Hip Hop', 
      src: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070&auto=format&fit=crop', 
      size: 'small' 
    },
    { 
      id: 4, 
      category: 'Modern & Jazz', 
      src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1887&auto=format&fit=crop', 
      size: 'tall' 
    },
    { 
      id: 5, 
      category: 'Ballet', 
      src: 'https://t3.ftcdn.net/jpg/04/85/60/70/360_F_485607028_2JW8GkFoJjdZFS4RcRwPuRBSBLpNMwzK.jpg', 
      size: 'small' 
    },
    { 
      id: 6, 
      category: 'Hip Hop', 
      src: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2070&auto=format&fit=crop', 
      size: 'wide' 
    },
    { 
      id: 7, 
      category: 'Contemporary', 
      src: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1935&auto=format&fit=crop', 
      size: 'tall' 
    }
  ];

  const filteredPhotos = filter === 'All' 
    ? photos 
    : photos.filter(p => p.category === filter);

  return (
    <div className="gallery-page dark-theme">
      {/* HEADER SECTION */}
      <section className="gallery-hero">
        <div className="container">
          <span className="accent-text">// Visuals</span>
          <h1 className="huge-title">STUDIO <br/>GALLERY<span>.</span></h1>
          
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

      {/* MASONRY GRID SECTION */}
      <section className="gallery-grid-section">
        <div className="container masonry-grid">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className={`grid-item ${photo.size}`}>
              <img src={photo.src} alt={photo.category} loading="lazy" />
              <div className="img-overlay">
                <div className="overlay-content">
                  <span className="photo-cat">{photo.category}</span>
                  <div className="view-btn">View Full</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;