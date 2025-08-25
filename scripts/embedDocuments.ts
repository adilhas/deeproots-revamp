import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs/promises';
import * as path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ✅ Split text into chunks
function split(str: string, size: number) {
  const chunks: string[] = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}

async function embedAll() {
  const dir = './deeproots-data';
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    // Read file content
    const raw = await fs.readFile(filePath, 'utf8');
    const chunks = split(raw, 1000);

    console.log(`📥 Processing ${file} (${chunks.length} chunks)...`);

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const sourceId = `${file}#chunk-${i + 1}`;

      // ✅ 1. Check if this chunk already exists in Supabase
      const { data: existing, error: checkError } = await supabase
        .from('documents')
        .select('id')
        .eq('metadata->>source', sourceId) // ✅ JSON path query
        .maybeSingle();

      if (checkError) {
        console.error(
          `⚠️ Error checking existence of ${sourceId}:`,
          checkError
        );
        continue;
      }

      if (existing) {
        console.log(`⏭️ Skipping ${sourceId}, already exists.`);
        continue; // skip this chunk
      }

      // ✅ 2. Get embedding
      const e = await openai.embeddings.create({
        model: 'text-embedding-3-large',
        input: chunk,
      });

      // ✅ 3. Insert only if not exists
      const { error } = await supabase.from('documents').insert({
        content: chunk,
        embedding: e.data[0].embedding,
        metadata: { source: sourceId },
      });

      if (error) {
        console.error(`❌ Failed to insert ${sourceId}:`, error);
      } else {
        console.log(`✅ Stored ${sourceId}`);
      }
    }
  }
}

embedAll().catch(console.error);
