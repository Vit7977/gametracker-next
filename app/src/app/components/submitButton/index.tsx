export default function SubmitButton({ text }: { text: string }) {
  return (
    <button
      className="w-full cursor-pointer font-medium bg-zinc-300 p-2 rounded-lg border border-zinc-400 shadow-indigo-600/50 transition-all duration-300 
        hover:shadow-md hover:border-indigo-600
        active:shadow-none active:bg-zinc-400 active:text-zinc-500 active:scale-90"
      type="submit"
    >
      {text}
    </button>
  );
}
