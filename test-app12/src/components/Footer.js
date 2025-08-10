import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: '#222',
      color: '#eee',
      padding: '1rem',
      textAlign: 'center',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%'
    }}>
      <small>&copy; {new Date().getFullYear()} test-app12. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
