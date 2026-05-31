export default function GenerosContainer({ generos }: { generos: string }) {
   const genero: string[] = generos.split(", ");

  return (
    <div className="flex gap-2 max-w-full flex-wrap min-w-0">
      {generos.trim() ? (
        genero.map((g, i) => {
          return (
            <div
              className="bg-indigo-700 rounded-3xl border border-indigo-500"
              key={i}
            >
              <p className="p-2 text-[12px] font-medium text-white wrap-break-word">{g}</p>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}