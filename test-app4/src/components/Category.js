import React from 'react';
import MenuItem from './MenuItem';

function Category({ category, items, onDelete, onEdit, onUpdate, editingId, onCancelEdit }) {
  return (
    <div className="menu-category">
      <div className="category-title">{category}</div>
      {items.length === 0 && <div style={{color:'#adadad',marginBottom:'18px'}}>No items in this category.</div>}
      {items.map(item => (
        <MenuItem
          key={item.id}
          item={item}
          onDelete={() => onDelete(item.id)}
          onEdit={() => onEdit(item.id)}
          onUpdate={onUpdate}
          editing={editingId === item.id}
          onCancelEdit={onCancelEdit}
        />
      ))}
    </div>
  );
}

export default Category;
