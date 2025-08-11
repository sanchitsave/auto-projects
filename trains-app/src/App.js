import React from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Header />
      <div style={{ flex: 1, padding: '1rem' }}>
        <h1>Welcome to My React App</h1>
        <div style={{ margin: '1rem 0', display: 'flex', gap: '0.5rem' }}>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
          <button>Button 4</button>
          <button>Button 5</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
