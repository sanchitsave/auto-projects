import React, { useState } from 'react';

function MenuItem({ item, onUpdate, onDelete }) {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    name: item.name,
    description: item.description,
    price: item.price,
  });

  // Handle inline edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'price' ? parseFloat(value) : value });
  };
  const handleEdit = () => setEditMode(true);
  const handleCancel = () => {
    setEditMode(false);
    setForm({ name: item.name, description: item.description, price: item.price });
  };
  const handleSave = () => {
    onUpdate({ ...item, ...form });
    setEditMode(false);
  };

  return (
    <li className="menu-item">
      {!editMode ? (
        <div className="item-details">
          <div className="item-name">{item.name}</div>
          <div className="item-description">{item.description}</div>
        </div>
      ) : (
        <div className="item-details">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ marginBottom: 2, width: '120px' }}
          />
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            style={{ marginBottom: 2, width: '140px', marginLeft: 4 }}
          />
        </div>
      )}
      <div className="item-price">
        {editMode ? (
          <input
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            style={{ width: '56px' }}
            required
          />
        ) : (
          <span>${item.price.toFixed(2)}</span>
        )}
      </div>
      <div className="item-actions">
        {!editMode ? (
          <>
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={() => onDelete(item.id)}>Delete</button>
          </>
        ) : (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
