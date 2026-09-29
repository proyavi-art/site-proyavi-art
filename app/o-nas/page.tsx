import Link from "next/link";

export default function ONas() {
  return (
    <div className="min-h-screen bg-[#D4847C] flex flex-col items-center justify-center px-4 text-center">
      <Link
        href="/"
        className="absolute top-8 left-8 text-white/70 hover:text-white transition-colors text-sm font-medium"
      >
        ← На главную
      </Link>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
        Мы есть свет.
      </h1>
    </div>
  );
}
