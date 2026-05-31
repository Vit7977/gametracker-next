import { Suspense } from "react";
import GamesList from "./components/gamesList";
import GamesListSkeleton from "./components/gamesListSkeleton";

export default function Games() {
  return (
    <Suspense fallback={<GamesListSkeleton />}>
      <GamesList />
    </Suspense>
  );
}