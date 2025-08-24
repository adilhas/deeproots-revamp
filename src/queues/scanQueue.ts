import { Queue } from 'bullmq';
import { redisConnection } from '@/lib/redis';

export const scanQueue = new Queue('file-scan', {
  connection: redisConnection,
});
