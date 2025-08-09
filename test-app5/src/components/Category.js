import React from 'react';
import MenuItem from './MenuItem';

function Category({ title, items, onUpdate, onDelete }) {
  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      <ul className="menu-items-list">
        {items.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default Category;
