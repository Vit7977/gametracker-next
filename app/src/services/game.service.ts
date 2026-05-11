import { api } from "./api";

export const fetchAllGames = async () => {
  return api("/game", {
    method: "GET",
  });
};
