export default function GenerosContainer({ generos }: { generos: string }) {
  const generoList: string[] = generos.split(", ");

  if (!generos.trim()) return null;

  return (
    <div className="flex gap-2 flex-wrap min-w-0">
      {generoList.map((g, i) => (
        <span
          key={i}
          className="bg-indigo-600/15 border border-indigo-500/30 text-indigo-300
            text-[11px] font-semibold tracking-wide uppercase
            px-2.5 py-1 rounded-full"
        >
          {g}
        </span>
      ))}
    </div>
  );
}