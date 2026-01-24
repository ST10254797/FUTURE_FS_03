import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Adds a background color when you scroll down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
<Link to="/" className="nav-logo">
  <img src="/logo.png" alt="FootworX Logo" />
  <div className="logo-text">
    <span className="brand-name">FOOTWORX</span>
    <span className="brand-sub">DANCE CENTRE</span>
  </div>
</Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/disciplines">Disciplines</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>

        <Link to="/enroll" className="nav-cta">Enroll Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;