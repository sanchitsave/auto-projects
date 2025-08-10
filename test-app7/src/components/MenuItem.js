import React, { useState } from 'react';

function MenuItem({ item, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(item.name);

  const handleEdit = () => setEditing(true);
  const handleCancel = () => {
    setEditing(false);
    setEditName(item.name);
  };
  const handleChange = (e) => setEditName(e.target.value);
  const handleSave = () => {
    if (editName.trim() !== '') {
      onEdit(item.id, editName);
      setEditing(false);
    }
  };

  return (
    <div className="menu-item">
      {editing ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={handleChange}
            onKeyDown={(e) => {
              if(e.key === 'Enter') handleSave();
              if(e.key === 'Escape') handleCancel();
            }}
            autoFocus
          />
          <button onClick={handleSave} title="Save">💾</button>
          <button onClick={handleCancel} title="Cancel">✖️</button>
        </>
      ) : (
        <>
          <span>{item.name}</span>
          <div>
            <button onClick={handleEdit} title="Edit">✎</button>
            <button onClick={() => onDelete(item.id)} title="Delete">🗑️</button>
          </div>
        </>
      )}
    </div>
  );
}

export default MenuItem;
