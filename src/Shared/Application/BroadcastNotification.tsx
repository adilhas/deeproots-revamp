'use client';

import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { toast } from 'react-toastify';

export function BroadcastNotification() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBroadcast = async () => {
    if (!message.trim()) return toast.error('Message cannot be empty');

    setLoading(true);
    try {
      const res = await fetch('/api/notifications/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Broadcast from Admin',
          message,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || 'Failed to send broadcast');
        console.error(data.error);
      }

      toast.success(data.message || 'Broadcast successful');
      setMessage('');
    } catch (err) {
      console.error('Notification error:', err);
      toast.error('Failed to send broadcast ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full mb-4 overflow-visible">
      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input input-bordered w-full pl-4 pr-12 rounded-3xl placeholder:text-[#525252] disabled:bg-white bg-white text-sm border border-gray-300 focus:outline-none"
        disabled={loading}
      />
      <button
        onClick={handleBroadcast}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full  z-10"
      >
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <IoSend size={16} />
        )}
      </button>
    </div>
  );
}
