import React from 'react';

function HotelList({ hotels, onSelectHotel }) {
  return (
    <div className="hotel-list">
      <h2>Hotels</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <button onClick={() => onSelectHotel(hotel)}>
              <strong>{hotel.name}</strong> <br/>
              <span>{hotel.city}, {hotel.country}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
