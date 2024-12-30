// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext'; // Import NotificationProvider
import AdminDashboard from './components/Admin/AdminDashboard'; // Ensure correct import
import Dashboard from './components/User/Dashboard'; // Ensure correct import
import CalendarView from './components/User/CalendarView';
//import CalendarView from './components/User/CalendarView'; // Ensure correct import
import Header from './components/Shared/Header'; // Ensure correct import
import Footer from './components/Shared/Footer'; // Ensure correct import

function App() {
  return (
    <NotificationProvider> {/* Wrap your app with NotificationProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} /> {/* Route for Admin */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Route for Dashboard */}
          <Route path="/calendar" element={<CalendarView />} /> {/* Route for Calendar */}
        </Routes>
        <Footer />
      </Router>
    </NotificationProvider>
  );
}

export default App;
