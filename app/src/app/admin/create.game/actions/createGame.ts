"use server";

import { createGame } from "@/src/services/game.service";

export const createGameAction = async (formData: FormData) => {
  try {
    const data = {
      titulo: formData.get("titulo") as string,
      capa: formData.get("capa") as string,
      descricao: formData.get("descricao") as string,
      data_lancamento: formData.get("data_lancamento") as string,
      genero: formData.get("genero") as string,
      tempo_estimado: Number(formData.get("tempo_estimado")),
    };

    const result = await createGame(data);

    if (!result.success) {
      return {
        success: false,
        message: result.message,
      };
    }

    return {
      success: true,
      message: result.message || "Cadastrado com sucesso!",
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro interno no servidor";

    return {
      success: false,
      message,
    };
  }
};
