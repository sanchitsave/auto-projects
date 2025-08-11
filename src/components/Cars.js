import React from 'react';
import './Cars.css';

const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2022 },
  { id: 2, make: 'Honda', model: 'Civic', year: 2021 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2020 },
];

const Cars = () => {
  return (
    <div className="cars-container">
      <h2>Car List</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id} className="car-item">
            <strong>{car.year} {car.make} {car.model}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
