import React from 'react';
import './Menu.css';

const menuItems = [
  { id: 1, name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella, and basil.', price: '$10.99' },
  { id: 2, name: 'Caesar Salad', description: 'Romaine, parmesan, homemade croutons, and Caesar dressing.', price: '$8.99' },
  { id: 3, name: 'Spaghetti Carbonara', description: 'Pasta with pancetta, egg, pecorino cheese, and black pepper.', price: '$12.99' },
  { id: 4, name: 'Grilled Salmon', description: 'Fresh salmon fillet with lemon butter sauce.', price: '$16.99' },
  { id: 5, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.', price: '$6.99' }
];

function Menu() {
  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <ul className="menu-list">
        {menuItems.map(item => (
          <li key={item.id} className="menu-item">
            <div className="menu-title-price">
              <span className="menu-name">{item.name}</span>
              <span className="menu-price">{item.price}</span>
            </div>
            <p className="menu-description">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
