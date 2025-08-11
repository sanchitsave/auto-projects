import React from 'react';
import NavigationBar from '../components/NavigationBar';

const About = () => {
  return (
    <div>
      <NavigationBar />
      <main style={{ padding: '2rem' }}>
        <h1>About Us</h1>
        <p>This page provides information about the parth-test project.</p>
      </main>
    </div>
  );
};

export default About;
