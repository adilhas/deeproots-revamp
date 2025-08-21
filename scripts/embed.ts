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

const run = async () => {
  const dir = 'deeproots-data';
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    console.log(`📥 Embedding ${file}...`);

    // 1. Get embeddings from OpenAI
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: content,
    });

    const [{ embedding }] = embeddingResponse.data;

    // 2. Insert into Supabase
    const { error } = await supabase.from('documents').insert({
      content,
      embedding,
      source: file,
    });

    if (error) {
      console.error(`❌ Failed to insert ${file}:`, error);
    } else {
      console.log(`✅ Embedded and stored ${file}`);
    }
  }
};

run();
