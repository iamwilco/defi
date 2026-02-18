type RateLimitState = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

const bucket = new Map<string, RateLimitState>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function checkRateLimit(
  request: Request,
  key: string,
  options: Partial<RateLimitOptions> = {},
) {
  const { limit = 120, windowMs = 60_000 } = options;

  const now = Date.now();
  const clientKey = `${key}:${getClientIp(request)}`;
  const state = bucket.get(clientKey);

  if (!state || now > state.resetAt) {
    bucket.set(clientKey, { count: 1, resetAt: now + windowMs });
    return {
      allowed: true,
      remaining: limit - 1,
      retryAfterSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (state.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((state.resetAt - now) / 1000)),
    };
  }

  state.count += 1;
  bucket.set(clientKey, state);

  return {
    allowed: true,
    remaining: Math.max(0, limit - state.count),
    retryAfterSeconds: Math.max(1, Math.ceil((state.resetAt - now) / 1000)),
  };
}
