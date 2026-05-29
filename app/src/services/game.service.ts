import { api } from "./api";
import type {Game} from "../types/Game"

export const fetchAllGames = async () => {
  return api("/game", {
    method: "GET",
  });
};

export const createGame = async (data: Game) => {
  return api("/game", {
    method: "POST",
    body: JSON.stringify(data),
  })
}
