import React, { useState } from "react";

type NotificationFormProps = {
  onSubmit: (activity: string, time: string) => void;
};

const NotificationForm: React.FC<NotificationFormProps> = ({ onSubmit }) => {
  const [activity, setActivity] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(activity, time);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="Enter activity"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        Set Notification
      </button>
    </form>
  );
};

export default NotificationForm;
