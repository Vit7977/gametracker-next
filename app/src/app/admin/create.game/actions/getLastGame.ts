"use server";

import { fetchLastGame } from "@/src/services/game.service";

export const getLastGameAction = async () => {
  try {
    const result = await fetchLastGame();

    if (!result.success) {
      return {
        success: false,
        message: result.message,
        data: [],
      };
    }

    return {
      success: true,
      message: result.message || "Jogo consultado com sucesso!",
      data: result.data,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro interno no servidor";

    return {
      success: false,
      message,
      data: [],
    };
  }
};