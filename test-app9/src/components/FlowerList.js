import React from 'react';
import FlowerItem from './FlowerItem';

function FlowerList({ flowers }) {
  return (
    <div className="flower-list">
      {flowers.map(flower => (
        <FlowerItem key={flower.id} flower={flower} />
      ))}
    </div>
  );
}

export default FlowerList;
