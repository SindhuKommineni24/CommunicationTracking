// src/components/Shared/Notification.js
import React from 'react';
import { useNotifications } from '../../context/NotificationContext';
import './styles/Notification.css';


const Notification = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="notification-container">
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div key={notification.id} className="notification">
            <p>{notification.message}</p>
            <button onClick={() => removeNotification(notification.id)}>Dismiss</button>
          </div>
        ))
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
};

export default Notification;
