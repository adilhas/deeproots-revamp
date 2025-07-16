'use client';

import { useState } from 'react';

const NotificationCard = ({
  title,
  buttonLabel,
}: {
  title: string;
  buttonLabel: string;
}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleAction = () => {
    if (message.trim()) {
      setMessages([...messages, message.trim()]);
      setMessage('');
    }
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white border border-[#D4D4D4]">
      {/* Header */}
      <div className="bg-[#E9E9E9] px-4 py-3 flex flex-col  rounded-t-2xl">
        <h2 className="font-semibold text-black text-2xl mb-3">{title}</h2>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className=" px-4 w-full py-2 rounded-full border border-gray-300 bg-white text-sm outline-none"
          />
          <button
            onClick={handleAction}
            className="bg-gradient-to-r w-full max-w-[172px] from-gradient-from2 to-gradient-to2 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            {buttonLabel}
          </button>
        </div>
      </div>

      {/* Message Area */}
      <div className="px-4 py-6 text-center text-gray-500 text-sm min-h-[100px]">
        {messages.length === 0 ? (
          <p>No messages yet</p>
        ) : (
          <ul className="text-left space-y-1">
            {messages.map((msg, index) => (
              <li key={index} className="text-gray-700">
                {msg}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const SeederManagementNote = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-start w-full">
      <NotificationCard title="Seeders Notification" buttonLabel="Send" />
      <NotificationCard title="Management Note" buttonLabel="Save" />
    </div>
  );
};

export default SeederManagementNote;
