"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Lightbox from "@/components/Lightbox";

const data: Record<string, {
  title: string;
  description: string;
  caption: string;
  works: { before: string; after: string; desc: string; note?: string; review?: string }[];
}> = {
  family: {
    title: `Семейные архивы`,
    description: `Реставрация и комплексное возвращение фотографии цвета, света и детализации из семейных архивов — одно из приоритетных направлений нашей работы.
Это возможность сохранить преемственность поколений, память о своих истоках и просто увидеть родных и близких такими, какими они были в молодости — ясно, естественно и достоверно.
Как правило, чем старше фотография, тем больше деталей утрачено — из-за времени и несовершенства технологий прошлого. Но даже спустя десятилетия что-то всё ещё можно вернуть.`,
    caption: `С разрешения наших заказчиков, мы публикуем данные примеры выполненных нами работ.`,
    works: [
      {
        before: `/images/gallery/family-1-before.jpg`,
        after: `/images/gallery/family-1-after.jpg`,
        desc: `Восстановление семейного портрета конца 1940-х годов. Казахстан, Целиноградская обл.`,
        note: `Послевоенная фотография семьи Офсянниковых с внучкой, дочерью и зятем. Состояние, в котором к нам поступила данная фотография было удовлетворительным, что позволило достаточно точно восстановить сохраненный момент. Не ждите, пока единственный источник момента потеряет безвозвратно свою информацию. Сохраните.`,
      },
      {
        before: `/images/gallery/family-2-before.jpg`,
        after: `/images/gallery/family-2-after.jpg`,
        desc: `Юбилей Агаповых Дмитрия и Феодосьи. Золотая свадьба. 1970-е.`,
        note: `Фотоснимок выполнен на любительскую камеру с явными дефектами по выдержке. Косые лучи предзакатного Солнца засветили большую часть фотографии. Оцифровка фотографии производилась цифровой камерой Nikon Z5 в специальных условиях для получения максимального количества информации сохраненной на фотографии. Мы вернули мгновение вечера во всех его цветах.`,
      },
      {
        before: `/images/gallery/family-3-before.jpg`,
        after: `/images/gallery/family-3-after.jpg`,
        desc: `Студийная фотография четы Юровых с внуками и внучкой. 1986 г.`,
        note: `Фотографии выполненные в специализированных фотостудиях СССР по качеству значительно отличаются от любительских по освещению и выдержке и являлись эталоном фотоснимка. В большинстве случаев. При всей своей сохранности, данная фотография имела размытость контуров. Мы вернули четкость изображению в том числе.`,
      },
    ],
  },
  places: {
    title: `Места и события`,
    description: `Путишествия и события сохраненые в ваших фотоархивах. Верните в своих воспоминаниях с помощью наших возможностей.`,
    caption: `С разрешения наших заказчиков, мы публикуем данные примеры выполненных нами работ.`,
    works: [
      {
        before: `/images/gallery/places-1-before.jpg`,
        after: `/images/gallery/places-1-after.jpg`,
        desc: `Первомайская демонстрация. 1980 г.`,
        note: `Праздник труда и весны - 1 Мая! `,
      },
      {
        before: `/images/gallery/places-2-before.jpg`,
        after: `/images/gallery/places-2-after.jpg`,
        desc: `Реставрация снимка с праздника`,
        note: `Снимок с семейного торжества — повреждён водой и временем. Восстановлены лица, детали интерьера, цветовая гамма.`,
        review: `Это единственная фотография с нашей свадьбы, которая осталась. Теперь она снова жива.`,
      },
    ],
  },
  portrait: {
    title: `Портрет`,
    description: `Взгляд,улыбка,локон волос близкого вам человека -то,за что цепляется Ваша память.Возможно,это будет яркая вспышка -`,
    caption: `Взгляд, улыбка, локон волос — то, за что цепляется память`,
    works: [
      {
        before: `/images/gallery/portrait-1-before.jpg`,
        after: `/images/gallery/portrait-1-after.jpg`,
        desc: `Восстановление детального портрета`,
        note: `Портретная фотография требует особого внимания к мелочам — текстуре кожи, бликам в глазах, мягкости света. Каждый элемент был восстановлен вручную.`,
      },
      {
        before: `/images/gallery/portrait-2-before.jpg`,
        after: `/images/gallery/portrait-2-after.jpg`,
        desc: `Реконструкция повреждённого снимка`,
        note: `Фотография была разорвана пополам и склеена скотчем. Мы убрали следы скотча, восстановили разрыв и вернули единство изображению.`,
        review: `Бабушка расплакалась, когда увидела. Это бесценно.`,
      },
    ],
  },
  instant: {
    title: `Моментальные фотоснимки`,
    description: `Момент выхвачен и тут же проявлен на polaroid снимке.Но много деталей не видно.Увидите полностью`,
    caption: `Момент выхвачен на Polaroid. Увидите полностью`,
    works: [
      {
        before: `/images/gallery/instant-1-before.jpg`,
        after: `/images/gallery/instant-1-after.jpg`,
        desc: `Восстановление Polaroid с потускневшими цветами`,
        note: `Polaroid-фотографии уникальны — у них есть свой характер. Мы сохранили этот характер, но убрали потускнение и вернули насыщенность.`,
      },
      {
        before: `/images/gallery/instant-2-before.jpg`,
        after: `/images/gallery/instant-2-after.jpg`,
        desc: `Реконструкция моментального снимка`,
        note: `Снимок был сильно повреждён — белые пятна, выцветание. Реконструкция вернула изображению целостность.`,
      },
    ],
  },
  xix: {
    title: `Заря фотографии.XIX век`,
    description: `Технологии сохранения момента до появления пленки -дагерротипы,калотипы,амбротипы,ферротипы,Альбуминовая печать.Мы дали свет и очистили от`,
    caption: `Технологии сохранения момента до появления плёнки`,
    works: [
      {
        before: `/images/gallery/xix-1-before.jpg`,
        after: `/images/gallery/xix-1-after.jpg`,
        desc: `Реставрация дагерротипа`,
        note: `Дагерротип — уникальный артефакт. Мы работали с цифровой копией, убирая следы окисления и восстанавливая чёткость серебряной поверхности.`,
      },
      {
        before: `/images/gallery/xix-2-before.jpg`,
        after: `/images/gallery/xix-2-after.jpg`,
        desc: `Восстановление амбротипа`,
        note: `Амбротип требует бережного обращения. Реконструкция утраченных краёв и деталей проводилась с учётом технологии оригинала.`,
      },
    ],
  },
  color20: {
    title: `Цветные фото 20века`,
    description: `В свое время это было верхом технологического развития фототехники.Но все же имеет место быть значительно улучшить качество,проявить скрытые детали,увидеть современным взглядом.Мы`,
    caption: `В своё время — верх технологий. Теперь в современном качестве`,
    works: [
      {
        before: `/images/gallery/color20-1-before.jpg`,
        after: `/images/gallery/color20-1-after.jpg`,
        desc: `Восстановление цветного снимка 1970-х`,
        note: `Цветная плёнка 1970-х дала характерный оттенок, который со временем исказился. Мы вернули естественность цвета, убрали цветовой шум и повысили детализацию.`,
        review: `Цвета стали такими, какими я их помню. Как будто снова там, в том летнем дворике.`,
      },
      {
        before: `/images/gallery/color20-2-before.jpg`,
        after: `/images/gallery/color20-2-after.jpg`,
        desc: `Реставрация выцветшей фотографии`,
        note: `Сильное выцветание, потеря контраста, мелкие царапины. Комплексная реставрация вернула фотографии жизнь.`,
      },
    ],
  },
  bw20: {
    title: `Черно-белые фото 20века`,
    description: `Самый большой массив для возвращения.Столетие,ожидающие цвета и четкости момента.Мы дали`,
    caption: `Столетие, ожидающее цвета и чёткости`,
    works: [
      {
        before: `/images/gallery/bw20-1-before.jpg`,
        after: `/images/gallery/bw20-1-after.jpg`,
        desc: `Колоризация и реставрация портрета 1940-х`,
        note: `Чёрно-белый портрет был отреставрирован, а затем колоризован с учётом исторических референсов эпохи. Каждый цвет подобран вручную.`,
      },
      {
        before: `/images/gallery/bw20-2-before.jpg`,
        after: `/images/gallery/bw20-2-after.jpg`,
        desc: `Восстановление чёткости документального снимка`,
        note: `Документальная фотография требует точности. Мы восстановили читаемость всех деталей без потери аутентичности.`,
      },
    ],
  },
  digital: {
    title: `Цифровые фотографии`,
    description: `Технологии на максималках,но случай решает судьбу запечатленного момента.Мы`,
    caption: `Технологии на максималках, но случай решает судьбу момента`,
    works: [
      {
        before: `/images/gallery/digital-1-before.jpg`,
        after: `/images/gallery/digital-1-after.jpg`,
        desc: `Восстановление повреждённого JPEG-файла`,
        note: `Файл был повреждён при передаче — артефакты сжатия, потеря блоков изображения. Мы восстановили структуру файла и убрали цифровые дефекты.`,
      },
      {
        before: `/images/gallery/digital-2-before.jpg`,
        after: `/images/gallery/digital-2-after.jpg`,
        desc: `Реконструкция фрагментов снимка`,
        note: `После сбоя носителя часть файла оказалась недоступна. Реконструкция вернула недостающие фрагменты.`,
        review: `Думал, фото с похорон отца потеряны навсегда. Вы вернули их. Низкий поклон.`,
      },
    ],
  },
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const cat = data[slug];

  const [lightbox, setLightbox] = useState<{
    open: boolean;
    work: typeof cat.works[0] | null;
  }>({ open: false, work: null });

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
        <div className="max-w-6xl mx-auto">
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
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
            {cat.description}
          </p>
        </div>
      </section>

      {/* РАБОТЫ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-600 text-sm mb-12 max-w-2xl mx-auto">
            {cat.caption}
          </p>

          <div className="space-y-20">
            {cat.works.map((work, idx) => {
              const teaserText = work.note || work.review || "";
              const teaser = teaserText.length > 120 ? teaserText.slice(0, 120) + "..." : teaserText;

              return (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-4 md:p-8">
                  <BeforeAfterSlider
                    before={work.before}
                    after={work.after}
                    onImageClick={() => setLightbox({ open: true, work })}
                  />

                  <p className="text-center text-gray-500 mt-6 text-base">{work.desc}</p>

                  {/* Тизер текста */}
                  {teaser && (
                    <div className="mt-4 text-center">
                      <p className="text-gray-400 text-sm">{teaser}</p>
                      <p className="text-gray-300 text-xs mt-1">Нажмите на фото, чтобы увидеть полностью</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* КНОПКА ЗАКАЗА */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Интересно увидеть ясно мгновения прошлого? </h2>
          <p className="text-gray-700 mb-8">Отправьте фотографию на ProЯвление — мы вернём ваше мгновение.</p>
          <Link
            href="/uslugi"
            className="inline-block px-10 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Заказать реставрацию
          </Link>
        </div>
      </section>

      {/* ЛАЙТБОКС */}
      {lightbox.work && (
        <Lightbox
          isOpen={lightbox.open}
          onClose={() => setLightbox({ open: false, work: null })}
          before={lightbox.work.before}
          after={lightbox.work.after}
          desc={lightbox.work.desc}
          note={lightbox.work.note}
          review={lightbox.work.review}
        />
      )}
    </div>
  );
}
