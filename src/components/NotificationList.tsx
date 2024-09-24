import React from 'react';

interface Notification {
  id: string;
  message: string;
  createdAt: string;
}

interface NotificationListProps {
  notifications: Notification[];
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className="mb-2 pb-2 border-b last:border-b-0">
              <p>{notification.message}</p>
              <small className="text-gray-500">
                {new Date(notification.createdAt).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;