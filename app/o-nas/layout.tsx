import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас — ProЯвь. Мы есть свет.",
  description: "ProЯвь — AI-лаборатория реставрации и реконструкции фотографий. Мы возвращаем свет мгновениям.",
};

export default function ONasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
