import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// helper to wrap Upstash limiter with block time support
function withBlock(limiter: Ratelimit, prefix: string, blockSeconds: number) {
  return async (ip: string) => {
    const blockKey = `${prefix}:blocked:${ip}`;
    const blockedUntil = await redis.get<number>(blockKey);

    // If already blocked
    if (blockedUntil && Date.now() < blockedUntil) {
      return { success: false, blocked: true, retryAfter: blockedUntil };
    }

    const result = await limiter.limit(ip);

    if (!result.success && blockSeconds > 0) {
      await redis.set(blockKey, Date.now() + blockSeconds * 1000, {
        ex: blockSeconds,
      });
    }

    return { ...result, blocked: false };
  };
}

// --- Limiters ---

const loginLimiterBase = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '5 m'),
  analytics: true,
  prefix: 'login_fail_ip',
});

export const loginRateLimiter = withBlock(
  loginLimiterBase,
  'login_fail_ip',
  60 * 15
);

const uploadLimiterBase = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 m'),
  analytics: true,
  prefix: 'upload_ip',
});

export const uploadRateLimiter = withBlock(
  uploadLimiterBase,
  'upload_ip',
  60 * 60
);

export const sensitiveApiLimiter = withBlock(
  new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, '1 m'),
    analytics: true,
    prefix: 'sensitive_api_ip',
  }),
  'sensitive_api_ip',
  0 // no block, just rate limit
);
