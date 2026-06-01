"use server";
import { createGamePlatform } from "@/src/services/game_platform.service";

export const createGamePlatformAction = async (
  platforms: number[],
  game: number,
) => {
  try {
    await Promise.all(
      platforms.map((p) => createGamePlatform({ platform: p, game: game }))
    );

    return {
      success: true,
      message: "Cadastrado com sucesso!",
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