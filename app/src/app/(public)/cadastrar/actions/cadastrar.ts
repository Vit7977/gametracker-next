"use server";

import { register } from "@/src/services/user.service";

export const registerAction = async (formData: FormData) => {
  try {
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const senha = formData.get("senha") as string;

    const data = { nome, email, senha };

    const result = await register(data);

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
    return {
      success: false,
      message: "Erro interno no servidor",
    };
  }
};
