import React from 'react';
import './SideNav.css';

const SideNav = () => {
  return (
    <nav className="sidenav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cars">Cars</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default SideNav;
