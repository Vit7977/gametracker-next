"use server";

import { login } from "../../../../services/user.service";
import { cookies } from "next/headers";

export const loginAction = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;
    const senha = formData.get("senha") as string;

    const data = {
      email,
      senha,
    };

    const result = await login(data);

    if (!result.success) {
      return {
        success: false,
        message: result.message,
      };
    }

    const token = result.data.token;

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return {
      success: true,
      message: result.message || "Logado com sucesso!",
    };
  } catch (error) {
    return {
      success: false,
      message: error || "Erro interno no servidor",
    };
  }
};
