import React from 'react';
import './App.css';

// Importing components from the components directory
import Header from './components/Header';
import Footer from './components/Footer';
import FoodMenu from './components/FoodMenu';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h1>Welcome to My React App</h1>
        <FoodMenu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
