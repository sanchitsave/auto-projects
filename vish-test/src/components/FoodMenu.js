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
      <div className="food-menu-header">
        <h2 className="menu-title">Our Menu</h2>
        <p className="menu-subtitle">Fresh. Delicious. Made with Passion.</p>
      </div>
      <ul className="food-menu-list">
        {menuItems.map(item => (
          <li key={item.id} className="menu-item card">
            <div className="menu-item-content">
              <h3 className="food-name">{item.name}
                <span className="food-price">${item.price}</span>
              </h3>
              <p className="food-desc">{item.description}</p>
            </div>
            <button className="food-order-btn">Order</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FoodMenu;
