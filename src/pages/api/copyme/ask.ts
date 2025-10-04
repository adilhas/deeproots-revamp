import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';
import { askRateLimiter } from '@/lib/rateLimiter';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

type MatchDocument = {
  id: number;
  content: string;
  // source: string;
  metadata: {
    source: string; // JSONB structure
  };
  similarity: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const ip =
      req.headers['x-forwarded-for']?.toString().split(',')[0] ||
      req.socket.remoteAddress ||
      'unknown';

    const limit = await askRateLimiter(ip);

    if (!limit.success) {
      if (limit.blocked) {
        return res.status(429).json({
          error: 'Too many requests. You are temporarily blocked.',
          retryAfter: limit.retryAfter,
        });
      }
      return res.status(429).json({
        error: 'Too many requests. Please slow down.',
      });
    }

    const { messages } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'No valid user message provided.' });
    }

    const lastUserMsg = messages[messages.length - 1]?.content || '';
    if (!lastUserMsg.trim()) {
      return res.status(400).json({ error: 'No valid user message provided.' });
    }

    // 1. Create embedding for latest user message
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-large',
      input: lastUserMsg,
    });

    const vector = embeddingResponse.data[0].embedding;

    // 2. Query Supabase
    const { data: matches, error } = await supabase.rpc('match_documents', {
      query_embedding: vector,
      match_threshold: 0.3,
      match_count: 5,
    });
    if (error) throw error;

    // 3. Build context (truncate to avoid token overflow)
    const context = (matches || [])
      .map((m: MatchDocument) => m.content)
      .join('\n\n')
      .slice(0, 3000);

    // 4. Inject context into last user message
    const messagesWithContext = [
      {
        role: 'system',
        content: `You are COPY-ME, the official AI guide for DeepRoots.
Rules:
1. Every answer starts with one icon headline (choose randomly from: 🌍 ⚡ 🪨 🌀 🔑 🔥 🌙).
2. Responses must always be 2–4 short bullet points (no long paragraphs).
3. If user asks off-topic questions, return a branded fallback:
   "⚡ COPY-ME is your DeepRoots guide. I only provide insights related to DeepRoots. Please reframe your question!"
4. If user asks for "points" or "as point", keep response structured in bullet/numbered lists.`,
      },
      ...messages.slice(0, -1),
      {
        ...messages[messages.length - 1],
        content: `${lastUserMsg}\n\nContext:\n${context}`,
      },
    ];

    // 5. Ask GPT with streaming
    const stream = await openai.chat.completions.create({
      model: 'gpt-4o',
      stream: true,
      messages: messagesWithContext,
    });

    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });

    for await (const part of stream) {
      const token = part.choices?.[0]?.delta?.content || '';
      if (token) res.write(token);
    }

    res.end();
  } catch (err) {
    console.error('Ask API error:', err);
    if (!res.headersSent) {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.write('⚡ Sorry, something went wrong. Please try again later.');
      res.end();
    }
  }
}
