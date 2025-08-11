import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Cars App</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/cars">Cars</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
