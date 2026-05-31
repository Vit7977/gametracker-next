"use client";

import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { Game } from "@/src/types/Game";

interface Props {
  game: Game;
}

export default function GameDetails({ game }: Props) {
  const router = useRouter();

  const description = game.descricao
    ? game.descricao
    : "";

  return (
    <div className="bg-[#0b0b14] text-white">

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-700/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-8 pt-2">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200"
        >
          <BiArrowBack className="text-xl transition-transform duration-200 group-hover:-translate-x-1" />
          <span className="text-sm font-medium tracking-wide">Voltar</span>
        </button>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-[90vh] px-8">
        <div className="flex gap-12 items-start max-w-5xl w-full">

          <div className="shrink-0 group relative">
            <div className="absolute -inset-1 bg-indigo-600/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={game.capa}
              alt={"Capa: " + game.titulo}
              className="relative w-72 aspect-[3/4] object-cover rounded-xl border border-indigo-700/50 shadow-2xl shadow-black/60"
            />
          </div>

          <div className="flex flex-col gap-5 pt-2 flex-1">

            <div>
              <h1 className="text-4xl font-black tracking-tight leading-tight text-white">
                {game.titulo}
              </h1>
              <span className="mt-1 block text-sm text-zinc-500 tracking-widest uppercase">
                {new Date(game.data_lancamento).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="h-px bg-gradient-to-r from-indigo-700/60 via-indigo-500/20 to-transparent" />

            <p className="text-zinc-400 text-[15px] leading-relaxed">
              {description}
            </p>

            <div className="flex gap-4 mt-1">
              <div className="flex flex-col gap-1 bg-white/5 border border-white/8 rounded-lg px-5 py-3">
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Tempo estimado</span>
                <span className="text-xl font-bold text-indigo-400">
                  ~{game.tempo_estimado}
                  <span className="text-sm font-normal text-zinc-400 ml-1">horas</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}