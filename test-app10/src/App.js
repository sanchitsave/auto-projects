import React, { useState } from 'react';
import HotelList from './components/HotelList';
import HotelBooking from './components/HotelBooking';
import hotels from './data/hotels';

function App() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookingInfo, setBookingInfo] = useState(null);

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
    setBookingInfo(null); // Reset booking info when selecting a new hotel
  };

  const handleBooking = (info) => {
    setBookingInfo(info);
  };

  return (
    <div className="App">
      <h1>Hotel Booking App</h1>
      <div className="main-content">
        <HotelList hotels={hotels} onSelectHotel={handleSelectHotel} />
        <HotelBooking 
          hotel={selectedHotel} 
          onBooking={handleBooking} 
          bookingInfo={bookingInfo}
        />
      </div>
    </div>
  );
}

export default App;
