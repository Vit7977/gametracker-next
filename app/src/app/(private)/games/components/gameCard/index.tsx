"use client";

import ImgNotFound from "../../../../../assets/Image-not-found.png";
import { useState } from "react";
import type { Game } from "@/src/types/Game";
import { useRouter } from "next/navigation";
import { BiPlus } from "react-icons/bi";

interface GameProps {
  game: Game;
}

export default function GameCard({ game }: GameProps) {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
      style={{
        boxShadow: hovered
          ? "0 0 0 1px rgba(99,102,241,0.5), 0 8px 32px rgba(99,102,241,0.2)"
          : "0 0 0 1px rgba(255,255,255,0.06)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push(`/games/details?id=${game.id}`)}
    >
      <img
        className="w-full object-cover aspect-[3/4] transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        src={!game.capa ? ImgNotFound.src : game.capa}
        alt={game.titulo}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b14]/90 via-transparent to-transparent" />

      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-3 transition-all duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
        }}
      >
        <p className="font-semibold text-[14px] text-white leading-tight truncate">
          {game.titulo}
        </p>
      
        <p className="text-[11px] text-indigo-300 mt-0.5 tracking-wide">
          {new Date(game.data_lancamento).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "short",
          })}
        </p>
      </div>
        
      <button
  className="absolute top-3 right-3 flex items-center rounded-full bg-indigo-700/50 px-3 py-2 text-white hover:bg-indigo-600 transition-all duration-300"
    onClick={(e) => {
      e.stopPropagation();
      
    }}
    onMouseEnter={() => setBtnHovered(true)}
    onMouseLeave={() => setBtnHovered(false)}
  >
  <BiPlus
    size={18}
    className={`transition-transform duration-500 ${
      btnHovered ? "rotate-90" : "rotate-0"
    }`}
  />

  <span
    className={`overflow-hidden whitespace-nowrap text-[14px] transition-all duration-300 ${
      btnHovered
        ? "max-w-[200px] opacity-100 ml-2"
        : "max-w-0 opacity-0 ml-0"
    }`}
  >
    Adicionar à biblioteca
  </span>
</button>
    </div>
  );
}