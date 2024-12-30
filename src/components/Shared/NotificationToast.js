// src/Shared/NotificationToast.js
import React, { useEffect } from 'react';
import './styles/NotificationToast.css'; // Ensure styles are correctly imported

const NotificationToast = ({ message, onClose }) => {
  // Automatically close the toast after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Close after 3 seconds

      return () => clearTimeout(timer); // Clean up the timeout on component unmount
    }
  }, [message, onClose]);

  // If no message, don't render anything
  if (!message) return null;

  return (
    <div className="toast">
      {message}
    </div>
  );
};

export default NotificationToast;

