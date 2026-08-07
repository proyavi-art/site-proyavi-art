import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const works = [
  { id: 1, title: "Семейный портрет, 1950-е", desc: "Восстановление цвета, удаление царапин", before: "/images/work1-before.jpg", after: "/images/work1-after.jpg" },
  { id: 2, title: "Военный снимок", desc: "Реконструкция утраченных фрагментов", before: "/images/work2-before.jpg", after: "/images/work2-after.jpg" },
  { id: 3, title: "Детская фотография", desc: "Колоризация и ретушь", before: "/images/work3-before.jpg", after: "/images/work3-after.jpg" },
];

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">Портфолио</h1>
      <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
        Каждая работа — это возвращённый момент. Перетащите ползунок, чтобы увидеть преображение.
      </p>

      <div className="space-y-20">
        {works.map((work) => (
          <div key={work.id}>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{work.title}</h2>
              <p className="text-gray-500 text-sm">{work.desc}</p>
            </div>
            <BeforeAfterSlider before={work.before} after={work.after} />
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-16">
        * Замените изображения в папке public/images/ на свои работы
      </p>
    </div>
  );
}
