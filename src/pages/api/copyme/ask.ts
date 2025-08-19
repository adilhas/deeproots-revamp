import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

// export const config = {
//   runtime: 'edge',
// };

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

    const stream = await openai.chat.completions.create({
      model: 'gpt-4o',
      stream: true,
      messages: [
        {
          role: 'system',
          content:
            'You are DeepRoots AI. Help users with anything about the Deep Roots ecosystem. Never mention OpenAI or say you’re an AI.',
        },
        { role: 'user', content: message },
      ],
    });

    // Set headers for streaming response
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
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
