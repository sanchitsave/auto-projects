import React, { useState, useEffect } from 'react';

const initialForm = { name: '', description: '', price: '' };

function AddItemForm({ onAddItem, onEditItem, editingItem, onCancelEdit }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (editingItem) {
      setForm({
        name: editingItem.name,
        description: editingItem.description,
        price: editingItem.price.toString()
      });
    } else {
      setForm(initialForm);
    }
  }, [editingItem]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.description.trim() || isNaN(form.price) || form.price === '') return;
    const priceNum = parseFloat(form.price);
    const item = { ...editingItem, ...form, price: priceNum };
    if (editingItem) {
      onEditItem(item);
    } else {
      onAddItem(item);
    }
    setForm(initialForm);
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Item name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        type="number"
        min="0"
        step="0.01"
        required
      />
      <button type="submit">{editingItem ? 'Update' : 'Add'} Item</button>
      {editingItem && (
        <button type="button" className="cancel-button" onClick={onCancelEdit} style={{marginLeft: 6}}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default AddItemForm;
