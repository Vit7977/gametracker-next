export default function GamesListSkeleton() {
  return (
    <div className="min-h-screen bg-[#0b0b14] px-8 pt-24 pb-12">

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-700/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mb-8">
        <div className="h-7 w-32 bg-white/5 rounded-lg animate-pulse" />
        <div className="h-4 w-24 bg-white/5 rounded-md animate-pulse mt-2" />
        <div className="mt-4 h-px bg-gradient-to-r from-indigo-700/60 via-indigo-500/20 to-transparent" />
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl aspect-3/4 bg-white/5 animate-pulse"
            style={{ animationDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
    </div>
  );
}