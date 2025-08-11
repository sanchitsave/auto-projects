import React from 'react';
import './SideNav.css';

const SideNav = () => {
  return (
    <nav className="side-nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/schedules">Schedules</a></li>
        <li><a href="/stations">Stations</a></li>
        <li><a href="/tickets">Tickets</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default SideNav;
