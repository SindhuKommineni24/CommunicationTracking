// src/context/NotificationContext.js

import React, { createContext, useContext, useState } from 'react';

// Create a Context for Notifications
const NotificationContext = createContext();

// Custom hook to use notifications
export const useNotifications = () => {
  return useContext(NotificationContext);
};

// NotificationProvider component to wrap around your app
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Add a notification
  const addNotification = (message) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id: Date.now(), message },
    ]);
  };

  // Remove a notification
  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
