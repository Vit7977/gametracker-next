import { Suspense } from "react";
import GamesList from "./components/gamesList";
import GamesListSkeleton from "./components/gamesListSkeleton";

export default function Games() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <h1 className="text-white text-center text-2xl font-bold pt-2">GAMES</h1>
      <Suspense fallback={<GamesListSkeleton />}>
        <GamesList />
      </Suspense>
    </div>
  );
}
