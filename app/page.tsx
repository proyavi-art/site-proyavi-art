import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <>
      {/* HERO со слайдером фонов */}
      <HeroSlider>
        <img
          src="/images/logo.png"
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Результат говорит сам за себя</h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
          Перетащите ползунок, чтобы увидеть разницу между оригиналом и реставрацией
        </p>
        <BeforeAfterSlider
          before="/images/demo-before.jpg"
          after="/images/demo-after.jpg"
        />
        <p className="text-center text-sm text-gray-400 mt-6">
          * Для демонстрации замените изображения в папке public/images/
        </p>
      </section>

      {/* УСЛУГИ */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Что мы делаем</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Реставрация",
                desc: "Удаление царапин, пятен, складок. Восстановление цвета и контраста.",
                icon: "✦",
              },
              {
                title: "Реконструкция",
                desc: "Восстановление утраченных фрагментов: лица, фон, детали одежды.",
                icon: "◈",
              },
              {
                title: "Колоризация",
                desc: "Окрашивание чёрно-белых фотографий в естественные цвета с помощью ИИ.",
                icon: "◉",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
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
