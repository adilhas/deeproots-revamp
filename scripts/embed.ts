import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ✅ Chunking function
function chunkText(content: string, chunkSize = 1000): string[] {
  const chunks: string[] = [];
  for (let i = 0; i < content.length; i += chunkSize) {
    chunks.push(content.slice(i, i + chunkSize));
  }
  return chunks;
}

const run = async () => {
  const dir = 'deeproots-data';
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    console.log(`📥 Embedding ${file}...`);

    // ✅ Split file into chunks
    const chunks = chunkText(content, 1000);

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];

      // 1. Get embeddings from OpenAI
      const embeddingResponse = await openai.embeddings.create({
        model: 'text-embedding-3-large',
        input: chunk,
      });

      const [{ embedding }] = embeddingResponse.data;

      // 2. Insert into Supabase
      const { error } = await supabase.from('documents').insert({
        content: chunk,
        embedding,
        source: `${file}#chunk-${i + 1}`,
      });

      if (error) {
        console.error(`❌ Failed to insert ${file} (chunk ${i + 1}):`, error);
      } else {
        console.log(
          `✅ Embedded and stored ${file} (chunk ${i + 1}/${chunks.length})`
        );
      }
    }
  }
};

run();
