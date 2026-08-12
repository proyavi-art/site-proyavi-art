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

            {/* Результат — карточка шириной 2 колонки */}
            <article className="md:col-span-2 lg:col-span-2 lg:col-start-2 bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow text-center">
              <h3 className="text-2xl font-bold mb-4">Результат</h3>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Фотография начинает дышать, возвращая вас в тот самый момент.
              </p>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Она пробуждает яркие воспоминания или создаёт ощущение присутствия —
                будто между вами и прошлым снова исчезает время.
              </p>
              <p className="text-gray-900 font-medium leading-relaxed">
                Без пластика и синтетики.
                Только уважение к источнику и естественность восприятия.
              </p>
            </article>
            <article className="md:col-span-2 lg:col-span-2 lg:col-start-2 bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow text-center">
  <h3 className="text-2xl font-bold mb-6">Результат</h3>
  <div className="max-w-md mx-auto space-y-5">
    <p className="text-lg text-gray-600 leading-relaxed">
      Фотография начинает дышать, возвращая вас в тот самый момент.
    </p>
    <p className="text-gray-500 leading-relaxed">
      Она пробуждает яркие воспоминания или создаёт ощущение присутствия — будто между вами и прошлым снова исчезает время.
    </p>
    <p className="text-gray-900 font-medium leading-relaxed">
      Без пластика и синтетики. Только уважение к источнику и естественность восприятия.
    </p>
  </div>
</article>
            <article className="md:col-span-2 lg:col-span-2 lg:col-start-2 bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
  <div className="border-l-2 border-black pl-8 py-2">
    <h3 className="text-2xl font-bold mb-6">Результат</h3>
    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
      Фотография начинает дышать, возвращая вас в тот самый момент.
    </p>
    <p className="text-gray-500 mb-4 leading-relaxed">
      Она пробуждает яркие воспоминания или создаёт ощущение присутствия — будто между вами и прошлым снова исчезает время.
    </p>
    <p className="text-gray-900 font-medium leading-relaxed">
      Без пластика и синтетики. Только уважение к источнику и естественность восприятия.
    </p>
  </div>
</article>
{/* 4 карточки услуг */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  ... (4 article без изменений)
</div>

{/* Разделитель */}
<div className="mt-20 mb-4 flex items-center gap-4">
  <div className="flex-1 h-px bg-gray-200" />
  <span className="text-sm text-gray-400 tracking-widest uppercase">Результат</span>
  <div className="flex-1 h-px bg-gray-200" />
</div>

{/* Результат — отдельная карточка, не в сетке */}
<article className="max-w-2xl mx-auto bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow text-center">
  <p className="text-xl text-gray-600 mb-5 leading-relaxed">
    Фотография начинает дышать, возвращая вас в тот самый момент.
  </p>
  <p className="text-gray-500 mb-5 leading-relaxed">
    Она пробуждает яркие воспоминания или создаёт ощущение присутствия — будто между вами и прошлым снова исчезает время.
  </p>
  <p className="text-gray-900 font-medium leading-relaxed">
    Без пластика и синтетики. Только уважение к источнику и естественность восприятия.
  </p>
</article>
          </div>
        </div>
      </section>

      {/* ПРОЦЕСС */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Как это работает</h2>
        <div className="space-y-12">
          {[
            { step: "01", title: "Загрузите фото", desc: "Отправьте снимок через форму на сайте или в Telegram" },
            { step: "02", title: "Оценка", desc: "Мы оцениваем состояние фото и сообщаем стоимость и сроки" },
            { step: "03", title: "Реставрация", desc: "AI обрабатывает изображение, художник доводит до идеала" },
            { step: "04", title: "Результат", desc: "Получаете готовое фото в высоком разрешении" },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start">
              <span className="text-4xl font-bold text-gray-200 flex-shrink-0 w-16">{item.step}</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Верни память к жизни</h2>
          <p className="text-gray-400 text-lg mb-10">
            Каждая фотография — это история. Мы помогаем сохранить её для будущих поколений.
          </p>
          <Link
            href="/uslugi"
            className="inline-block px-10 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-colors"
          >
            Начать реставрацию
          </Link>
        </div>
      </section>
    </>
  );
}
