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
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center">
      <AlertCard
        message={alert.message}
        error={alert.error}
        visibility={alert.visibility}
      />
      <div className="bg-white p-4 rounded-lg min-w-86 shadow-md shadow-indigo-400 border-2 border-indigo-400">
        <h1 className="text-center text-2xl font-medium pb-3">LOGIN</h1>
        <form action={handleSubmit} className="flex flex-col gap-4">
          <Input label="Email" type="email" name="email" required />
          <Input label="Senha" type="password" name="senha" min={6} required />
          <SubmitButton text="Login" />
        </form>
        <div className="text-center pt-2">
          <p>
            Ainda não tem uma conta?{" "}
            <Link className="text-blue-600 hover:underline" href="/cadastrar">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
