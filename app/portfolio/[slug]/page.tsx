"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const data: Record<string, {
  title: string;
  description: string;
  caption: string;
  works: { before: string; after: string; desc: string }[];
}> = {
  family: {
    title: "Семейные архивы",
    description: "Сохраните для себя и своих потомков моменты жизни родных и близких в привычном восприятии",
    caption: "Из семейных фотоархивов,мгновения,сохранившие взляд улыбку близкого человека или родственника.Памятное событие или место,куда хотелось бы",
    works: [
      { before: "/images/gallery/family-1-before.jpg", after: "/images/gallery/family-1-after.jpg", desc: "Восстановление семейного портрета 1950-х годов" },
      { before: "/images/gallery/family-2-before.jpg", after: "/images/gallery/family-2-after.jpg", desc: "Реконструкция утраченных фрагментов группового снимка" },
    ],
  },
  places: {
    title: "Места и события",
    description: "Вы снова там.Что бы вспомнить эмоции и",
    caption: "Памятное событие или место,куда хотелось бы вернуться",
    works: [
      { before: "/images/gallery/places-1-before.jpg", after: "/images/gallery/places-1-after.jpg", desc: "Восстановление пейзажа с выцветшими цветами" },
      { before: "/images/gallery/places-2-before.jpg", after: "/images/gallery/places-2-after.jpg", desc: "Реставрация снимка с праздника" },
    ],
  },
  portrait: {
    title: "Портрет",
    description: "Взгляд,улыбка,локон волос близкого вам человека -то,за что цепляется Ваша память.Возможно,это будет яркая вспышка -",
    caption: "Взгляд, улыбка, локон волос — то, за что цепляется память",
    works: [
      { before: "/images/gallery/portrait-1-before.jpg", after: "/images/gallery/portrait-1-after.jpg", desc: "Восстановление детального портрета" },
      { before: "/images/gallery/portrait-2-before.jpg", after: "/images/gallery/portrait-2-after.jpg", desc: "Реконструкция повреждённого снимка" },
    ],
  },
  instant: {
    title: "Моментальные фотоснимки",
    description: "Момент выхвачен и тут же проявлен на polaroid снимке.Но много деталей не видно.Увидите полностью",
    caption: "Момент выхвачен на Polaroid. Увидите полностью",
    works: [
      { before: "/images/gallery/instant-1-before.jpg", after: "/images/gallery/instant-1-after.jpg", desc: "Восстановление Polaroid с потускневшими цветами" },
      { before: "/images/gallery/instant-2-before.jpg", after: "/images/gallery/instant-2-after.jpg", desc: "Реконструкция моментального снимка" },
    ],
  },
  xix: {
    title: "Заря фотографии.XIX век",
    description: "Технологии сохранения момента до появления пленки -дагерротипы,калотипы,амбротипы,ферротипы,Альбуминовая печать.Мы дали свет и очистили от",
    caption: "Технологии сохранения момента до появления плёнки",
    works: [
      { before: "/images/gallery/xix-1-before.jpg", after: "/images/gallery/xix-1-after.jpg", desc: "Реставрация дагерротипа" },
      { before: "/images/gallery/xix-2-before.jpg", after: "/images/gallery/xix-2-after.jpg", desc: "Восстановление амбротипа" },
    ],
  },
  color20: {
    title: "Цветные фото 20века",
    description: "В свое время это было верхом технологического развития фототехники.Но все же имеет место быть значительно улучшить качество,проявить скрытые детали,увидеть современным взглядом.Мы",
    caption: "В своё время — верх технологий. Теперь в современном качестве",
    works: [
      { before: "/images/gallery/color20-1-before.jpg", after: "/images/gallery/color20-1-after.jpg", desc: "Восстановление цветного снимка 1970-х" },
      { before: "/images/gallery/color20-2-before.jpg", after: "/images/gallery/color20-2-after.jpg", desc: "Реставрация выцветшей фотографии" },
    ],
  },
  bw20: {
    title: "Черно-белые фото 20века",
    description: "Самый большой массив для возвращения.Столетие,ожидающие цвета и четкости момента.Мы дали",
    caption: "Столетие, ожидающее цвета и чёткости",
    works: [
      { before: "/images/gallery/bw20-1-before.jpg", after: "/images/gallery/bw20-1-after.jpg", desc: "Колоризация и реставрация портрета 1940-х" },
      { before: "/images/gallery/bw20-2-before.jpg", after: "/images/gallery/bw20-2-after.jpg", desc: "Восстановление чёткости документального снимка" },
    ],
  },
  digital: {
    title: "Цифровые фотографии",
    description: "Технологии на максималках,но случай решает судьбу запечатленного момента.Мы",
    caption: "Технологии на максималках, но случай решает судьбу момента",
    works: [
      { before: "/images/gallery/digital-1-before.jpg", after: "/images/gallery/digital-1-after.jpg", desc: "Восстановление повреждённого JPEG-файла" },
      { before: "/images/gallery/digital-2-before.jpg", after: "/images/gallery/digital-2-after.jpg", desc: "Реконструкция фрагментов снимка" },
    ],
  },
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const cat = data[slug];

  if (!cat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#A7D48D]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Раздел не найден</h1>
          <Link href="/portfolio" className="text-gray-700 hover:text-black transition-colors">
            ← Вернуться в галерею
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#A7D48D]">
      {/* ЗАГОЛОВОК */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-block text-gray-700 hover:text-black transition-colors text-sm font-medium mb-6"
          >
            ← Вернуться в галерею
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-black/10" />
            <span className="text-sm text-gray-700 tracking-widest uppercase font-medium">Галерея</span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">{cat.title}</h1>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
            {cat.description}
          </p>
        </div>
      </section>

      {/* РАБОТЫ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-600 text-sm mb-12 max-w-xl mx-auto">
            {cat.caption}
          </p>

          <div className="space-y-16">
            {cat.works.map((work, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
                <BeforeAfterSlider before={work.before} after={work.after} />
                <p className="text-center text-gray-500 mt-4 text-sm">{work.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КНОПКА ЗАКАЗА */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Хотите так же?
          </h2>
          <p className="text-gray-700 mb-8">
            Отправьте фотографию на оценку — мы вернём ваше мгновение.
          </p>
          <Link
            href="/uslugi"
            className="inline-block px-10 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Заказать реставрацию
          </Link>
        </div>
      </section>
    </div>
  );
}
