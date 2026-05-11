"use client";
import Link from "next/link";
import Input from "../../components/input";
import SubmitButton from "../../components/submitButton";
import { registerAction } from "./actions/cadastrar";
import AlertCard from "../../components/alertCard";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Cadastrar() {
  const router = useRouter();
  const [alert, setAlert] = useState({
    message: "",
    error: false,
    visibility: false,
  });

  const handleSubmit = async (formData: FormData) => {
    const response = await registerAction(formData);

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
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center">
      <AlertCard
        message={alert.message}
        error={alert.error}
        visibility={alert.visibility}
      />
      <div className="bg-white p-4 rounded-lg min-w-96 shadow-md shadow-indigo-400 border-2 border-indigo-400">
        <h1 className="text-center text-2xl font-medium pb-3">CADASTRO</h1>
        <form action={handleSubmit} className="flex flex-col gap-4">
          <Input label="Nome" type="text" name="nome" required />
          <Input label="Email" type="email" name="email" required />
          <Input label="Senha" type="password" name="senha" min={6} required />
          <SubmitButton text="Cadastrar" />
        </form>
        <div className="text-center pt-2">
          <p>
            Já possui uma conta?{" "}
            <Link className="text-blue-600 hover:underline" href="/login">
              Faça seu login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
