import React from 'react';

const samplePlanePrices = [
  { model: 'Boeing 737', price: '$90M' },
  { model: 'Airbus A320', price: '$100M' },
  { model: 'Bombardier CRJ900', price: '$48M' },
  { model: 'Embraer E190', price: '$52M' }
];

function PlanePrices() {
  return (
    <div style={{ margin: '2rem 0' }}>
      <h2>Plane Prices</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Model</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {samplePlanePrices.map((plane, idx) => (
            <tr key={plane.model}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{plane.model}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{plane.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanePrices;
