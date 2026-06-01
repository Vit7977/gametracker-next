"use client";
import Input from "../../components/input";
import SubmitButton from "../../components/submitButton";
import Link from "next/link";
import AlertCard from "../../components/alertCard";
import { useState } from "react";
import { loginAction } from "./actions/login";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [alert, setAlert] = useState({
    message: "",
    error: false,
    visibility: false,
  });

  const handleSubmit = async (formData: FormData) => {
    const response = await loginAction(formData);

    if (!response.success) {
      return setAlert({
        message: response.message,
        error: true,
        visibility: true,
      });
    }

    setAlert({
      message: response.message,
      error: false,
      visibility: true,
    });

    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">

      <AlertCard
        message={alert.message}
        error={alert.error}
        visibility={alert.visibility}
      />

      <div className="relative z-10 w-full max-w-sm">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-black tracking-tight text-white">
            Bem-vindo de volta
          </h1>
          <p className="text-zinc-500 text-sm mt-2">
            Entre na sua conta para continuar
          </p>
        </div>

        <div className="bg-white/5 border border-white/8 rounded-2xl p-6 backdrop-blur-sm">
          <form action={handleSubmit} className="flex flex-col gap-4">
            <Input label="Email" type="email" name="email" required />
            <Input label="Senha" type="password" name="senha" min={6} required />
            <div className="pt-1">
              <SubmitButton text="Entrar" />
            </div>
          </form>

          <div className="mt-5 pt-5 border-t border-white/8 text-center">
            <p className="text-sm text-zinc-500">
              Ainda não tem uma conta?{" "}
              <Link
                href="/cadastrar"
                className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}