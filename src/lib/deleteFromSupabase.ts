import { supabaseAdmin } from './supabaseAdmin';

export const deleteFoldersFromSupabase = async (
  submissionId: string,
  folders: string[]
): Promise<void> => {
  const bucket = 'deeproots-upload';

  for (const folder of folders) {
    const path = `${folder}/${submissionId}`;

    // 1. List all files under the folder path
    const { data: files, error: listError } = await supabaseAdmin.storage
      .from(bucket)
      .list(path, { limit: 100 });

    if (listError) {
      console.error(`Failed to list files in ${path}:`, listError.message);
      continue;
    }

    if (!files || files.length === 0) continue;

    // 2. Build array of full file paths for deletion
    const filePaths = files.map((f) => `${path}/${f.name}`);

    // 3. Delete all files
    const { error: deleteError } = await supabaseAdmin.storage
      .from(bucket)
      .remove(filePaths);

    if (deleteError) {
      console.error(`Failed to delete files in ${path}:`, deleteError.message);
    } else {
      console.log(`Deleted ${filePaths.length} files from ${path}`);
    }
  }
};
