interface ErrorFallbackProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorFallback({
  title = "Unable to load section",
  message = "Please try again in a moment.",
  onRetry,
}: ErrorFallbackProps) {
  return (
    <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
      <p className="font-semibold text-red-100">{title}</p>
      <p className="mt-1">{message}</p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-3 rounded-md border border-red-300/60 bg-red-400/20 px-3 py-1.5 text-xs font-medium"
        >
          Retry
        </button>
      ) : null}
    </div>
  );
}
