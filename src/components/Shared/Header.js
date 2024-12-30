import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';



function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/logo.png" alt="Company Logo" />
        <h1>Company Dashboard</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
