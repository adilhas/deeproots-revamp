/* eslint-disable @typescript-eslint/no-explicit-any */
import pino from 'pino';
export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  redact: ['req.headers.authorization', 'password', 'SUPABASE_*'],
});

export function safeFail(res: any, err: any, status = 500) {
  const code = (err as any)?.status || status;
  logger.error({ err, code }, 'API_ERROR');
  return res
    .status(code)
    .json({ error: code === 400 ? 'Bad Request' : 'Internal Server Error' });
}
