import React from 'react';
import './SearchBar.css';

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder || 'Search tasks...'}
        aria-label="Search tasks"
      />
      <span className="search-icon" role="img" aria-label="Search">
        🔍
      </span>
    </div>
  );
}
