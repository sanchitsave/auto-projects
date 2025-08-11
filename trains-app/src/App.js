import React from 'react';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <SideNav />
      <div style={{ flex: 1, padding: '1rem' }}>
        <h1>Welcome to My React App</h1>
      </div>
    </div>
  );
}

export default App;
