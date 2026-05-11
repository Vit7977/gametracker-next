import { Game } from "@/src/types/Game";
import GameCard from "../gameCard";
import { fetchGames } from "../../actions/fetchGames";

export default async function GamesList() {
  const result = await fetchGames();
  const games = result.success && result.data ? result.data : [];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-20 pt-5">
      {games.map((item: Game) => (
        <GameCard key={item.id} game={item} />
      ))}
    </div>
  );
}