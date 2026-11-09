import type { Metadata } from "next";
import Script from "next/script";
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
            }),
          }}
        />
        {/* Яндекс.Метрика — только на боевом домене */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0];
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=114122988', 'ym');
            if (location.hostname === 'proyavi.art') {
              ym(114122988, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce:true,
                trackLinks:true
              });
            }
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/114122988" style={{position:"absolute", left:"-9999px"}} alt="" />
          </div>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
