import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <>
      {/* HERO со слайдером фонов */}
      <HeroSlider>
        <img
          src="/images/logo-white.png"
          alt="ProЯвь"
          className="mx-auto mb-6 w-auto max-w-[280px] md:max-w-[400px] h-auto drop-shadow-lg"
        />
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed">
          Территория возвращённых моментов памяти.
          <br />
          Реставрация и реконструкция фотографий инструментами AI, но с теплотой и уважением к оригиналу.
          <br />
          Мы убираем шум и оставляем свет.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/uslugi"
            className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-colors"
          >
            Отправить фото
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 border border-white/50 text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
          >
            Смотреть работы
          </Link>
        </div>
      </HeroSlider>

      {/* ДО/ПОСЛЕ ДЕМО */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Результат нашей работы — возвращённое мгновение.</h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
          Перетащите ползунок, чтобы увидеть разницу между сохранившейся фотографией и реставрацией момента.
        </p>
        <BeforeAfterSlider
          before="/images/demo-before.jpg"
          after="/images/demo-after.jpg"
        />
        <p className="text-center text-sm text-gray-500 mt-6">
          Трансформация фотографии в качество, которое привык воспринимать мозг современного человека.
        </p>
      </section>

      {/* УСЛУГИ + РЕЗУЛЬТАТ */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Что мы делаем</h2>

          {/* 4 карточки */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Реставрация</h3>
              <p className="text-gray-500 leading-relaxed">
                Убираем пыль, царапины, заломы и следы времени,
                сохраняя оригинальную форму изображения.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Реконструкция</h3>
              <p className="text-gray-500 leading-relaxed">
                Восстанавливаем утраченные элементы и отделяем подлинную
                информацию фотографии от шума и дефектов технологии.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Колоризация</h3>
              <p className="text-gray-500 leading-relaxed">
                Возвращаем естественную цветовую палитру, свет, объём
                и эмоциональную тональность эпохи.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Контроль специалиста</h3>
              <p className="text-gray-500 leading-relaxed">
                AI ускоряет работу, но каждое ключевое решение принимает человек.
                Последнее слово всегда остаётся за реставратором.
              </p>
            </article>
          </div>

          {/* Разделитель */}
          <div className="mt-20 mb-10 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-400 tracking-widest uppercase font-medium">Результат</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Результат — текст прямо на фоне секции */}
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <p className="text-xl text-gray-700 leading-relaxed">
              Фотография начинает дышать, возвращая вас в тот самый момент.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Она пробуждает яркие воспоминания или создаёт ощущение присутствия —
              будто между вами и прошлым снова исчезает время.
            </p>
            <p className="text-gray-900 font-medium leading-relaxed">
              Без пластика и синтетики.
              Только уважение к источнику и естественность восприятия.
            </p>
          </div>
        </div>
      </section>

      {/* ПРОЦЕСС — временная шкала */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Как это работает</h2>

          <div className="relative">
            {/* Вертикальная линия */}
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gray-300" />

            {[
              {
                step: "01",
                title: "Оцифруйте фотографию",
                desc: "Отсканируйте фотографию или сфотографируйте высококачественной камерой. Рекомендуемое разрешение 600 dpi, глубина 16-32 бит — это позволит проявить элементы в тенях.",
              },
              {
                step: "02",
                title: "Загрузите фото",
                desc: "Отправьте нам снимок через форму на сайте или в Telegram.",
              },
              {
                step: "03",
                title: "Оценка",
                desc: "Мы оцениваем состояние фотографии, объём работы и сообщаем стоимость и сроки.",
              },
              {
                step: "04",
                title: "Точка трансформации",
                desc: "Мы отделяем шум, следы времени и несовершенства технологии от подлинного изображения, сохраняя его характер, форму и эмоциональную тональность, транслируя в современное визуальное пространство.",
              },
              {
                step: "05",
                title: "Результат для оценки",
                desc: "До оплаты вы получаете фрагмент готовой работы в высоком разрешении и оцениваете, насколько удовлетворены результатом.",
              },
              {
                step: "06",
                title: "Оплата",
                desc: "Если результат вас устраивает, вы производите оплату удобным способом.",
              },
              {
                step: "07",
                title: "Получение возвращённого момента",
                desc: "После поступления оплаты вы получаете на ваш контактный адрес полное восстановленное изображение в цифровом формате. Без шума, но с возвращённым светом.",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative pl-14 pb-12 last:pb-0">
                {/* Точка с номером на линии */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-700 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 pt-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Сохраните прошлое настоящим.</h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            ProЯвь возвращает свет мгновению, но решить, что это мгновение достойно быть возвращённым, можете только Вы.
          </p>
          <p className="text-gray-300 text-base mb-10 tracking-wide">
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
