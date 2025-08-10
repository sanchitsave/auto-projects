import React from 'react';

function MenuItem({ item, onEdit, onDelete }) {
  return (
    <div className="menu-item">
      <div className="menu-item-info">
        <strong>{item.name}</strong>
        <p>{item.description}</p>
        <span>${item.price.toFixed(2)}</span>
      </div>
      <div className="menu-item-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default MenuItem;
