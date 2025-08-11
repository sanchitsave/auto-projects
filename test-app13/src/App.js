import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the App</h1>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
}

export default App;
