import React, { useState } from 'react';
import Category from './Category';
import AddItemForm from './AddItemForm';

const initialMenu = [
  {
    id: 1,
    category: 'Appetizers',
    name: 'Spring Rolls',
    description: 'Crispy rolls stuffed with vegetables.',
    price: 4.5
  },
  {
    id: 2,
    category: 'Appetizers',
    name: 'Garlic Bread',
    description: 'Grilled bread with garlic and cheese.',
    price: 3.75
  },
  {
    id: 3,
    category: 'Main Courses',
    name: 'Veggie Burger',
    description: 'Veggie patty with lettuce, tomato, and house sauce.',
    price: 8.9
  },
  {
    id: 4,
    category: 'Main Courses',
    name: 'Grilled Chicken',
    description: 'Juicy grilled chicken breast with herbs.',
    price: 11.95
  },
  {
    id: 5,
    category: 'Desserts',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with gooey center.',
    price: 5.5
  },
  {
    id: 6,
    category: 'Desserts',
    name: 'Ice Cream Sundae',
    description: 'Vanilla ice cream with toppings.',
    price: 4.25
  }
];

const categories = ['Appetizers', 'Main Courses', 'Desserts'];

function Menu() {
  const [menuItems, setMenuItems] = useState(initialMenu);
  const [editItemId, setEditItemId] = useState(null);

  const handleAddItem = (item) => {
    setMenuItems(prev => [
      ...prev,
      {
        ...item,
        id: prev.length > 0 ? Math.max(...prev.map(i => i.id)) + 1 : 1
      }
    ]);
  };

  const handleDeleteItem = (id) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const handleEditClick = (id) => {
    setEditItemId(id);
  };

  const handleCancelEdit = () => {
    setEditItemId(null);
  };

  const handleUpdateItem = (updatedItem) => {
    setMenuItems(prev => prev.map(item => item.id === updatedItem.id ? updatedItem : item));
    setEditItemId(null);
  };

  return (
    <div>
      {categories.map(cat => (
        <Category
          key={cat}
          category={cat}
          items={menuItems.filter(item => item.category === cat)}
          onDelete={handleDeleteItem}
          onEdit={handleEditClick}
          onUpdate={handleUpdateItem}
          editingId={editItemId}
          onCancelEdit={handleCancelEdit}
        />
      ))}
      <AddItemForm categories={categories} onAddItem={handleAddItem} />
    </div>
  );
}

export default Menu;
