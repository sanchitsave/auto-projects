import React from 'react';
import './SideNav.css';

const SideNav = () => {
  return (
    <nav className="side-nav">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/trucks">Trucks</a></li>
        <li><a href="/drivers">Drivers</a></li>
        <li><a href="/routes">Routes</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  );
};

export default SideNav;
