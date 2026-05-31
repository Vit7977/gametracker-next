export default function SubmitButton({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="w-full cursor-pointer font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500
        py-2.5 rounded-lg border border-indigo-500/50
        transition-all duration-200
        hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]
        active:scale-95 active:bg-indigo-700"
    >
      {text}
    </button>
  );
}