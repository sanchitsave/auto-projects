import React from 'react';
import flowers from '../data/flowers';
import FlowerItem from './FlowerItem';

function FlowerList() {
  return (
    <div className="flower-list">
      {flowers.map(flower => (
        <FlowerItem key={flower.id} flower={flower} />
      ))}
    </div>
  );
}

export default FlowerList;
