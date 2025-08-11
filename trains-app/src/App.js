import React from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <h1>Welcome to My React App</h1>
        <div className="button-group">
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
