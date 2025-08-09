import React, { useState } from 'react';

function MenuItem({ item, onDelete, onEdit, editing, onUpdate, onCancelEdit }) {
  const [editData, setEditData] = useState(item);

  React.useEffect(() => {
    setEditData(item);
  }, [item, editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editData.name || !editData.description || !editData.price) return;
    onUpdate(editData);
  };

  return (
    <div className="menu-item">
      {editing ? (
        <form style={{width:'100%', display:'flex', alignItems:'center'}} onSubmit={handleSubmit}>
          <div className="menu-item-info" style={{flexGrow:1}}>
            <input
              name="name"
              value={editData.name}
              onChange={handleChange}
              required
              style={{marginBottom: 4}}
              placeholder="Name"
            />
            <input
              name="description"
              value={editData.description}
              onChange={handleChange}
              required
              style={{marginBottom: 4}}
              placeholder="Description"
            />
            <input
              name="price"
              type="number"
              min="0"
              step=".01"
              value={editData.price}
              onChange={handleChange}
              required
              style={{width:80}}
              placeholder="Price"
            />
          </div>
          <div className="menu-buttons" style={{whiteSpace:'nowrap'}}>
            <button type="submit">Save</button>
            <button type="button" onClick={onCancelEdit}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <div className="menu-item-info">
            <span className="menu-item-name">{item.name}</span>
            <span className="menu-item-price">${item.price.toFixed(2)}</span>
            <div className="menu-item-description">{item.description}</div>
          </div>
          <div className="menu-buttons">
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete} style={{color:'#e74c3c'}}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default MenuItem;
