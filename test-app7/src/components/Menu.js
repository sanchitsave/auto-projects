import React, { useState } from 'react';
import Category from './Category';
import AddItemForm from './AddItemForm';

const initialMenu = [
  { id: 1, name: 'Cheeseburger', category: 'Entrees' },
  { id: 2, name: 'Caesar Salad', category: 'Appetizers' },
  { id: 3, name: 'Chocolate Cake', category: 'Desserts' },
  { id: 4, name: 'French Fries', category: 'Sides' },
  { id: 5, name: 'Chicken Sandwich', category: 'Entrees' }
];

function Menu() {
  const [menu, setMenu] = useState(initialMenu);
  const [nextId, setNextId] = useState(initialMenu.length + 1);

  // Group items by category
  const categories = menu.reduce((acc, item) => {
    if (!acc.includes(item.category)) acc.push(item.category);
    return acc;
  }, []);

  const handleAddItem = (item) => {
    setMenu([...menu, { ...item, id: nextId }]);
    setNextId(nextId + 1);
  };

  const handleEditItem = (itemId, newName) => {
    setMenu(menu.map(item => 
      item.id === itemId ? { ...item, name: newName } : item
    ));
  };

  const handleDeleteItem = (itemId) => {
    setMenu(menu.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <AddItemForm categories={categories} onAddItem={handleAddItem} />
      {categories.map(category => (
        <Category
          key={category}
          title={category}
          items={menu.filter(item => item.category === category)}
          onEditItem={handleEditItem}
          onDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
}

export default Menu;
