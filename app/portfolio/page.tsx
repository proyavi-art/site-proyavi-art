import Link from "next/link";

const categories = [
  {
    slug: "family",
    tag: "Реставрация",
    title: "Семейные архивы",
    text: "Сохраните для себя и своих потомков моменты жизни родных и близких в привычном восприятии",
    img: "/images/gallery/family.jpg",
  },
  {
    slug: "places",
    tag: "Реставрация",
    title: "Места и события",
    text: "Вы снова там.Что бы вспомнить эмоции и",
    img: "/images/gallery/places.jpg",
  },
  {
    slug: "portrait",
    tag: "Реставрация",
    title: "Портрет",
    text: "Взгляд,улыбка,локон волос близкого вам человека -то,за что цепляется Ваша память.Возможно,это будет яркая вспышка -",
    img: "/images/gallery/portrait.jpg",
  },
  {
    slug: "instant",
    tag: "Реставрация",
    title: "Моментальные фотоснимки",
    text: "Момент выхвачен и тут же проявлен на polaroid снимке.Но много деталей не видно.Увидите полностью",
    img: "/images/gallery/instant.jpg",
  },
  {
    slug: "xix",
    tag: "Реставрация",
    title: "Заря фотографии.XIX век",
    text: "Технологии сохранения момента до появления пленки -дагерротипы,калотипы,амбротипы,ферротипы,Альбуминовая печать.Мы дали свет и очистили от",
    img: "/images/gallery/xix.jpg",
  },
  {
    slug: "color20",
    tag: "Реставрация",
    title: "Цветные фото 20века",
    text: "В свое время это было верхом технологического развития фототехники.Но все же имеет место быть значительно улучшить качество,проявить скрытые детали,увидеть современным взглядом.Мы",
    img: "/images/gallery/color20.jpg",
  },
  {
    slug: "bw20",
    tag: "Реставрация",
    title: "Черно-белые фото 20века",
    text: "Самый большой массив для возвращения.Столетие,ожидающие цвета и четкости момента.Мы дали",
    img: "/images/gallery/bw20.jpg",
  },
  {
    slug: "digital",
    tag: "Реставрация",
    title: "Цифровые фотографии",
    text: "Технологии на максималках,но случай решает судьбу запечатленного момента.Мы",
    img: "/images/gallery/digital.jpg",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-[#A7D48D]">
      {/* ЗАГОЛОВОК */}
      <section className="pt-24 pb-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Мы вернули.</h1>
        </div>
      </section>

      {/* ИНДИВИДУАЛЬНЫМ ЗАКАЗЧИКАМ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-black/10" />
            <span className="text-sm text-gray-700 tracking-widest uppercase font-medium">Индивидуальным заказчикам</span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Из семейных фотоархивов,мгновения,сохранившие взляд улыбку близкого человека или родственника.Памятное событие или место,куда хотелось бы
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.slice(0, 4).map((cat) => (
              <Link
                key={cat.slug}
                href={`/portfolio/${cat.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">{cat.tag}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{cat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cat.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* КОРПОРАТИВНЫМ КЛИЕНТАМ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-black/10" />
            <span className="text-sm text-gray-700 tracking-widest uppercase font-medium">Корпоративным клиентам</span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Мы сотрудничаем с музеями,архивами и организациями по восстановлению оцифрованных изображений.Для будущего,с теплотой и
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.slice(4).map((cat) => (
              <Link
                key={cat.slug}
                href={`/portfolio/${cat.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">{cat.tag}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{cat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cat.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Сохраните прошлое настоящим.</h2>
          <p className="text-gray-700 text-lg mb-10">
            Убрать шум. Оставить свет. Вернуть мгновение.
          </p>
          <Link
            href="/uslugi"
            className="inline-block px-10 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Загрузить фотографию на оценку
          </Link>
        </div>
      </section>
    </div>
  );
}
