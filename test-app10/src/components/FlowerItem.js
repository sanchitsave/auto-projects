import React from 'react';

function FlowerItem({ flower }) {
  return (
    <div className="flower-item">
      <img src={flower.image} alt={flower.name} className="flower-img" />
      <h2>{flower.name}</h2>
      <p>{flower.description}</p>
      <span className="price">${flower.price.toFixed(2)}</span>
    </div>
  );
}

export default FlowerItem;
