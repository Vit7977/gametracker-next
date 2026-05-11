"use client";
import ImgNotFound from "../../../../../assets/Image-not-found.png";
import { useState } from "react";
import type { Game } from "@/src/types/Game";

interface GameProps {
  game: Game;
}

export default function GameCard({ game }: GameProps) {
  const [visibleInfo, setVisibleInfo] = useState(false);

  return (
    <div
      className="relative max-w-64 rounded-lg overflow-hidden shadow-lg border transition-all duration-300 hover:scale-105 hover:shadow-indigo-700 cursor-pointer"
      onMouseEnter={() => setVisibleInfo(true)}
      onMouseLeave={() => setVisibleInfo(false)}
    >
      <img
        className="w-full object-cover aspect-[3/4]"
        src={!game.capa ? ImgNotFound.src : game.capa}
        alt={game.titulo}
      />

      <div
        className="absolute -bottom-0.5 left-0 right-0 bg-indigo-950/60 backdrop-blur-sm text-white text-center transition-all duration-300 px-2 py-2"
        style={{
          opacity: visibleInfo ? 1 : 0,
          transform: visibleInfo ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <p className="font-medium text-[15px] leading-tight">{game.titulo}</p>
        <p className="text-[12px] text-gray-300 mt-1">
          {new Date(game.data_lancamento).toLocaleDateString("pt-BR")}
        </p>
      </div>
    </div>
  );
}