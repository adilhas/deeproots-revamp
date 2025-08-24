import { scanQueue } from '@/queues/scanQueue';

export async function enqueueFileScan(filePath: string) {
  await scanQueue.add('scan', { filePath });
}
