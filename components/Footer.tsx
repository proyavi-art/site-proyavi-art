import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
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
    </footer>
  );
}
