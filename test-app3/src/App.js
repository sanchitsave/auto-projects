import React, { useState } from 'react';
import './App.css';

const menuData = [
  {
    category: 'Appetizers',
    items: [
      { name: 'Bruschetta', price: '$6.99' },
      { name: 'Stuffed Mushrooms', price: '$7.49' },
      { name: 'Garlic Bread', price: '$5.99' },
    ],
  },
  {
    category: 'Main Courses',
    items: [
      { name: 'Grilled Salmon', price: '$16.99' },
      { name: 'Chicken Alfredo', price: '$15.49' },
      { name: 'Lasagna', price: '$14.99' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Tiramisu', price: '$6.49' },
      { name: 'Cheesecake', price: '$6.29' },
      { name: 'Chocolate Lava Cake', price: '$7.19' },
    ],
  },
];

function Category({ category, items }) {
  return (
    <div className="category">
      <h2>{category}</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} className="menu-item">
            <span>{item.name}</span>
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [menu] = useState(menuData);

  return (
    <div className="App">
      <header className="header">
        <h1>La Bella Cucina</h1>
        <p className="subtitle">Welcome to My React App</p>
      </header>
      <div className="menu">
        {menu.map((cat, idx) => (
          <Category key={cat.category} category={cat.category} items={cat.items} />
        ))}
      </div>
    </div>
  );
}

export default App;
