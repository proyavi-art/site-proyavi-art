import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — ProЯвь",
  description: "Политика обработки персональных данных сайта ProЯвь. Мы защищаем ваши данные и фотографии.",
};

export default function PolitikaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
