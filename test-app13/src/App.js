import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to the App!</h1>
        <p>This is the main content of the app.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
