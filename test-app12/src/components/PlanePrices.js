import React from 'react';
import './PlanePrices.css';

const samplePlanes = [
  { id: 1, model: 'Boeing 747', price: 379000000 },
  { id: 2, model: 'Airbus A380', price: 445000000 },
  { id: 3, model: 'Cessna 172', price: 370000 },
  { id: 4, model: 'Gulfstream G650', price: 65000000 },
];

const PlanePrices = () => {
  return (
    <div className="plane-prices">
      <h2>Plane Prices</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {samplePlanes.map((plane) => (
            <tr key={plane.id}>
              <td>{plane.model}</td>
              <td>${plane.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanePrices;
