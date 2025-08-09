import React from 'react';
import './App.css';

const menu = [
  { name: 'Pizza', price: '$10' },
  { name: 'Burger', price: '$7' },
  { name: 'Pasta', price: '$9' },
  { name: 'Salad', price: '$6' },
  { name: 'Sushi', price: '$12' },
];

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to My React App</h1>
      <h2>Food Menu</h2>
      <ul className="menu-list">
        {menu.map((item, idx) => (
          <li key={idx} className="menu-item">
            <span>{item.name}</span> <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
