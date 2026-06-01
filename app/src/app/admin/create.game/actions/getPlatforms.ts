"use server";

import { getPlatform } from "@/src/services/platform.service";

export const getPlatformsAction = async () => {
  try {
    const result = await getPlatform();

    if (!result.success) {
      return {
        success: false,
        message: result.message,
        data: [],
      };
    }

    return {
      success: true,
      message: result.message || "Plataformas consultadas com sucesso!",
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