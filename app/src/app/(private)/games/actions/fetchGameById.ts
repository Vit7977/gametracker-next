"use server"
import { fetchById } from "@/src/services/game.service";
export const fetchGameById = async (id: string) => {
  try {
    const result = await fetchById(id);

    if (!result.success) {
      return {
        success: false,
        message: "Erro ao buscar jogo!",
      };
    }

    return result;
  } catch (error) {
    return {
      success: false,
      message: error || "Erro interno no servidor",
    };
  }
}
