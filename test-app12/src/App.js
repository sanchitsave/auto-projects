import React from 'react';
import './App.css';
import PlanePrices from './components/PlanePrices';

function App() {
  // Sample old data for demonstration (preserved as per instructions)
  const oldData = [
    { name: 'John Doe', value: 42 },
    { name: 'Jane Smith', value: 37 },
  ];

  return (
    <div className="App">
      <h1>Welcome to Plane Info Dashboard</h1>
      <section>
        <h2>Old Data</h2>
        <ul>
          {oldData.map((item, idx) => (
            <li key={idx}>
              {item.name}: {item.value}
            </li>
          ))}
        </ul>
      </section>
      <PlanePrices />
    </div>
  );
}

export default App;
