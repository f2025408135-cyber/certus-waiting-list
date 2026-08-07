// In-memory sliding-window rate limiter (module scope).
//
// The key is a SHA-256 hash of the client IP (computed in the route from
// x-forwarded-for / x-real-ip). The raw IP is NEVER stored or logged — only
// the hash, and it stays in memory only (never persisted to DB/disk).
//
// Honest limitation: on Vercel serverless each instance has its own memory,
// so this is a best-effort per-instance guard, not a global limiter. That is
// fine for a waitlist form.

const DEFAULT_MAX = 10;
const DEFAULT_WINDOW_MS = 60_000;

const maxRequests = (() => {
  const raw = Number(process.env.WAITLIST_RATE_LIMIT_MAX);
  return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : DEFAULT_MAX;
})();

const windowMs = (() => {
  const raw = Number(process.env.WAITLIST_RATE_LIMIT_WINDOW_MS);
  return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : DEFAULT_WINDOW_MS;
})();

// key -> timestamps of accepted requests within the current window.
const hits = new Map<string, number[]>();

export function rateLimit(key: string): { allowed: boolean; retryAfterMs: number } {
  const now = Date.now();
  const cutoff = now - windowMs;

  // Prune old timestamps on every call.
  const timestamps = (hits.get(key) ?? []).filter((t) => t > cutoff);
  if (timestamps.length === 0) {
    hits.delete(key);
  } else {
    hits.set(key, timestamps);
  }

  if (timestamps.length >= maxRequests) {
    // Sliding window: allow again once the oldest timestamp falls out.
    const retryAfterMs = Math.max(0, timestamps[0] + windowMs - now);
    return { allowed: false, retryAfterMs };
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return { allowed: true, retryAfterMs: 0 };
}
