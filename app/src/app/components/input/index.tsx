"use client";

import { ChangeEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputType = "text" | "password" | "email" | "number" | "date";

interface InputProps {
  label: string;
  type?: InputType;
  name?: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type = "text",
  name,
  placeholder,
  required,
  min,
  max,
  onChange,
}: InputProps) {
  const [active, setActive] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const isPassword = type === "password";
  const resolvedType = isPassword && showPass ? "text" : type;

  return (
    <div className="flex flex-col gap-1">
      <label
        className={`text-xs font-semibold tracking-widest uppercase pl-1 transition-colors duration-200 ${
          active ? "text-indigo-400" : "text-zinc-500"
        }`}
      >
        {label}
      </label>

      <div className="relative w-full">
        <input
          className={`w-full bg-white/5 border rounded-lg pl-3 pr-10 py-2 text-sm text-white placeholder-zinc-600
            outline-none transition-all duration-200
            ${
              active
                ? "border-indigo-500/70 bg-white/8 shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
                : "border-white/10 hover:border-white/20"
            }`}
          type={resolvedType}
          name={name}
          min={min}
          max={max}
          placeholder={placeholder}
          required={required}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={onChange}
        />

        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
}