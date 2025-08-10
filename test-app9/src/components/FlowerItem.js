import React from 'react';

function FlowerItem({ flower }) {
  return (
    <div className="flower-item">
      <img src={flower.image} alt={flower.name} className="flower-image" />
      <div className="flower-content">
        <h2>{flower.name}</h2>
        <p className="description">{flower.description}</p>
        <div className="price">${flower.price.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default FlowerItem;
