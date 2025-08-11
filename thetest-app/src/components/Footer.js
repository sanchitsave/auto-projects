import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="app-footer">
    <small>&copy; {new Date().getFullYear()} TheTest App. All rights reserved.</small>
  </footer>
);

export default Footer;
