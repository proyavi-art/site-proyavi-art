import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Контакты */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8">
          <a
            href="mailto:moment@proyavi.art"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            moment@proyavi.art
          </a>
          <a
            href="https://t.me/proyavi137art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Telegram
          </a>
          <a
            href="https://www.youtube.com/channel/UC9M9c_nvGwuS3cG5lVY9q-A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            YouTube
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-100">
          <Link href="/" className="text-xl font-bold">
            Pro<span className="text-gray-400">Явь</span>
          </Link>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ProЯвь. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/uslugi" className="hover:text-black transition-colors">Услуги</Link>
            <Link href="/portfolio" className="hover:text-black transition-colors">Портфолио</Link>
            <Link href="/o-nas" className="hover:text-black transition-colors">О нас</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
