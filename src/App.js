import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import SideNav from './components/SideNav'; // Uncomment if SideNav is needed

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React Starter App</h1>
          <p>Edit <code>src/App.js</code> and save to reload.</p>
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
