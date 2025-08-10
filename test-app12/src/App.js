import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <p>This is the main content of the app.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
