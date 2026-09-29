import Link from "next/link";

export default function ONas() {
  return (
    <div className="min-h-screen bg-[#D4847C] flex flex-col items-center justify-center px-4">
      <Link
        href="/"
        className="absolute top-8 left-8 text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wide"
      >
        ← На главную
      </Link>

      <div className="w-full max-w-2xl flex items-center gap-6">
        <div className="flex-1 h-px bg-white/30" />
        <h1 className="text-sm md:text-base text-white/90 tracking-[0.3em] uppercase font-medium whitespace-nowrap">
          Мы есть свет.
        </h1>
        <div className="flex-1 h-px bg-white/30" />
      </div>
    </div>
  );
}
