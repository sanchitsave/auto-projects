import React from 'react';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of the parth-test project.</p>
      </main>
    </div>
  );
};

export default Home;
