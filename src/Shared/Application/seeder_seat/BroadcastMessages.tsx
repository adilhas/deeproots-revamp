'use client';

import { useEffect, useRef, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useSession } from 'next-auth/react';
import { BroadcastMessageType } from '@/types/application';
import { toast } from 'react-toastify';
import { useBroadcast } from '@/context/BroadcastContext';

const NotificationCard = ({
  title,
  buttonLabel,
  initialMessages = [],
  canSend = false,
  onNewNote,
  loadingMessages,
}: {
  title: string;
  buttonLabel: string;
  initialMessages?: BroadcastMessageType[];
  canSend?: boolean;
  // eslint-disable-next-line no-unused-vars
  onNewNote?: (note: BroadcastMessageType) => void;
  loadingMessages?: boolean;
}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<BroadcastMessageType[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  const handleAction = async () => {
    if (!message.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/broadcast/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        toast.error('Failed to save note');
        return;
      }

      const newNote = await res.json();

      //   const formattedNote = {
      //     message: newNote.message,
      //     createdAt: newNote.createdAt,
      //   };

      const formattedNote: BroadcastMessageType = newNote;

      setMessages((prev) => [formattedNote, ...prev]);
      onNewNote?.(formattedNote);
      setMessage('');
    } catch (err) {
      console.error(err);
      toast.error('Error saving note');
    } finally {
      setLoading(false);
    }
  };

  const visibleMessages = messages;

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [visibleMessages]);

  return (
    <div className="w-full rounded-2xl overflow-hidden justify-between bg-white border border-[#D4D4D4] flex flex-col h-[300px]">
      <div className="bg-[#E9E9E9] px-4 py-3 flex flex-col rounded-t-2xl">
        <h2 className="font-semibold text-black text-2xl mb-3">{title}</h2>
      </div>

      <div
        className="px-4 py-4 space-y-3 flex-1 overflow-y-auto"
        ref={scrollContainerRef}
      >
        {loadingMessages ? (
          <div className="flex w-full text-center text-gray-500 text-sm animate-pulse">
            Loading messages...
          </div>
        ) : visibleMessages.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">No messages yet</p>
        ) : (
          <ul className="space-y-3 py-4">
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
                  <p className="text-gray-800 text-sm">{msg.message}</p>
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

      {canSend && (
        <div className="px-4 py-3 border-t border-[#E5E5E5] flex gap-4 items-center">
          <textarea
            placeholder="Broadcast message"
            maxLength={300}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-4 w-full py-2 rounded-xl border border-gray-300 bg-white text-sm outline-none"
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
  );
};

interface BroadcastMessagesProps {
  layoutClassName?: string;
}

const BroadcastMessages = ({ layoutClassName }: BroadcastMessagesProps) => {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === 'admin';

  //   const [notes, setNotes] = useState<BroadcastMessageType[]>([]);
  const { broadcasts, setBroadcasts } = useBroadcast(); // 👈 from context

  const [loadingNotes, setLoadingNotes] = useState(true); // NEW

  useEffect(() => {
    const fetchNotes = async () => {
      setLoadingNotes(true);
      try {
        const res = await fetch(`/api/broadcast/`);
        // const data: BroadcastMessageType[] = await res.json();
        // const formattedNotes = data.map((note) => ({
        //   message: note.message,
        //   createdAt: note.createdAt,
        // }));
        const data: BroadcastMessageType[] = await res.json();
        // setNotes(data);
        setBroadcasts(data);
      } catch (error) {
        console.error('Failed to fetch management notes', error);
      } finally {
        setLoadingNotes(false);
      }
    };

    fetchNotes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNewNote = (note: BroadcastMessageType) => {
    // setNotes((prev) => [note, ...prev]);
    setBroadcasts((prev) => [note, ...prev]);
  };

  const appliedLayoutClass =
    layoutClassName ||
    (isAdmin ? 'flex-col lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse');

  return (
    <div
      className={`flex ${
        appliedLayoutClass
      } gap-6 justify-center items-start w-full`}
    >
      <NotificationCard
        title={'Broadcasts'}
        buttonLabel="Save"
        initialMessages={broadcasts}
        canSend={isAdmin}
        onNewNote={handleNewNote}
        loadingMessages={loadingNotes}
      />
    </div>
  );
};

export default BroadcastMessages;
