import React from 'react';
import './Footer.css';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>FOOTWORX<span>.</span></h3>
          <p>Excellence in dance education since 2011.</p>
        </div>
        
        <div className="footer-info">
          <div className="info-item">
            <MapPin size={18} />
            <span>Wimble Cl, Ballito, Durban, 4420 (Richard Park)</span>
          </div>
          <div className="info-item">
            <Phone size={18} />
            <span>082 560 7861</span>
          </div>
        </div>

        <div className="footer-socials">
          <a href="#"><Instagram size={20} /></a>
          <a href="#"><Facebook size={20} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FootworX Dance Centre. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;