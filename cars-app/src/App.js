import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content-with-sidenav">
        <SideNav />
        <div className="main-content">
          <h1>Welcome to My React App</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
