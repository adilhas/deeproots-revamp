import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
        className={`fixed right-2 bottom-2 md:bottom-6 md:right-6 z-30  text-primary-dark dark:text-primary-light hover:opacity-90 ${open ? 'hidden' : ''}`}
        aria-label="Open COPYME AI"
      >
        <Image
          src="/copyme-logo.png"
          alt="copyme"
          width={56}
          height={56}
          className="mx-auto w-14 h-12"
        />
        <div className="bg-[#a690ec] dark:bg-[#5527e7]  text-center w-fit mx-auto mt-2 rounded-2xl px-3 py-1 md:px-4 md:py-2">
          Ask Me
        </div>
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-10 right-3 md:right-6 w-[90vw] md:w-[360px] max-h-[70vh] rounded-2xl shadow-soft border border-white/10 flex flex-col text-primary-light bg-[#19123b] z-30"
          style={{
            boxShadow: `0 0 10px rgba(0, 255, 255, 0.4),0 0 20px rgba(255, 0, 255, 0.4),inset 0 0 15px rgba(255, 255, 255, 0.15)`,
          }}
        >
          <div className="p-4 font-semibold w-full text-center">
            <div className="w-full flex flex-row justify-between items-start">
              <div className="text-center w-full text-2xl flex flex-row justify-center items-center gap-1">
                <Image
                  src="/copyme-logo.png"
                  alt="copyme"
                  width={28}
                  height={28}
                  className="w-fit"
                />
                <div>COPY-ME</div>
              </div>
              <button onClick={() => setOpen(!open)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="text-sm md:text-md">
              I learn you. I copy you. I guide you
            </div>
          </div>
          <div
            ref={boxRef}
            className="px-4 py-3 space-y-3 overflow-y-auto min-h-[100px] bg-[#0d0a14] rounded-3xl"
            style={{ maxHeight: '50vh' }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={
                    (m.role === 'user' ? 'bg-[#371f69]' : 'bg-[#191636]') +
                    ' inline-block px-3 py-2 rounded-xl'
                  }
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {m.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {loading && <div className="text-xs opacity-70">Thinking…</div>}
          </div>
          <div className="p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex gap-2"
            >
              <input
                className="flex-1 px-3 py-2 outline-none bg-[#15102c] border border-[#201b3d] rounded-3xl"
                placeholder="Ask about Rootopia, INNOFI…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                disabled={loading}
                className="p-2 font-medium disabled:opacity-50 bg-[#15102c] border border-[#201b3d] rounded-full"
              >
                <IoIosSend className="w-6 h-5 text-[#b07fe3]" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
