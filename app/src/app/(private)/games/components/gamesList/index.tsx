import { Game } from "@/src/types/Game";
import GameCard from "../gameCard";
import { fetchGames } from "../../actions/fetchGames";

export default async function GamesList() {
  const result = await fetchGames();
  const games = result.success && result.data ? result.data : [];

  return (
    <div className="min-h-screen px-8 pt-5 pb-12">

      <div className="relative z-10 mb-8">
        <h2 className="text-2xl font-black tracking-tight text-white">
          Jogos disponíveis
        </h2>
        <p className="text-sm text-zinc-500 mt-1">
          {games.length} {games.length === 1 ? "jogo encontrado" : "jogos encontrados"}
        </p>
        <div className="mt-4 h-px bg-gradient-to-r from-indigo-700/60 via-indigo-500/20 to-transparent" />
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {games.map((item: Game) => (
          <GameCard key={item.id} game={item} />
        ))}
      </div>

      {games.length === 0 && (
        <div className="relative z-10 flex flex-col items-center justify-center py-32 gap-3 text-zinc-600">
          <span className="text-5xl">🎮</span>
          <p className="text-sm">Nenhum jogo encontrado</p>
        </div>
      )}
    </div>
  );
}