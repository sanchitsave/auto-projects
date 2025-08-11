import React from 'react';
import './FoodMenu.css';

const menuItems = [
  { id: 1, name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella, and basil.', price: 10 },
  { id: 2, name: 'Veggie Burger', description: 'Delicious veggie patty with lettuce, tomato, and sauce.', price: 8 },
  { id: 3, name: 'Pasta Alfredo', description: 'Creamy alfredo sauce tossed with fettuccine.', price: 12 },
  { id: 4, name: 'Caesar Salad', description: 'Crisp romaine with tangy Caesar dressing.', price: 7 },
];

const FoodMenu = () => {
  return (
    <section className="food-menu">
      <h2>Our Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id} className="menu-item">
            <h3>{item.name} <span className="price">${item.price}</span></h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FoodMenu;
