import React, { useState } from 'react';
import './Menu.css';

const menuItems = [
  { id: 1, name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella, and basil.', price: '$10.99' },
  { id: 2, name: 'Caesar Salad', description: 'Romaine, parmesan, homemade croutons, and Caesar dressing.', price: '$8.99' },
  { id: 3, name: 'Spaghetti Carbonara', description: 'Pasta with pancetta, egg, pecorino cheese, and black pepper.', price: '$12.99' },
  { id: 4, name: 'Grilled Salmon', description: 'Fresh salmon fillet with lemon butter sauce.', price: '$16.99' },
  { id: 5, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.', price: '$6.99' },
  // Add more items to demonstrate pagination,
  { id: 6, name: 'Chicken Alfredo', description: 'Creamy alfredo sauce tossed with grilled chicken and pasta.', price: '$13.99' },
  { id: 7, name: 'Bruschetta', description: 'Grilled bread garlic, tomatoes, olive oil, and basil.', price: '$7.49' },
  { id: 8, name: 'Greek Salad', description: 'Fresh vegetables, feta cheese, kalamata olives, and house dressing.', price: '$9.49' },
  { id: 9, name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert.', price: '$5.99' },
  { id: 10, name: 'Penne Arrabbiata', description: 'Spicy tomato sauce with penne pasta.', price: '$11.49' },
  { id: 11, name: 'Garlic Bread', description: 'Crusty bread with garlic butter.', price: '$4.99' },
];

const ITEMS_PER_PAGE = 5;

function Menu() {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(menuItems.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = menuItems.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, maxPage));
  };

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <ul className="menu-list">
        {currentItems.map(item => (
          <li key={item.id} className="menu-item">
            <div className="menu-title-price">
              <span className="menu-name">{item.name}</span>
              <span className="menu-price">{item.price}</span>
            </div>
            <p className="menu-description">{item.description}</p>
          </li>
        ))}
      </ul>
      <div className="menu-pagination">
        <button className="menu-pagination-btn" onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
        <span className="menu-pagination-info">Page {currentPage} of {maxPage}</span>
        <button className="menu-pagination-btn" onClick={handleNext} disabled={currentPage === maxPage}>Next</button>
      </div>
    </div>
  );
}

export default Menu;
