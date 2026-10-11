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

      {/* Контакты */}
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <a
          href="mailto:moment@proyavi.art"
          className="text-sm text-white/70 hover:text-white transition-colors tracking-wide"
        >
          moment@proyavi.art
        </a>
        <a
          href="https://t.me/proyavi137art"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/70 hover:text-white transition-colors tracking-wide"
        >
          Telegram
        </a>
        <a
          href="https://www.youtube.com/channel/UC9M9c_nvGwuS3cG5lVY9q-A"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/70 hover:text-white transition-colors tracking-wide"
        >
          YouTube
        </a>
      </div>
    </div>
  );
}
