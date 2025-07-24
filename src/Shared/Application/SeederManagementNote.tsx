'use client';

import { useApplication } from '@/context/ApplicationContext';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useSession } from 'next-auth/react';

type NoteMessage = {
  note: string;
  createdAt: string;
  sender?: 'ADMIN' | 'SEEDER';
};

const NotificationCard = ({
  title,
  buttonLabel,
  submissionId,
  initialMessages = [],
  canSend = false,
  filterBySender,
}: {
  title: string;
  buttonLabel: string;
  submissionId?: string;
  initialMessages?: NoteMessage[];
  canSend?: boolean;
  filterBySender?: 'ADMIN' | 'SEEDER'; // <-- new prop
}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<NoteMessage[]>(initialMessages);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === 'admin';

  const { setApplication } = useApplication();

  const handleAction = async () => {
    if (!message.trim() || !submissionId) return;

    setLoading(true);
    try {
      const res = await fetch(
        `/api/private-seed/management-notes/${submissionId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            note: message.trim(),
            sender: isAdmin ? 'ADMIN' : 'SEEDER',
          }),
        }
      );

      if (!res.ok) throw new Error('Failed to save note');

      const newNote = await res.json();

      const formattedNote = {
        note: newNote.note,
        createdAt: newNote.createdAt,
        sender: newNote.sender,
      };

      setMessages((prev) => [formattedNote, ...prev]);
      setMessage('');

      if (setApplication) {
        setApplication((prevApp) => {
          if (!prevApp) return prevApp;
          return {
            ...prevApp,
            managementNotes: [newNote, ...(prevApp.managementNotes ?? [])],
          };
        });
      }
    } catch (err) {
      console.error(err);
      alert('Error saving note');
    } finally {
      setLoading(false);
    }
  };

  const visibleMessages = filterBySender
    ? messages.filter((msg) => msg.sender === filterBySender)
    : messages;

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white border border-[#D4D4D4]">
      <div className="bg-[#E9E9E9] px-4 py-3 flex flex-col rounded-t-2xl">
        <h2 className="font-semibold text-black text-2xl mb-3">{title}</h2>
        {canSend && (
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
        )}
      </div>

      <div className="px-4 py-6 space-y-3 h-[300px] overflow-y-auto">
        {visibleMessages.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">No messages yet</p>
        ) : (
          <ul className="space-y-3">
            {visibleMessages.map((msg, index) => (
              <li
                key={index}
                className="border border-gray-200 rounded-xl px-4 py-3 bg-[#FAFAFA] shadow-sm"
              >
                <p className="text-gray-800 text-sm">{msg.note}</p>
                <span className="text-[12px] text-gray-500 block mt-1">
                  {msg.sender === 'ADMIN'
                    ? 'Admin'
                    : msg.sender === 'SEEDER'
                      ? 'Seeder'
                      : 'Unknown'}{' '}
                  ·{' '}
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
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === 'admin';
  const isSeeder = session?.user?.role === 'seeder';

  const managementMessages =
    application?.managementNotes?.map((note) => ({
      note: note.note,
      createdAt: note.createdAt,
      sender: note.sender,
    })) ?? [];

  return (
    <div
      className={`flex ${
        isAdmin
          ? 'flex-col md:flex-row'
          : 'flex-col-reverse md:flex-row-reverse'
      } gap-6 justify-center items-start w-full`}
    >
      <NotificationCard
        title={isAdmin ? 'Seeder Notification' : 'Contact Admin'}
        buttonLabel="Send"
        submissionId={application?.id}
        initialMessages={managementMessages}
        canSend={isSeeder}
        filterBySender="SEEDER"
      />
      <NotificationCard
        title={isAdmin ? 'Contact Seeder' : 'Management Notification'}
        buttonLabel="Save"
        submissionId={application?.id}
        initialMessages={managementMessages}
        canSend={isAdmin}
        filterBySender="ADMIN"
      />
    </div>
  );
};

export default SeederManagementNote;
