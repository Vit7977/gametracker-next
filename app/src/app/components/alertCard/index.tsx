"use client";
import { MdError, MdCheck } from "react-icons/md";

interface AlertProps {
  error: boolean;
  message: string;
  visibility: boolean;
}

export default function AlertCard({ error, message, visibility }: AlertProps) {
  return (
    <div
      className={`
        fixed top-20 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl
        border backdrop-blur-sm text-sm font-medium
        transition-all duration-300
        ${visibility ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        ${
          error
            ? "bg-red-500/10 border-red-500/30 text-red-400"
            : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
        }
      `}
    >
      {error
        ? <MdError className="text-lg shrink-0" />
        : <MdCheck className="text-lg shrink-0" />
      }
      <p>{message}</p>
    </div>
  );
}