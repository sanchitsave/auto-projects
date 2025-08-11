import React from 'react';
import './App.css';

// import Header and Footer, if available
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to My React App</h1>
      <button>Click Me</button>
      {/* Added buttons below as per request */}
      <button>Button 1</button>
      <button>Button 2</button>
      <Footer />
    </div>
  );
}

export default App;
