import Link from "next/link";

const individual = [
  {
    tag: "Реставрация",
    title: "Семейные архивы",
    text: "Сохраните для себя и своих потомков моменты жизни родных и близких в привычном восприятии.",
    img: "/images/gallery/family.jpg",
    caption: "Из семейных фотоархивов — мгновения, сохранившие взгляд и улыбку близкого человека или родственника.",
  },
  {
    tag: "Реставрация",
    title: "Места и события",
    text: "Вы снова там. Чтобы вспомнить эмоции и ощущения, которые казались навсегда утерянными.",
    img: "/images/gallery/places.jpg",
    caption: "Памятное событие или место, куда хотелось бы вернуться — теперь в полном объёме и яркости.",
  },
  {
    tag: "Реставрация",
    title: "Портрет",
    text: "Взгляд, улыбка, локон волос близкого вам человека — то, за что цепляется ваша память. Возможно, это будет яркая вспышка.",
    img: "/images/gallery/portrait.jpg",
    caption: "Портрет, в котором оживает характер. Каждая деталь лица — как в тот самый момент.",
  },
  {
    tag: "Реставрация",
    title: "Моментальные фотоснимки",
    text: "Момент выхвачен и тут же проявлен на Polaroid-снимке. Но много деталей не видно. Увидите полностью.",
    img: "/images/gallery/instant.jpg",
    caption: "Polaroid и моментальные снимки — мгновение, застывшее во времени, теперь в полном объёме.",
  },
];

const corporate = [
  {
    title: "Заря фотографии. XIX век",
    text: "Технологии сохранения момента до появления плёнки — дагерротипы, калотипы, амбротипы, ферротипы, альбуминовая печать. Мы дали свет и очистили от времени.",
    img: "/images/gallery/xix.jpg",
    caption: "Возвращение света в первые фотографии человечества — от дагерротипов до альбуминовой печати.",
  },
  {
    title: "Цветные фото 20 века",
    text: "В своё время это было верхом технологического развития фототехники. Но всё же имеет место быть значительно улучшить качество, проявить скрытые детали, увидеть современным взглядом.",
    img: "/images/gallery/color20.jpg",
    caption: "Цветные снимки эпохи — насыщенность, детализация и чистота, которых не хватало полвека.",
  },
  {
    title: "Чёрно-белые фото 20 века",
    text: "Самый большой массив для возвращения. Столетие, ожидающее цвета и чёткости момента. Мы дали и то, и другое.",
    img: "/images/gallery/bw20.jpg",
    caption: "Чёрно-белая классика — от портрета до документальной съёмки, восстановленная до современного качества.",
  },
  {
    title: "Цифровые фотографии",
    text: "Технологии на максималках, но случай решает судьбу запечатлённого момента. Мы вернём то, что казалось потерянным.",
    img: "/images/gallery/digital.jpg",
    caption: "Цифровые снимки с повреждённых носителей — восстановление после сбоев, удалений и повреждений.",
  },
];

function Item({ item }: { item: { tag?: string; title: string; text: string; img: string; caption: string } }) {
  return (
    <article className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
      {item.tag && (
        <span className="inline-block text-xs font-medium text-gray-400 tracking-widest uppercase mb-3">
          {item.tag}
        </span>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
      <p className="text-gray-500 leading-relaxed mb-8">{item.text}</p>

      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-4">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <p className="text-sm text-gray-400 mb-8">{item.caption}</p>

      <Link
        href="/uslugi"
        className="inline-block px-8 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
      >
        Заказать реставрацию
      </Link>
    </article>
  );
}

export default function Portfolio() {
  return (
    <>
      {/* ЗАГОЛОВОК */}
      <section className="pt-24 pb-12 px-4 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Мы вернули.</h1>
          <p className="text-xl text-gray-500">
            Без компромиссов. Каждое мгновение — как оно было, только ярче.
          </p>
        </div>
      </section>

      {/* ИНДИВИДУАЛЬНЫМ ЗАКАЗЧИКАМ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400 tracking-widest uppercase font-medium">Индивидуальным заказчикам</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed">
            Из семейных фотоархивов, мгновения, сохранившие взгляд и улыбку близкого человека или родственника. Памятное событие или место, куда хотелось бы вернуться.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {individual.map((item) => (
              <Item key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* КОРПОРАТИВНЫМ КЛИЕНТАМ */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400 tracking-widest uppercase font-medium">Корпоративным клиентам</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <p className="text-center text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed">
            Мы сотрудничаем с музеями, архивами и организациями по восстановлению оцифрованных изображений. Для будущего — с теплотой и уважением.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {corporate.map((item) => (
              <Item key={item.title} item={item} />
            ))}
          </div>
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
