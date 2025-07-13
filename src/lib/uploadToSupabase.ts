import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import { File } from 'formidable';
import { supabaseAdmin } from './supabaseAdmin';

export const uploadToSupabase = async (
  file: File,
  folder: string
): Promise<string> => {
  if (!file.filepath) {
    throw new Error('Uploaded file has no filepath.');
  }

  const buffer = await fs.readFile(file.filepath);
  const fileExt = file.originalFilename?.split('.').pop() || 'pdf';
  const fileName = `${folder}/${uuidv4()}.${fileExt}`;

  const { error } = await supabaseAdmin.storage
    .from('deeproots-upload')
    .upload(fileName, buffer, {
      contentType: file.mimetype || 'application/octet-stream',
      upsert: true,
    });

  if (error) {
    throw new Error(`Failed to upload file to Supabase: ${error.message}`);
  }

  const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/deeproots-upload/${fileName}`;
  return publicUrl;
};
