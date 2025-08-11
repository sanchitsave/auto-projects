import React from 'react';
import './App.css';

// Importing components (Ensure these components exist in your project)
// If not, you will need to implement them or adjust accordingly
import Header from './Header';
import Footer from './Footer';
import FoodMenu from './FoodMenu';

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
