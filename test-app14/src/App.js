import React from 'react';
import './App.css';

const carData = [
  { id: 1, name: 'Toyota Camry', price: '$24,000' },
  { id: 2, name: 'Honda Accord', price: '$25,000' },
  { id: 3, name: 'Tesla Model 3', price: '$38,000' },
];

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to My React App</h1>
      <h2>Car List</h2>
      <ul>
        {carData.map(car => (
          <li key={car.id} className="car-item">
            <span className="car-name">{car.name}</span> - <span className="car-price">{car.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
