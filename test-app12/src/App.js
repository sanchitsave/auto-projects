import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '3rem' }}>
      <Header />
      <main style={{ padding: '2rem 1rem 4rem 1rem' }}>
        <h2>Main Content</h2>
        <p>This is the main body of test-app12. Start building your app!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
