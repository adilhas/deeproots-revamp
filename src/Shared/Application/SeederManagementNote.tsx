'use client';

import { useApplication } from '@/context/ApplicationContext';
import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useSession } from 'next-auth/react';
import { supabase } from '@/lib/supabase';
import { ManagementNotesType } from '@/types/application';

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
  onNewNote,
}: {
  title: string;
  buttonLabel: string;
  submissionId?: string;
  initialMessages?: NoteMessage[];
  canSend?: boolean;
  filterBySender?: 'ADMIN' | 'SEEDER';
  onNewNote?: (note: NoteMessage) => void;
}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<NoteMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === 'admin';

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

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

      const formattedNote: NoteMessage = {
        note: newNote.note,
        createdAt: newNote.createdAt,
        sender: newNote.sender,
      };

      setMessages((prev) => [formattedNote, ...prev]);
      onNewNote?.(formattedNote);
      setMessage('');
    } catch (err) {
      console.error(err);
      alert('Error saving note');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const channel = supabase
      .channel('realtime:managementnotes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'managementnotes',
        },
        (payload) => {
          console.log('📥 New Management Note Inserted!');
          console.log('🌐 Payload:', payload);
          console.log('📝 New Row Data:', payload.new);
          const newNote = payload.new as ManagementNotesType;

          if (newNote.submissionId !== submissionId) return;

          const formattedNote: NoteMessage = {
            note: newNote.note,
            createdAt: newNote.createdAt,
            sender: newNote.sender,
          };

          setMessages((prev) => [formattedNote, ...prev]);
          onNewNote?.(formattedNote);
        }
      )
      .subscribe((status) => {
        console.log('🔁 Subscription status:', status);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [submissionId]);

  const visibleMessages = filterBySender
    ? messages.filter((msg) => msg.sender === filterBySender)
    : messages;

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white border border-[#D4D4D4] flex flex-col h-[400px]">
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

      <div className="px-4 py-4 space-y-3 flex-1 overflow-y-auto">
        {visibleMessages.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">No messages yet</p>
        ) : (
          <ul className="space-y-3">
            {visibleMessages
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .map((msg, index) => (
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
  const submissionId = application?.id;

  const [notes, setNotes] = useState<NoteMessage[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      if (!submissionId) return;
      try {
        const res = await fetch(
          `/api/private-seed/management-notes/${submissionId}`
        );
        const data: ManagementNotesType[] = await res.json();
        const formattedNotes = data.map((note) => ({
          note: note.note,
          createdAt: note.createdAt,
          sender: note.sender,
        }));
        setNotes(formattedNotes);
      } catch (error) {
        console.error('Failed to fetch management notes', error);
      }
    };

    fetchNotes();
  }, [submissionId]);

  const handleNewNote = (note: NoteMessage) => {
    setNotes((prev) => [note, ...prev]);
  };

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
        submissionId={submissionId}
        initialMessages={notes}
        canSend={isSeeder}
        filterBySender="SEEDER"
        onNewNote={handleNewNote}
      />
      <NotificationCard
        title={isAdmin ? 'Contact Seeder' : 'Management Notification'}
        buttonLabel="Save"
        submissionId={submissionId}
        initialMessages={notes}
        canSend={isAdmin}
        filterBySender="ADMIN"
        onNewNote={handleNewNote}
      />
    </div>
  );
};

export default SeederManagementNote;
