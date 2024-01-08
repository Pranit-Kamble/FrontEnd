// Footer.js

import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-social">
        <a href="https://www.instagram.com/pranit0134/" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/pranit-kamble-1463281a8/" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/Pranit-Kamble" target="_blank" rel="noopener noreferrer">
        <i className="uil uil-github"></i>
        </a>
      </div>
      <div className="footer-copyright">
        &copy; 2023 Pranit-Blog . All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
