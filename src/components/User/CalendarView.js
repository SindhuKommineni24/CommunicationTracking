// src/components/User/CalendarView.js
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; // For basic calendar styles
import './CalendarView.css'; // Create this CSS file to center the calendar

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddEvent = () => {
    if (selectedDate) {
      const eventDescription = prompt('Enter event description:');
      if (eventDescription) {
        setEvents((prevEvents) => [
          ...prevEvents,
          { date: selectedDate, description: eventDescription }
        ]);
      }
    } else {
      alert('Please select a date first.');
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar-box">
        <h2>Calendar</h2>
        <DayPicker selected={selectedDate} onDayClick={handleDateChange} />
        <button className="add-event-btn" onClick={handleAddEvent}>
          Add Event
        </button>
      </div>

      {/* Display events for the selected date */}
      {selectedDate && (
        <div className="events">
          <h3>Events on {selectedDate.toLocaleDateString()}:</h3>
          <ul>
            {events
              .filter((event) => event.date.toLocaleDateString() === selectedDate.toLocaleDateString())
              .map((event, index) => (
                <li key={index}>{event.description}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
