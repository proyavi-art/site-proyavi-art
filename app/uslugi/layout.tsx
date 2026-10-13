import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги и цены — реставрация, реконструкция, колоризация фото",
  description: "Комплексное восстановление фотографий от 1 500 ₽. Реставрация, реконструкция утраченных фрагментов, колоризация чёрно-белых снимков. Отправьте фото на бесплатную оценку.",
};

export default function UslugiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
