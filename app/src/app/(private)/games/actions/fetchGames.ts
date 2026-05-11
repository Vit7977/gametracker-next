"use server";

import { fetchAllGames } from "@/src/services/game.service";
import { cacheLife } from "next/cache";

export const fetchGames = async () => {
  "use cache";
  cacheLife("minutes");

  try {
    const result = await fetchAllGames();

    if (!result.success) {
      return {
        success: false,
        message: "Erro ao buscar jogos!",
      };
    }

    return result;
  } catch (error) {
    return {
      success: false,
      message: error || "Erro interno no servidor",
    };
  }
};
