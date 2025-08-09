import React, { useState } from 'react';
import Category from './Category';
import AddItemForm from './AddItemForm';

const initialMenuData = [
  {
    id: 1,
    category: 'Appetizers',
    name: 'Spring Rolls',
    description: 'Crispy rolls stuffed with veggies.',
    price: 5.99,
  },
  {
    id: 2,
    category: 'Appetizers',
    name: 'Garlic Bread',
    description: 'Slices of bread with garlic and cheese.',
    price: 4.49,
  },
  {
    id: 3,
    category: 'Main Courses',
    name: 'Grilled Chicken',
    description: 'Served with a side of veggies.',
    price: 12.99,
  },
  {
    id: 4,
    category: 'Main Courses',
    name: 'Veggie Pasta',
    description: 'Pasta tossed in tomato sauce and veggies.',
    price: 11.49,
  },
  {
    id: 5,
    category: 'Desserts',
    name: 'Chocolate Lava Cake',
    description: 'Molten chocolate cake with ice cream.',
    price: 6.99,
  },
  {
    id: 6,
    category: 'Desserts',
    name: 'Fruit Salad',
    description: 'Seasonal fruits with honey.',
    price: 5.50,
  },
];

function Menu() {
  const [menuItems, setMenuItems] = useState(initialMenuData);
  const categories = [...new Set(menuItems.map(item => item.category))];

  // CRUD HANDLERS
  const handleAdd = (item) => {
    setMenuItems([...menuItems, { ...item, id: Date.now() }]);
  };

  const handleUpdate = (editedItem) => {
    setMenuItems(menuItems.map(item => (item.id === editedItem.id ? editedItem : item)));
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <div className="menu-container">
      <AddItemForm onAdd={handleAdd} categories={categories} />
      {categories.map(category => (
        <Category
          key={category}
          title={category}
          items={menuItems.filter(item => item.category === category)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Menu;
