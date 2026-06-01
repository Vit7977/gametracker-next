import { GamePlatform } from "../types/GamePlatform";
import { api } from "./api";

export const createGamePlatform = async (data: GamePlatform) => {
  return api("/game.platform", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
