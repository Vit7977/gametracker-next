"use client";
import { Platform } from "@/src/types/Platform";

interface Props {
  platform: Platform;
  selected: boolean;
  onToggle: (id: number) => void;
}

export default function BtnPlatform({ platform, selected, onToggle }: Props) {
  return (
    <button
      type="button"
      className={`${selected ? "bg-white" : "bg-indigo-100/60"} rounded-full border border-white transition-all duration-300 hover:bg-white`}
      onClick={() => onToggle(platform.id)}
    >
      <img
        className="w-10 h-full p-2 object-contain"
        src={platform.logo}
        alt={platform.nome}
      />
    </button>
  );
}
