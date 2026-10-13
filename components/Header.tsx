"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Главная" },
    { href: "/uslugi", label: "Услуги" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/o-nas", label: "О нас" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="ProЯвь"
            className="h-8 w-auto"
          />
        </Link>

        {/* Десктоп: меню + контакты */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 pl-6 border-l border-gray-200">
            <a
              href="mailto:moment@proyavi.art"
              className="text-sm text-gray-500 hover:text-black transition-colors"
              title="Email"
            >
              Email
            </a>
            <a
              href="https://t.me/proyavi137art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-black transition-colors"
              title="Telegram"
            >
              TG
            </a>
            <a
              href="https://www.youtube.com/channel/UC9M9c_nvGwuS3cG5lVY9q-A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-black transition-colors"
              title="YouTube"
            >
              YT
            </a>
          </div>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>
            ) : (
              <><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></>
            )}
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="md:hidden border-t border-gray-100 px-4 py-4 space-y-3 bg-white">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block text-sm font-medium text-gray-600" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex gap-4">
            <a href="mailto:moment@proyavi.art" className="text-sm text-gray-500">Email</a>
            <a href="https://t.me/proyavi137art" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500">Telegram</a>
            <a href="https://www.youtube.com/channel/UC9M9c_nvGwuS3cG5lVY9q-A" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500">YouTube</a>
          </div>
        </div>
      )}
    </header>
  );
}
