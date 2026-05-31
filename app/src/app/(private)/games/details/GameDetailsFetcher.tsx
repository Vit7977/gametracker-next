import { fetchGameById } from "../actions/fetchGameById";
import GameDetails from "./GameDetails";

interface Props {
  searchParams: Promise<{ id?: string }>;
}

export default async function GameDetailsFetcher({ searchParams }: Props) {
  const { id } = await searchParams;
  if (!id) return null;

  const result = await fetchGameById(id);
  if (!result.success) return null;

  return <GameDetails game={result.data} />;
}