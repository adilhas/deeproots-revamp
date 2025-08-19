import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function CopyMeChatbot() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<
    Array<{ role: 'user' | 'assistant'; content: string }>
  >([]);
  const boxRef = useRef<HTMLDivElement>(null);

  const send = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user' as const, content: input };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/copyme/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content }),
      });

      if (!res.body) throw new Error('No response body');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      const assistantMsg = { role: 'assistant' as const, content: '' };

      // Add placeholder assistant message
      setMessages((m) => [...m, assistantMsg]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        assistantMsg.content += chunk;

        // Update the last assistant message as it streams in
        setMessages((m) => [...m.slice(0, -1), { ...assistantMsg }]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    boxRef.current?.scrollTo({ top: 999999, behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-30  text-primary-dark dark:text-primary-light rounded-full px-5 py-3 shadow-soft hover:opacity-90 focus:outline-none ${open ? 'hidden' : ''}`}
        aria-label="Open COPYME AI"
      >
        <Image
          src="/copyme-logo.png"
          alt="copyme"
          width={56}
          height={56}
          className="mx-auto"
        />
        <div className="bg-[#a690ec] dark:bg-[#5527e7]  text-center w-fit mx-auto mt-2 rounded-2xl px-3 py-2">
          Ask Me
        </div>
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-6 w-[360px] max-h-[70vh] bg-drSlate rounded-2xl shadow-soft border border-white/10 flex flex-col bg-primary-light text-primary-dark dark:text-primary-light dark:bg-primary-dark z-30">
          <div className="p-4 border-b border-white/10 font-semibold w-full text-center">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="text-center w-full">COPYME AI</div>
              <button onClick={() => setOpen(!open)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div>I learn you. I copy you. I guide you</div>
          </div>
          <div
            ref={boxRef}
            className="px-4 pt-3 space-y-3 overflow-y-auto min-h-[100px]"
            style={{ maxHeight: '50vh' }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={
                    (m.role === 'user' ? 'bg-white/10' : 'bg-black/30') +
                    ' inline-block px-3 py-2 rounded-xl'
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs opacity-70">Thinking…</div>}
          </div>
          <div className="p-3 border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex gap-2"
            >
              <input
                className="flex-1 rounded-xl px-3 py-2 outline-none"
                placeholder="Ask about Rootopia, INNOFI…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                disabled={loading}
                className="bg-drPrimary rounded-xl px-4 py-2 font-medium disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
