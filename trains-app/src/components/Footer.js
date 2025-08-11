import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#dcdde1', color: '#353b48', textAlign: 'center', padding: '12px 0', position: 'fixed', width: '100%', bottom: 0 }}>
      &copy; {new Date().getFullYear()} Trains App. All rights reserved.
    </footer>
  );
}

export default Footer;
