import { Worker, Job } from 'bullmq';
import { redisConnection } from '@/lib/redis';
import fs from 'fs';
import FormData from 'form-data';
import axios from 'axios';

const METADEFENDER_API_KEY = process.env.OPSWAT_API_KEY;

async function scanFileWithOPSWAT(filePath: string): Promise<boolean> {
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));

  const uploadResponse = await axios.post(
    'https://api.metadefender.com/v4/file',
    form,
    {
      headers: {
        apikey: METADEFENDER_API_KEY!,
        ...form.getHeaders(),
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    }
  );

  const dataId = uploadResponse.data?.data_id;
  if (!dataId) {
    throw new Error('Failed to upload file to MetaDefender');
  }

  for (let attempt = 0; attempt < 10; attempt++) {
    await new Promise((res) => setTimeout(res, 1500));
    const result = await axios.get(
      `https://api.metadefender.com/v4/file/${dataId}`,
      { headers: { apikey: METADEFENDER_API_KEY! } }
    );
    const scanResults = result.data?.scan_results;
    if (scanResults?.progress_percentage === 100) {
      const threats = scanResults.total_detected_avs;
      return threats === 0;
    }
  }

  console.warn('⚠️ Virus scan timed out');
  return true;
}

export const scanWorker = new Worker(
  'file-scan',
  async (job: Job) => {
    const { filePath } = job.data;
    const isClean = await scanFileWithOPSWAT(filePath);
    return { filePath, isClean };
  },
  { connection: redisConnection }
);

scanWorker.on('completed', (job, result) => {
  console.log(`✅ Scan completed for ${job.id}:`, result);
});

scanWorker.on('failed', (job, err) => {
  console.error(`❌ Scan failed for ${job?.id}:`, err);
});
