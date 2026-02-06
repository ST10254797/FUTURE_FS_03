import React from 'react';
import './Footer.css';
import { Instagram, Facebook, Youtube, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="editorial-footer">
      <div className="footer-top-reveal">
        <div className="reveal-content">
          <span className="footer-label">EXPERIENCE THE MOTION</span>
          <h2 className="footer-display-title">BEYOND THE <br/><span className="outline-text">LIMITS.</span></h2>
        </div>
      </div>

      <div className="footer-main-grid">
        {/* BRAND COLUMN */}
        <div className="footer-col brand-col">
          <div className="f-logo">FOOTWORX<span>.</span></div>
          <p className="f-tagline">
            Defining the intersection of technical physics and emotional soul in Ballito since 2011.
          </p>
          <div className="f-socials">
            <a href="#" className="s-link"><Instagram size={18} /></a>
            <a href="#" className="s-link"><Facebook size={18} /></a>
            <a href="#" className="s-link"><Youtube size={18} /></a>
          </div>
        </div>

        {/* NAVIGATION COLUMN */}
        <div className="footer-col">
          <h4 className="col-title">THE STUDIO</h4>
          <nav className="f-nav">
            <a href="/about">Our Story</a>
            <a href="/disciplines">Syllabus</a>
            <a href="/gallery">Visual Archive</a>
            <a href="/schedule">Class Timetable</a>
          </nav>
        </div>

        {/* CONTACT COLUMN */}
        <div className="footer-col">
          <h4 className="col-title">LOCATE</h4>
          <div className="f-contact">
            <div className="contact-item">
              <span className="label">ADDRESS</span>
              <p>Wimble Cl, Ballito, Durban</p>
              <p>Richard Park Industrial</p>
            </div>
            <div className="contact-item">
              <span className="label">DIRECT</span>
              <p>082 560 7861</p>
              <p>hello@footworxdance.co.za</p>
            </div>
          </div>
        </div>

        {/* NEWSLETTER COLUMN */}
        <div className="footer-col newsletter-col">
          <h4 className="col-title">STAY IN MOTION</h4>
          <p className="news-desc">Join our mailing list for performance updates and technical insights.</p>
          <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="YOUR EMAIL ADDRESS" />
            <button type="submit"><ArrowRight size={20} /></button>
          </form>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="copyright">
          &copy; {new Date().getFullYear()} FOOTWORX DANCE CENTRE // ALL RIGHTS RESERVED.
        </div>
        <div className="legal-links">
          <span>PRIVACY</span>
          <span>TERMS</span>
          <span>SITEMAP</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;