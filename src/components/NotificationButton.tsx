import React from "react";

type NotificationButtonProps = {
  onTestNotification: () => void;
};

const NotificationButton: React.FC<NotificationButtonProps> = ({ onTestNotification }) => {
  return (
    <button
      onClick={onTestNotification}
      className="bg-green-500 text-white p-2 rounded mt-4"
    >
      Test Notification
    </button>
  );
};

export default NotificationButton;
