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
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ProЯвь",
    title: "ProЯвь — AI-реставрация и реконструкция фотографий",
    description: "Возвращаем моменты памяти. Профессиональная реставрация старых фотографий с помощью искусственного интеллекта.",
    url: "./",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ProЯвь — AI-лаборатория реставрации фотографий",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProЯвь — AI-реставрация и реконструкция фотографий",
    description: "Возвращаем моменты памяти. Реставрация старых фото с помощью искусственного интеллекта.",
    images: ["/og-image.jpg"],
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
