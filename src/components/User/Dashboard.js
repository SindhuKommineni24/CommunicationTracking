// src/components/User/Dashboard.js

// Remove the unused useState import
// import { useState } from 'react'; // Remove this line

import React from 'react';
import { useNotifications } from '../../context/NotificationContext';
import './Dashboard.css';

const Dashboard = () => {
  const { notifications, addNotification, removeNotification } = useNotifications();

  // Simulated company data
  const companies = [
    { name: 'Company A', lastComms: ['LinkedIn Post', 'Email'], nextComm: 'Phone Call - 5th Jan' },
    { name: 'Company B', lastComms: ['Phone Call', 'Email'], nextComm: 'LinkedIn Post - 3rd Jan' },
  ];

  // Handling communication performed
  const handleCommunicationPerformed = (companyName) => {
    addNotification(`${companyName} communication logged.`);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="companies">
        {companies.map((company, index) => (
          <div className="company" key={index}>
            <h3>{company.name}</h3>
            <p><strong>Last Communications:</strong> {company.lastComms.join(', ')}</p>
            <p><strong>Next Scheduled Communication:</strong> {company.nextComm}</p>
            <button onClick={() => handleCommunicationPerformed(company.name)}>Log Communication</button>
          </div>
        ))}
      </div>

      <h2>Notifications</h2>
      <div className="notifications">
        {notifications.map((notification) => (
          <div className="notification" key={notification.id}>
            <p>{notification.message}</p>
            <button onClick={() => removeNotification(notification.id)}>Dismiss</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
