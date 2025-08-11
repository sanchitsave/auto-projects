import React from 'react';
import './App.css';

const menuItems = [
  { name: 'Pizza', price: '$10' },
  { name: 'Burger', price: '$7' },
  { name: 'Pasta', price: '$8' },
  { name: 'Salad', price: '$6' },
];

function FoodMenu() {
  return (
    <section className="menu">
      <h2>Food Menu</h2>
      <ul>
        {menuItems.map((item, idx) => (
          <li key={idx} className="menu-item">
            <span>{item.name}</span> <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FoodMenu;
