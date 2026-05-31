"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { IoGameController, IoPersonCircle } from "react-icons/io5";

const links = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/games", label: "Jogos", icon: IoGameController },
  { href: "/perfil", label: "Perfil", icon: IoPersonCircle },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 px-6 py-3 bg-[#0b0b14]/80 backdrop-blur-md border-b border-white/5">

      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="flex items-center gap-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`
                relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-200
                ${active
                  ? "text-white bg-indigo-600/20 border border-indigo-500/30"
                  : "text-zinc-400 border border-transparent hover:text-white hover:bg-white/5"
                }
              `}
            >
              <Icon className={`text-base ${active ? "text-indigo-400" : ""}`} />
              {label}
              {active && (
                <span className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 w-6 h-px bg-indigo-400" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}