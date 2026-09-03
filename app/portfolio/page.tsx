import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const individualCategories = [
  {
    id: "family",
    title: "Семейные архивы",
    description: "Сохраните для себя и своих потомков моменты жизни родных и близких в привычном восприятии.",
    before: "/images/gallery/family-before.jpg",
    after: "/images/gallery/family-after.jpg",
    caption: "Из семейных фотоархивов — мгновения, сохранившие взгляд и улыбку близкого человека или родственника.",
  },
  {
    id: "places",
    title: "Места и события",
    description: "Памятное событие или место, куда хотелось бы вернуться. Вы снова там, чтобы вспомнить эмоции.",
    before: "/images/gallery/places-before.jpg",
    after: "/images/gallery/places-after.jpg",
    caption: "Места и события, которые хочется увидеть снова — с яркостью и чёткостью современного взгляда.",
  },
  {
    id: "portrait",
    title: "Портрет",
    description: "Взгляд, улыбка, локон волос близкого вам человека — то, за что цепляется ваша память. Возможно, это будет яркая вспышка.",
    before: "/images/gallery/portrait-before.jpg",
    after: "/images/gallery/portrait-after.jpg",
    caption: "Портрет, в котором оживает характер. Каждая деталь лица — как в тот самый момент.",
  },
  {
    id: "instant",
    title: "Моментальные фотоснимки",
    description: "Момент выхвачен и тут же проявлен на Polaroid-снимке. Но много деталей не видно. Увидите полностью.",
    before: "/images/gallery/instant-before.jpg",
    after: "/images/gallery/instant-after.jpg",
    caption: "Polaroid и моментальные снимки — мгновение, застывшее во времени, теперь в полном объёме.",
  },
];

const corporateCategories = [
  {
    id: "xix",
    title: "Заря фотографии. XIX век",
    description: "Технологии сохранения момента до появления плёнки — дагерротипы, калотипы, амбротипы, ферротипы, альбуминовая печать. Мы дали свет и очистили от времени.",
    before: "/images/gallery/xix-before.jpg",
    after: "/images/gallery/xix-after.jpg",
    caption: "Дагерротипы и амбротипы — возвращение света в первые фотографии человечества.",
  },
  {
    id: "color20",
    title: "Цветные фото 20 века",
    description: "В своё время это было верхом технологического развития фототехники. Но всё же имеет место быть значительно улучшить качество, проявить скрытые детали, увидеть современным взглядом.",
    before: "/images/gallery/color20-before.jpg",
    after: "/images/gallery/color20-after.jpg",
    caption: "Цветные снимки эпохи — насыщенность, детализация и чистота, которых не хватало полвека.",
  },
  {
    id: "bw20",
    title: "Чёрно-белые фото 20 века",
    description: "Самый большой массив для возвращения. Столетие, ожидающее цвета и чёткости момента. Мы дали и то, и другое.",
    before: "/images/gallery/bw20-before.jpg",
    after: "/images/gallery/bw20-after.jpg",
    caption: "Чёрно-белая классика — от портрета до документальной съёмки, восстановленная до современного качества.",
  },
  {
    id: "digital",
    title: "Цифровые фотографии",
    description: "Технологии на максималках, но случай решает судьбу запечатлённого момента. Мы вернём то, что казалось потерянным.",
    before: "/images/gallery/digital-before.jpg",
    after: "/images/gallery/digital-after.jpg",
    caption: "Цифровые снимки с повреждённых носителей — восстановление после сбоев, удалений и повреждений.",
  },
];

function CategorySection({
  category,
}: {
  category: {
    id: string;
    title: string;
    description: string;
    before: string;
    after: string;
    caption: string;
  };
}) {
  return (
    <div className="mb-20 last:mb-0">
      {/* Заголовок подраздела с линиями */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-gray-200" />
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">{category.title}</h3>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Описание */}
      <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
        {category.description}
      </p>

      {/* Слайдер до/после */}
      <div className="max-w-3xl mx-auto mb-6">
        <BeforeAfterSlider before={category.before} after={category.after} />
      </div>

      {/* Подпись к фото */}
      <p className="text-center text-sm text-gray-400 mb-10 max-w-xl mx-auto">
        {category.caption}
      </p>

      {/* Кнопка */}
      <div className="text-center">
        <Link
          href="/uslugi"
          className="inline-block px-8 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
        >
          Заказать реставрацию
        </Link>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 px-4 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Галерея</h1>
          <p className="text-xl text-gray-500">
            Мы вернули мгновения. Посмотрите, как это выглядит.
          </p>
        </div>
      </section>

      {/* ИНДИВИДУАЛЬНЫМ ЗАКАЗЧИКАМ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400 tracking-widest uppercase font-medium">Индивидуальным заказчикам</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {individualCategories.map((cat) => (
            <CategorySection key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* КОРПОРАТИВНЫМ КЛИЕНТАМ */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400 tracking-widest uppercase font-medium">Корпоративным клиентам</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <p className="text-center text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed">
            Мы сотрудничаем с музеями, архивами и организациями по восстановлению оцифрованных изображений. Для будущего — с теплотой и уважением.
          </p>

          {corporateCategories.map((cat) => (
            <CategorySection key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Сохраните прошлое настоящим.</h2>
          <p className="text-gray-400 text-lg mb-10">
            Убрать шум. Оставить свет. Вернуть мгновение.
          </p>
          <Link
            href="/uslugi"
            className="inline-block px-10 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-colors"
          >
            Загрузить фотографию на оценку
          </Link>
        </div>
      </section>
    </>
  );
}
