import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Test App 16. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
