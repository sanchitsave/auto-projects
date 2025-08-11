import React, { useState, useMemo } from 'react';
import './FoodMenu.css';
import menuData from '../data/foodMenu.json';

// Get unique categories from menuData
function getCategories(items) {
  const categories = items.map((item) => item.category || 'Other');
  return Array.from(new Set(categories));
}

const FoodMenu = () => {
  // State for category filter
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = useMemo(() => ['All', ...getCategories(menuData)], []);

  const filteredItems = useMemo(
    () =>
      selectedCategory === 'All'
        ? menuData
        : menuData.filter((item) => (item.category || 'Other') === selectedCategory),
    [selectedCategory]
  );

  return (
    <section className="food-menu">
      <div className="food-menu-header">
        <h2 className="menu-title">Our Menu</h2>
        <p className="menu-subtitle">Fresh. Delicious. Made with Passion.</p>
      </div>
      <div className="food-menu-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`food-cat-btn${selectedCategory === cat ? ' active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <ul className="food-menu-list">
        {filteredItems.map((item) => (
          <li key={item.id} className="menu-item card">
            <div className="menu-item-content">
              <div className="menu-item-header">
                <h3 className="food-name animated-fade-in">{item.name}</h3>
                <span className="food-price">${item.price}</span>
              </div>
              <p className="food-desc animated-fade-in-delay">{item.description}</p>
              <img src={item.image} alt={item.name} className="food-img" style={{maxWidth:'120px',borderRadius:'8px',marginTop:'7px'}} />
              <button className="food-order-btn btn-animated">Order</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FoodMenu;
