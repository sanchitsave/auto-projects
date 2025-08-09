import React, { useState } from 'react';

function AddItemForm({ categories, onAddItem }) {
  const [data, setData] = useState({
    category: categories[0],
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: name === 'price' ? value : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.description || data.price === '') return;
    onAddItem({
      ...data,
      price: parseFloat(data.price)
    });
    setData({ category: categories[0], name: '', description: '', price: '' });
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <h3>Add New Menu Item</h3>
      <label>
        Category:
        <select name="category" value={data.category} onChange={handleChange}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <label>
        Name:
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </label>
      <label>
        Description:
        <input
          name="description"
          value={data.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
      </label>
      <label>
        Price ($):
        <input
          name="price"
          type="number"
          value={data.price}
          min="0"
          step=".01"
          onChange={handleChange}
          placeholder="Price"
          required
        />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
