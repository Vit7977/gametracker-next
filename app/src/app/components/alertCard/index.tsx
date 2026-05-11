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
        ${visibility ? "opacity-100" : "opacity-0"} 
        ${error ? "bg-red-500 border-red-700 text-red-950" : "bg-green-500 border-green-700 text-lime-700"} 
        border-2 p-2 min-w-26 rounded-lg absolute top-20 right-10`}
    >
      <div className="flex items-center justify-start gap-2 pl-2 pr-2">
        {error ? <MdError /> : <MdCheck />}
        <p className="font-medium text-md">{message}</p>
      </div>
    </div>
  );
}
