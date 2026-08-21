export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center py-20">
      <div
        className="size-10 animate-spin rounded-full border-4 border-slate-200 border-t-brand-900"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
