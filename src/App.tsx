import React, { useState } from "react";
import NotificationForm from "./components/NotificationForm";
import NotificationButton from "./components/NotificationButton";

const App: React.FC = () => {
  const [activity, setActivity] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (activity: string, time: string) => {
    setActivity(activity);
    setTime(time);
    scheduleNotification(activity, time);
  };

  const scheduleNotification = (activity: string, time: string) => {
    const notificationTime = new Date();
    const [hours, minutes] = time.split(":");
    notificationTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    const delay = notificationTime.getTime() - Date.now();

    if (delay > 0) {
      setTimeout(() => {
        new Notification(activity);
      }, delay);
    } else {
      alert("Time has already passed!");
    }
  };

  const handleTestNotification = () => {
    new Notification("Test Notification", { body: "This is a test!" });
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <NotificationForm onSubmit={handleSubmit} />
      <NotificationButton onTestNotification={handleTestNotification} />
    </div>
  );
};

export default App;
