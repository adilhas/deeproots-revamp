import { RateLimiterRedis } from 'rate-limiter-flexible';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL!); // e.g. from Upstash

export const loginRateLimiter = new RateLimiterRedis({
  storeClient: redis,
  keyPrefix: 'login_fail_ip',
  points: 5, // 5 attempts
  duration: 60 * 5, // per 5 minutes
  blockDuration: 60 * 15, // block for 15 mins after 5 failed attempts
});
