import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ProЯвь — AI-реставрация и реконструкция фотографий",
  description: "Возвращаем моменты памяти. Профессиональная реставрация старых фотографий с помощью искусственного интеллекта.",
  keywords: "реставрация фото, восстановление старых фотографий, AI реставрация, реконструкция фото, ProЯвь",
  openGraph: {
    title: "ProЯвь — AI-реставрация фотографий",
    description: "Возвращаем моменты памяти с помощью искусственного интеллекта",
    type: "website",
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
