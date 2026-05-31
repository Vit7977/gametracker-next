import { Suspense } from "react";
import GameDetailsFetcher from "./GameDetailsFetcher";

interface Props {
  searchParams: Promise<{ id?: string }>;
}

export default function GameDetailsPage({ searchParams }: Props) {
  return (
    <Suspense fallback={<h1 className="text-white text-2xl">Carregando...</h1>}>
      <GameDetailsFetcher searchParams={searchParams} />
    </Suspense>
  );
}