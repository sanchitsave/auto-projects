import React, { useState } from 'react';

const defaultFormState = {
  name: '',
  description: '',
  price: '',
  category: '',
  newCategory: '',
};

function AddItemForm({ onAdd, categories }) {
  const [form, setForm] = useState(defaultFormState);
  const [showNewCategory, setShowNewCategory] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if(name === 'category' && value === '_new_') setShowNewCategory(true);
    if(name === 'category' && value !== '_new_') setShowNewCategory(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.price || (!form.category && !form.newCategory)) return;
    const category = form.category === '_new_' ? form.newCategory : form.category;
    onAdd({
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
      category: category,
    });
    setForm(defaultFormState);
    setShowNewCategory(false);
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
        type="number"
        min="0"
        step="0.01"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        required={!showNewCategory}
      >
        <option value="" disabled>
          Choose category
        </option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
        <option value="_new_">Add new category…</option>
      </select>
      {showNewCategory && (
        <input
          name="newCategory"
          placeholder="New category name"
          value={form.newCategory}
          onChange={handleChange}
          required
        />
      )}
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
