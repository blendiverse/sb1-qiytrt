import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { roomId } = location.state || {};

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { roomId, checkIn, checkOut });
    // Redirect to a confirmation page or show a success message
    alert('Booking successful!');
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book Your Stay</h1>
      <form onSubmit={handleBooking} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="roomId" className="block text-gray-700 font-bold mb-2">Room</label>
          <input
            type="text"
            id="roomId"
            value={`Room ${roomId}`}
            disabled
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkIn" className="block text-gray-700 font-bold mb-2">Check-in Date</label>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={new Date()}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="checkOut" className="block text-gray-700 font-bold mb-2">Check-out Date</label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;