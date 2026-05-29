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
  onChange
}: InputProps) {
  const [active, setActive] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const isPassword = type === "password";
  const resolvedType = isPassword && showPass ? "text" : type;

  return (
    <div className="flex flex-col">
      <label
        className={`${
          active ? "text-indigo-600" : "text-indigo-400"
        } pl-1 font-medium transition-all duration-300`}
      >
        {label}
      </label>

      <div className="relative w-full" >
        <input
          className={`w-full outline-none border-2 border-indigo-300 bg-zinc-300 text-zinc-400 rounded-lg pl-2 p-1.5 pr-10 transition-all duration-300
          focus:border-indigo-600 focus:bg-zinc-200 focus:text-black focus:shadow-md`}
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
            className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300
            ${
              active
                ? "text-black hover:text-indigo-700"
                : "text-zinc-400 hover:text-indigo-300"
            }`}
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
}