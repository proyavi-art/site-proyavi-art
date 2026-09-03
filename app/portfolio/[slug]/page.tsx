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
    description: "Сохраните для себя и своих потомков моменты жизни родных и близких в привычном восприятии.",
    caption: "Из семейных фотоархивов — мгновения, сохранившие взгляд и улыбку близкого человека или родственника.",
    works: [
      { before: "/images/gallery/family-1-before.jpg", after: "/images/gallery/family-1-after.jpg", desc: "Восстановление семейного портрета 1950-х годов. Удалены царапины, восстановлен цвет и контраст." },
      { before: "/images/gallery/family-2-before.jpg", after: "/images/gallery/family-2-after.jpg", desc: "Реконструкция утраченных фрагментов группового снимка." },
    ],
  },
  places: {
    title: "Места и события",
    description: "Вы снова там. Чтобы вспомнить эмоции и ощущения, которые казались навсегда утерянными.",
    caption: "Памятное событие или место, куда хотелось бы вернуться — теперь в полном объёме и яркости.",
    works: [
      { before: "/images/gallery/places-1-before.jpg", after: "/images/gallery/places-1-after.jpg", desc: "Восстановление пейзажа с выцветшими цветами и повреждёнными краями." },
      { before: "/images/gallery/places-2-before.jpg", after: "/images/gallery/places-2-after.jpg", desc: "Реставрация снимка с праздника — восстановлены детали фона и лица." },
    ],
  },
  portrait: {
    title: "Портрет",
    description: "Взгляд, улыбка, локон волос близкого вам человека — то, за что цепляется ваша память. Возможно, это будет яркая вспышка.",
    caption: "Портрет, в котором оживает характер. Каждая деталь лица — как в тот самый момент.",
    works: [
      { before: "/images/gallery/portrait-1-before.jpg", after: "/images/gallery/portrait-1-after.jpg", desc: "Восстановление детального портрета — убраны пятна и царапины, возвращена чёткость." },
      { before: "/images/gallery/portrait-2-before.jpg", after: "/images/gallery/portrait-2-after.jpg", desc: "Реконструкция повреждённого снимка — восстановлены глаза и текстура кожи." },
    ],
  },
  instant: {
    title: "Моментальные фотоснимки",
    description: "Момент выхвачен и тут же проявлен на Polaroid-снимке. Но много деталей не видно. Увидите полностью.",
    caption: "Polaroid и моментальные снимки — мгновение, застывшее во времени, теперь в полном объёме.",
    works: [
      { before: "/images/gallery/instant-1-before.jpg", after: "/images/gallery/instant-1-after.jpg", desc: "Восстановление Polaroid с потускневшими цветами и белыми пятнами." },
      { before: "/images/gallery/instant-2-before.jpg", after: "/images/gallery/instant-2-after.jpg", desc: "Реконструкция моментального снимка с выцветшим изображением." },
    ],
  },
  xix: {
    title: "Заря фотографии. XIX век",
    description: "Технологии сохранения момента до появления плёнки — дагерротипы, калотипы, амбротипы, ферротипы, альбуминовая печать. Мы дали свет и очистили от времени.",
    caption: "Возвращение света в первые фотографии человечества — от дагерротипов до альбуминовой печати.",
    works: [
      { before: "/images/gallery/xix-1-before.jpg", after: "/images/gallery/xix-1-after.jpg", desc: "Реставрация дагерротипа — удалены пятна окисления, восстановлена чёткость." },
      { before: "/images/gallery/xix-2-before.jpg", after: "/images/gallery/xix-2-after.jpg", desc: "Восстановление амбротипа — реконструкция утраченных краёв и деталей." },
    ],
  },
  color20: {
    title: "Цветные фото 20 века",
    description: "В своё время это было верхом технологического развития фототехники. Но всё же имеет место быть значительно улучшить качество, проявить скрытые детали, увидеть современным взглядом.",
    caption: "Цветные снимки эпохи — насыщенность, детализация и чистота, которых не хватало полвека.",
    works: [
      { before: "/images/gallery/color20-1-before.jpg", after: "/images/gallery/color20-1-after.jpg", desc: "Восстановление цветного снимка 1970-х — убрана цветовая каша, возвращена насыщенность." },
      { before: "/images/gallery/color20-2-before.jpg", after: "/images/gallery/color20-2-after.jpg", desc: "Реставрация выцветшей фотографии — восстановлены тона и контраст." },
    ],
  },
  bw20: {
    title: "Чёрно-белые фото 20 века",
    description: "Самый большой массив для возвращения. Столетие, ожидающее цвета и чёткости момента. Мы дали и то, и другое.",
    caption: "Чёрно-белая классика — от портрета до документальной съёмки, восстановленная до современного качества.",
    works: [
      { before: "/images/gallery/bw20-1-before.jpg", after: "/images/gallery/bw20-1-after.jpg", desc: "Колоризация и реставрация портрета 1940-х годов." },
      { before: "/images/gallery/bw20-2-before.jpg", after: "/images/gallery/bw20-2-after.jpg", desc: "Восстановление чёткости и детализации документального снимка." },
    ],
  },
  digital: {
    title: "Цифровые фотографии",
    description: "Технологии на максималках, но случай решает судьбу запечатлённого момента. Мы вернём то, что казалось потерянным.",
    caption: "Цифровые снимки с повреждённых носителей — восстановление после сбоев, удалений и повреждений.",
    works: [
      { before: "/images/gallery/digital-1-before.jpg", after: "/images/gallery/digital-1-after.jpg", desc: "Восстановление повреждённого JPEG-файла — убраны артефакты сжатия." },
      { before: "/images/gallery/digital-2-before.jpg", after: "/images/gallery/digital-2-after.jpg", desc: "Реконструкция фрагментов снимка после повреждения носителя." },
    ],
  },
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const cat = data[slug];

  if (!cat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Раздел не найден</h1>
          <Link href="/portfolio" className="text-gray-500 hover:text-black transition-colors">
            ← Вернуться в галерею
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ЗАГОЛОВОК */}
      <section className="pt-24 pb-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-block text-gray-500 hover:text-black transition-colors text-sm font-medium mb-6"
          >
            ← Вернуться в галерею
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400 tracking-widest uppercase font-medium">Галерея</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">{cat.title}</h1>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto leading-relaxed">
            {cat.description}
          </p>
        </div>
      </section>

      {/* РАБОТЫ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-400 text-sm mb-12 max-w-xl mx-auto">
            {cat.caption}
          </p>

          <div className="space-y-16">
            {cat.works.map((work, idx) => (
              <div key={idx}>
                <BeforeAfterSlider before={work.before} after={work.after} />
                <p className="text-center text-gray-500 mt-4 text-sm">{work.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КНОПКА ЗАКАЗА */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Хотите так же?
          </h2>
          <p className="text-gray-500 mb-8">
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
    </>
  );
}
