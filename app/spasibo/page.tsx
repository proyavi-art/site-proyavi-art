import Link from "next/link";

export default function Spasibo() {
  return (
    <div className="min-h-screen bg-[#80AEBA] flex items-center justify-center px-4 py-12">
      <div className="max-w-[600px] w-full bg-[#F0F0DA] p-10 md:p-12 rounded-2xl text-center shadow-[0_25px_45px_rgba(0,0,0,0.2)] border border-[rgba(212,175,55,0.4)]">
        <h1 className="text-gray-900 text-3xl md:text-4xl font-bold mb-5">
          ✨ Спасибо ✨
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-2">
          Ваш лоскут материи времени принят.
        </p>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
          Мы вернёмся к вам с оценкой и первым пробным фрагментом в ближайшее время.
        </p>

        <div className="italic text-gray-400 border-t border-gray-200 pt-5 mb-8 text-base">
          «Целостность — это и есть Явь момента»
        </div>

        <Link
          href="/"
          className="inline-block text-[#D4AF37] font-bold border border-[#D4AF37] px-7 py-3 rounded-xl hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-colors"
        >
          Вернуться в ProЯВЬ
        </Link>
      </div>
    </div>
  );
}
