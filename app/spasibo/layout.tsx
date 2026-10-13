import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Спасибо — заявка принята",
  description: "Ваша заявка на реставрацию фотографии принята. Мы свяжемся с вами в ближайшее время.",
};

export default function SpasiboLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
