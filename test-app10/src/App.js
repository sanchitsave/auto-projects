import React from 'react';
import FlowerList from './components/FlowerList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🌸 Flower Shop</h1>
        <p>Browse and select from our lovely collection of flowers!</p>
      </header>
      <FlowerList />
    </div>
  );
}

export default App;
