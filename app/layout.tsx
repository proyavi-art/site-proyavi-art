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
  description:
    "ProЯвь — цифровое восстановление, реконструкция и колоризация фотографий. Улучшаем качество снимков, возвращаем утраченные детали, естественные цвета и выразительность изображениям любого времени.",
  keywords: [
    "восстановление фотографий",
    "реставрация фотографий",
    "улучшение качества фотографий",
    "реконструкция фотографий",
    "колоризация фотографий",
    "восстановление качества фото",
    "улучшение резкости фото",
    "восстановление деталей изображения",
    "восстановление семейных фотографий",
    "восстановление старых фотографий",
    "улучшение цифровых фотографий",
    "ProЯвь",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ProЯвь",
    title: "ProЯвь — цифровое восстановление и колоризация фотографий",
    description:
      "Цифровое восстановление, реконструкция и колоризация фотографий. Возвращаем утраченные детали и естественные цвета снимкам любого времени.",
    url: "./",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ProЯвь — цифровое восстановление и колоризация фотографий",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProЯвь — восстановление и колоризация фотографий",
    description:
      "Цифровое восстановление, реконструкция и колоризация фотографий.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "ProЯвь",
              slogan: "Мы есть свет. Мы возвращаем свет мгновениям.",
              description:
                "Цифровое восстановление, реконструкция и колоризация фотографий. Улучшаем качество снимков, возвращаем утраченные детали, естественные цвета и выразительность изображениям любого времени.",
              url: "https://site-proyavi-art.vercel.app",
              image: "https://site-proyavi-art.vercel.app/og-image.jpg",
              priceRange: "от 1 500 ₽",
              areaServed: "RU",
              inLanguage: "ru",
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
