import React, { useState } from 'react';
import './App.css';

const menuData = [
  {
    category: 'Appetizers',
    items: [
      { name: 'Bruschetta', price: '$7' },
      { name: 'Garlic Bread', price: '$5' },
      { name: 'Stuffed Mushrooms', price: '$8' }
    ]
  },
  {
    category: 'Main Courses',
    items: [
      { name: 'Grilled Salmon', price: '$20' },
      { name: 'Ribeye Steak', price: '$25' },
      { name: 'Pasta Primavera', price: '$18' }
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Tiramisu', price: '$9' },
      { name: 'Cheesecake', price: '$8' },
      { name: 'Chocolate Lava Cake', price: '$10' }
    ]
  }
];

function App() {
  const [menu] = useState(menuData);
  return (
    <div className="App">
      <header className="App-header">
        <h1>La Petite Cuisine</h1>
        <p className="subtitle">Welcome to My React App</p>
      </header>
      <main>
        <div className="menu-container">
          {menu.map((cat) => (
            <section key={cat.category} className="menu-category">
              <h2>{cat.category}</h2>
              <ul>
                {cat.items.map((item) => (
                  <li key={item.name} className="menu-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
