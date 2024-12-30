// src/components/User/Notifications.js
import React from 'react';
import { useNotifications } from '../../context/NotificationContext';

const Notifications = () => {
  const { notifications } = useNotifications();

  const overdueNotifications = notifications.filter((notif) => notif.message.includes('overdue'));
  const dueTodayNotifications = notifications.filter((notif) => notif.message.includes('due today'));

  return (
    <div>
      <h2>Overdue Communications</h2>
      <ul>
        {overdueNotifications.map((notif) => (
          <li key={notif.id}>{notif.message}</li>
        ))}
      </ul>

      <h2>Today's Communications</h2>
      <ul>
        {dueTodayNotifications.map((notif) => (
          <li key={notif.id}>{notif.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
