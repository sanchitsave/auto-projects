import React from 'react';

function MenuItem({ label, onClick }) {
  return (
    <button className="menu-item" onClick={onClick}>
      {label}
    </button>
  );
}

export default MenuItem;
