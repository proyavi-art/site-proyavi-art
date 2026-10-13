import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://site-proyavi-art.vercel.app"),
  title: {
    default: "ProЯвь — AI-реставрация и реконструкция фотографий",
    template: "%s | ProЯвь",
  },
  description: "Возвращаем моменты памяти. Профессиональная реставрация старых фотографий с помощью искусственного интеллекта. Удаляем царапины, восстанавливаем цвет, реконструируем утраченные фрагменты.",
  keywords: ["реставрация фото", "восстановление старых фотографий", "AI реставрация", "реконструкция фото", "ProЯвь", "колоризация фото", "реставрация семейных архивов"],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ProЯвь",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
