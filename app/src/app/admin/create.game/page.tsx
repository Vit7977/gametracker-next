"use client";
import { useState } from "react";
import Input from "../../components/input";
import SubmitButton from "../../components/submitButton";
import { createGameAction } from "./actions/createGame";
import AlertCard from "../../components/alertCard";
import GenerosContainer from "../../components/generosContainer";

export default function CreateGame() {
  const [generos, setGeneros] = useState("");
  const [img, setImg] = useState<string>("");
  const [alert, setAlert] = useState({
    message: "",
    error: false,
    visibility: false,
  });

  const handleSubmit = async (formData: FormData) => {
    const response = await createGameAction(formData);

    if (!response.success) {
      return setAlert({
        message: response.message ?? "Ocorreu um erro inesperado.",
        error: true,
        visibility: true,
      });
    }

    setAlert({
      message: response.message ?? "Cadastrado com sucesso!",
      error: false,
      visibility: true,
    });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b0b14] flex justify-center items-center gap-8 p-6 pt-24">

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-700/10 rounded-full blur-3xl" />
      </div>

      <AlertCard
        message={alert.message}
        error={alert.error}
        visibility={alert.visibility}
      />

      <div className="relative z-10 bg-white/5 border border-white/8 rounded-2xl p-6 w-full max-w-sm backdrop-blur-sm">

        <div className="mb-6">
          <h1 className="text-2xl font-black tracking-tight text-white">
            Adicionar Jogo
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Preencha as informações do jogo
          </p>
          <div className="mt-4 h-px bg-gradient-to-r from-indigo-700/60 via-indigo-500/20 to-transparent" />
        </div>

        <form action={handleSubmit} className="flex flex-col gap-4">
          <Input label="Título" type="text" name="titulo" required />

          <Input
            label="Capa"
            type="text"
            name="capa"
            placeholder="URL da imagem..."
            required
            onChange={(e) => setImg(e.target.value)}
          />

          <Input label="Descrição" type="text" name="descricao" />

          <Input
            label="Data de Lançamento"
            type="date"
            name="data_lancamento"
            required
          />

          <Input
            label="Tempo Estimado (100%)"
            type="number"
            name="tempo_estimado"
            required
          />

          <Input
            label="Gêneros"
            type="text"
            name="genero"
            placeholder="Separe cada gênero com ', '"
            onChange={(e) => setGeneros(e.target.value)}
            required
          />

          <GenerosContainer generos={generos} />

          <div className="pt-1">
            <SubmitButton text="Adicionar" />
          </div>
        </form>
      </div>

      <div className="relative z-10 bg-white/5 border border-white/8 rounded-2xl p-6 w-64 backdrop-blur-sm self-start mt-0">

        <div className="mb-4">
          <h2 className="text-base font-semibold text-white">Preview da Capa</h2>
          <p className="text-zinc-500 text-xs mt-0.5">Atualiza em tempo real</p>
        </div>

        <div className="w-full aspect-[3/4] bg-white/5 border border-white/8 rounded-xl overflow-hidden flex items-center justify-center">
          {img ? (
            <img
              src={img}
              alt="Preview da capa"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-zinc-600 text-xs text-center px-4">
              A imagem aparecerá aqui
            </span>
          )}
        </div>
      </div>

    </div>
  );
}