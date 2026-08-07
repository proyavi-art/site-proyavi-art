export default function ONas() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">О проекте ProЯвь</h1>

      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <p>
          <strong className="text-black">ProЯвь</strong> — это лаборатория AI-реставрации и реконструкции фотографий.
          Мы возвращаем к жизни старые снимки, сохраняя их душу и характер.
        </p>

        <p>
          Наш подход — гибридный: искусственный интеллект убирает повреждения и восстанавливает
          детали, а человек-художник следит за тем, чтобы результат оставался подлинным и живым.
        </p>

        <h2 className="text-2xl font-bold text-black mt-12 mb-4">Почему ProЯвь?</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-black font-bold">✦</span>
            <span>Технологии последнего поколения — нейросети, обученные на миллионах фотографий</span>
          </li>
          <li className="flex gap-3">
            <span className="text-black font-bold">✦</span>
            <span>Ручная доводка каждого снимка — AI не заменяет художника, а усиливает его</span>
          </li>
          <li className="flex gap-3">
            <span className="text-black font-bold">✦</span>
            <span>Любая сложность — от лёгкой ретуши до полной реконструкции утраченных лиц</span>
          </li>
          <li className="flex gap-3">
            <span className="text-black font-bold">✦</span>
            <span>Результат в высоком разрешении, готовый к печати и оцифровке</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-black mt-12 mb-4">Философия</h2>
        <p>
          Каждая фотография — это не просто бумага и краска. Это момент, эмоция, связь между
          поколениями. Мы не «рисуем» новое фото поверх старого — мы бережно восстанавливаем то,
          что было утрачено временем.
        </p>
      </div>
    </div>
  );
}
