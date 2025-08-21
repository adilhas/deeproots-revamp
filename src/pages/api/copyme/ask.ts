import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

type MatchDocument = {
  id: number;
  content: string;
  source: string;
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
    const { message } = req.body;

    // 1. Create embedding for the user query
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-large',
      input: message,
    });

    // const [{ embedding }] = embeddingResponse.data;
    const vector = embeddingResponse.data[0].embedding;

    // 2. Query Supabase for similar documents
    const { data: matches, error } = await supabase.rpc('match_documents', {
      query_embedding: vector,
      match_threshold: 0.1, // adjust as needed
      match_count: 5,
    });

    if (error) throw error;

    // 3. Build context from retrieved docs
    const context = matches.map((m: MatchDocument) => m.content).join('\n\n');

    // 4. Ask GPT with context
    const stream = await openai.chat.completions.create({
      model: 'gpt-4o',
      stream: true,
      messages: [
        {
          role: 'system',
          content: `You are COPYME AI — an assistant trained **only** on DeepRoots ecosystem data (like INNOFI, Rootopia, MetaFabric, dRC, and the roadmap). If a user asks anything outside that scope, respond with: "Sorry, I don’t have that information yet.`,
        },
        {
          role: 'user',
          content: `Question: ${message}\n\nContext:\n${context}`,
        },
      ],
    });

    // 5. Stream response back to client
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      Connection: 'keep-alive',
    });

    for await (const part of stream) {
      const token = part.choices?.[0]?.delta?.content || '';
      if (token) res.write(token);
    }

    res.end();
  } catch (err) {
    console.error('Ask API error:', err);

    // 👇 Always return a safe plain-text message (not HTML)
    if (!res.headersSent) {
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
      });
      res.write('⚠️ Sorry, something went wrong. Please try again later.');
      res.end();
    }
  }
}
