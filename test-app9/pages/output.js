import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OutputPage = () => (
  <>
    <Header />
    <main style={{ padding: '2rem', minHeight: '60vh' }}>
      {/* Your output page content here */}
      <h2>Output Page</h2>
      <p>This is the output content, wrapped with Header and Footer.</p>
    </main>
    <Footer />
  </>
);

export default OutputPage;
