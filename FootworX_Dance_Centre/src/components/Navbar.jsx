import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">FOOTWORX<span>.</span></Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/curriculum">Curriculum</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
      <Link to="/enroll" className="nav-cta">Enroll Now</Link>
    </nav>
  );
};

export default Navbar;