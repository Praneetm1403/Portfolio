// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          Copyright © {currentYear} <span className="highlight">Praneet Mahendrakar</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;