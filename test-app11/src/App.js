import React, { useState } from 'react';
import FlowerList from './components/FlowerList';
import Cart from './components/Cart';
import flowers from './data/flowers';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = flower => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === flower.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === flower.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...flower, quantity: 1 }];
      }
    });
  };

  const removeFromCart = id => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Flower Shop</h1>
      <div className="main-content">
        <FlowerList flowers={flowers} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
