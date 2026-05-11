import { FaSadTear } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <h1 className="flex flex-row items-center font-bold gap-2 text-6xl text-white">
        404 <FaSadTear />
      </h1>
      <h1 className="text-white text-xl">PAGINA NÃO ENCONTRADA!</h1>
    </div>
  );
}
