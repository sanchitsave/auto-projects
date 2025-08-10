import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OutputPage = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '3rem', boxSizing: 'border-box' }}>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>This is the output page content.</h2>
        <p>Anything can go here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default OutputPage;
