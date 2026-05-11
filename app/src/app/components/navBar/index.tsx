import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoGameController, IoPersonCircle } from "react-icons/io5";

export default function NavBar() {
  return (
    <nav className="fixed min-w-full min-h-15 flex items-center justify-around bg-zinc-300 shadow-md">
      <Link
        href="/"
        className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md font-medium transition-all duration-300
        hover:bg-zinc-100 hover:scale-105 active:scale-90"
      >
        <FaHome />
        Home
      </Link>

      <Link
        href="/games"
        className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md font-medium transition-all duration-300
        hover:bg-zinc-100 hover:scale-105 active:scale-90"
      >
        <IoGameController />
        Jogos
      </Link>

      <Link
        href="/perfil"
        className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md font-medium transition-all duration-300
        hover:bg-zinc-100 hover:scale-105 active:scale-90"
      >
        <IoPersonCircle />
        Perfil
      </Link>
    </nav>
  );
}
