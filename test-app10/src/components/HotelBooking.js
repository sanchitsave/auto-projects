import React, { useState } from 'react';

function HotelBooking({ hotel, onBooking, bookingInfo }) {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [dates, setDates] = useState('');

  if (!hotel) {
    return (
      <div className="hotel-booking">
        <h2>Hotel Booking</h2>
        <p>Select a hotel to book.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onBooking({ hotel, name, guests, dates });
    setName('');
    setGuests(1);
    setDates('');
  };

  return (
    <div className="hotel-booking">
      <h2>Booking for {hotel.name}</h2>
      {bookingInfo ? (
        <div className="confirmation">
          <h3>Booking Confirmed!</h3>
          <p>Thank you, {bookingInfo.name}!</p>
          <p>
            {bookingInfo.guests} guest(s) for {bookingInfo.dates}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Your Name: </label>
            <input 
              type="text" 
              required 
              value={name} 
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Guests: </label>
            <input 
              type="number" 
              min="1" 
              max="10" 
              value={guests} 
              onChange={e => setGuests(e.target.value)}
            />
          </div>
          <div>
            <label>Dates: </label>
            <input 
              type="text" 
              placeholder="e.g. 2024-07-01 to 2024-07-05" 
              required
              value={dates}
              onChange={e => setDates(e.target.value)}
            />
          </div>
          <button type="submit">Book Now</button>
        </form>
      )}
    </div>
  );
}

export default HotelBooking;
