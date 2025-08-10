import React from 'react';
import FlowerList from './components/FlowerList';
import flowers from './data/flowers';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🌸 Flower Shop</h1>
      </header>
      <main>
        <FlowerList flowers={flowers} />
      </main>
    </div>
  );
}

export default App;
