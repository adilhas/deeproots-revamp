'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoSend } from 'react-icons/io5';
import { Pencil, Trash2, Save, X } from 'lucide-react';
import { AnnouncementType } from '@/types/application';

export default function AnnouncementManager() {
  const [message, setMessage] = useState('');
  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingMessage, setEditingMessage] = useState('');

  // Fetch announcements on load
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  console.log(announcements);

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get('/api/announcement');
      setAnnouncements(res.data);
    } catch (err) {
      console.error('Failed to load announcements:', err);
      toast.error('Failed to load announcements');
    }
  };

  const handleCreate = async () => {
    if (!message.trim()) return toast.error('Message cannot be empty');
    try {
      const res = await axios.post('/api/announcement', { message });
      setAnnouncements((prev) => [res.data, ...prev]);
      setMessage('');
      toast.success('Announcement added');
    } catch {
      toast.error('Failed to create announcement');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/announcement/${id}`);
      setAnnouncements((prev) => prev.filter((a) => a.id !== id));
      toast.success('Deleted');
    } catch {
      toast.error('Failed to delete');
    }
  };

  const handleEdit = async (id: string) => {
    if (!editingMessage.trim()) return toast.error('Message cannot be empty');
    try {
      const res = await axios.put(`/api/announcement/${id}`, {
        message: editingMessage,
      });
      setAnnouncements((prev) => prev.map((a) => (a.id === id ? res.data : a)));
      setEditingId(null);
      setEditingMessage('');
      toast.success('Updated');
    } catch {
      toast.error('Failed to update');
    }
  };

  return (
    <div className="bg-white p-3 rounded-3xl mx-auto w-full my-10 space-y-6">
      {/* Create Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter announcement..."
          className="w-full border border-[#D4D4D4] px-4 py-2 rounded-3xl"
        />
        <button
          onClick={handleCreate}
          className="bg-gradient-from text-white px-3 rounded-full"
        >
          <IoSend />
        </button>
      </div>

      {/* Announcement List */}
      <div className="space-y-4  h-full max-h-[300px] overflow-auto">
        {announcements.map((a) => (
          <div
            key={a.id}
            className="border p-4 border-[#D4D4D4] flex justify-between items-center rounded-3xl"
          >
            {editingId === a.id ? (
              <input
                value={editingMessage}
                onChange={(e) => setEditingMessage(e.target.value)}
                className="w-full border px-2 py-1 rounded-3xl"
              />
            ) : (
              <p className="text-gray-800">{a.message}</p>
            )}
            <div className="flex gap-2 ml-4">
              {editingId === a.id ? (
                <>
                  <button
                    onClick={() => handleEdit(a.id)}
                    className="text-green-600"
                  >
                    <Save size={18} />
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(null);
                      setEditingMessage('');
                    }}
                    className="text-gray-500"
                  >
                    <X size={18} />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setEditingId(a.id);
                      setEditingMessage(a.message);
                    }}
                    className="text-blue-600"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(a.id)}
                    className="text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
