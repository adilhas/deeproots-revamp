'use client';

import { useApplication } from '@/context/ApplicationContext';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

type NoteMessage = {
  note: string;
  createdAt: string;
};

const NotificationCard = ({
  title,
  buttonLabel,
  submissionId,
  initialMessages = [],
}: {
  title: string;
  buttonLabel: string;
  submissionId?: string;
  initialMessages?: NoteMessage[];
}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<NoteMessage[]>(initialMessages);
  const [loading, setLoading] = useState(false);

  const { setApplication } = useApplication();

  const handleAction = async () => {
    if (!message.trim()) return;

    if (title === 'Management Note' && submissionId) {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/private-seed/management-notes/${submissionId}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ note: message.trim() }),
          }
        );

        if (!res.ok) throw new Error('Failed to save note');

        const newNote = await res.json();

        const formattedNote = {
          id: newNote.id,
          note: newNote.note,
          createdAt: newNote.createdAt,
          updatedAt: newNote.updatedAt,
          submissionId: newNote.submissionId,
        };

        setMessages((prev) => [
          { note: formattedNote.note, createdAt: formattedNote.createdAt },
          ...prev,
        ]);
        setMessage('');

        // ✅ Update application context
        if (setApplication) {
          setApplication((prevApp) => {
            if (!prevApp) return prevApp;
            return {
              ...prevApp,
              managementNotes: [
                formattedNote,
                ...(prevApp.managementNotes ?? []),
              ],
            };
          });
        }
      } catch (err) {
        console.error(err);
        alert('Error saving management note');
      } finally {
        setLoading(false);
      }
    } else {
      // Local messages only (for "Seeders Notification")
      const localNote = {
        note: message.trim(),
        createdAt: new Date().toISOString(),
      };
      setMessages((prev) => [localNote, ...prev]);
      setMessage('');
    }
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white border border-[#D4D4D4]">
      {/* Header */}
      <div className="bg-[#E9E9E9] px-4 py-3 flex flex-col rounded-t-2xl">
        <h2 className="font-semibold text-black text-2xl mb-3">{title}</h2>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-4 w-full py-2 rounded-full border border-gray-300 bg-white text-sm outline-none"
          />
          <button
            onClick={handleAction}
            disabled={loading}
            className="bg-gradient-to-r w-full max-w-[172px] from-gradient-from2 to-gradient-to2 text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
          >
            {loading ? 'Saving...' : buttonLabel}
          </button>
        </div>
      </div>

      {/* Message Area */}
      <div className="px-4 py-6 space-y-3 h-[300px] overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">No messages yet</p>
        ) : (
          <ul className="space-y-3">
            {messages.map((msg, index) => (
              <li
                key={index}
                className="border border-gray-200 rounded-xl px-4 py-3 bg-[#FAFAFA] shadow-sm"
              >
                <p className="text-gray-800 text-sm">{msg.note}</p>
                <span className="text-[12px] text-gray-500 block mt-1">
                  {formatDistanceToNow(new Date(msg.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const SeederManagementNote = () => {
  const { application } = useApplication();

  const managementMessages =
    application?.managementNotes?.map((note) => ({
      note: note.note,
      createdAt: note.createdAt,
    })) ?? [];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-start w-full">
      <NotificationCard title="Seeders Notification" buttonLabel="Send" />
      <NotificationCard
        title="Management Note"
        buttonLabel="Save"
        submissionId={application?.id}
        initialMessages={managementMessages}
      />
    </div>
  );
};

export default SeederManagementNote;
