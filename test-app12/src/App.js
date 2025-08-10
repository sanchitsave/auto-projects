import React from 'react';
import './App.css';

const carData = [
  { name: 'Toyota Camry', price: '$24,000' },
  { name: 'Honda Accord', price: '$26,000' },
  { name: 'Tesla Model 3', price: '$39,990' },
  { name: 'Ford Mustang', price: '$27,155' },
];

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to My React App</h1>
      <h2>Available Cars</h2>
      <ul className="car-list">
        {carData.map((car, index) => (
          <li key={index} className="car-item">
            <span className="car-name">{car.name}</span> - <span className="car-price">{car.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
