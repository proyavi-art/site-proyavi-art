"use client";
import { useState } from "react";
import Link from "next/link";

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b, result: a + b };
}

export default function Uslugi() {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function refreshCaptcha() {
    setCaptcha(generateCaptcha());
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const captchaUser = formData.get("captcha")?.toString().trim();
    const captchaResult = formData.get("captcha_result")?.toString().trim();
    if (captchaUser !== captchaResult) {
      setError("❌ Неверный ответ на капчу. Попробуйте снова.");
      refreshCaptcha();
      setLoading(false);
      return;
    }

    const file = formData.get("file_upload") as File;
    const fileLink = formData.get("file_link")?.toString().trim();
    if ((!file || file.size === 0) && !fileLink) {
      setError("❌ Необходимо загрузить файл или указать ссылку на облако.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        window.location.href = "/spasibo";
      } else {
        setError(data.error || "Ошибка отправки. Попробуйте позже.");
      }
    } catch (err) {
      setError("Ошибка сети. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#80AEBA]">
      {/* Навигация */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <Link
          href="/"
          className="inline-block text-gray-700 hover:text-black transition-colors text-sm font-medium"
        >
          ← Вернуться на главную
        </Link>
      </div>

      {/* ОСНОВНАЯ УСЛУГА */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/40" />
            <span className="text-sm text-white/70 tracking-widest uppercase font-medium">Основная услуга</span>
            <div className="flex-1 h-px bg-white/40" />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Комплексное восстановление</h1>
            <p className="text-xl text-white/80 mb-2">До состояния современного фотоизображения.</p>
            <p className="text-2xl font-bold text-white">от 1 500 ₽</p>
          </div>

          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            В зависимости от состояния оригинала комплексное восстановление может включать несколько видов работ:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реставрация</h3>
              <p className="text-gray-500 leading-relaxed">
                Устранение пыли, царапин, заломов, пятен и других следов времени.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Восстановление качества</h3>
              <p className="text-gray-500 leading-relaxed">
                Повышение детализации, читаемости, восстановление света и объёма.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реконструкция</h3>
              <p className="text-gray-500 leading-relaxed">
                Восстановление повреждённых и утраченных элементов изображения.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Колоризация</h3>
              <p className="text-gray-500 leading-relaxed">
                Возвращение естественного цвета для полноценного восприятия.
              </p>
            </article>
          </div>

          <p className="text-center text-white/70 max-w-3xl mx-auto leading-relaxed">
            На каждом этапе возвращения запечатленного момента стоит внимание и бережное отношение к источнику — AI-оператора реставрации фотоизображений.
          </p>
        </div>
      </section>

      {/* ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/40" />
            <span className="text-sm text-white/70 tracking-widest uppercase font-medium">Дополнительные услуги</span>
            <div className="flex-1 h-px bg-white/40" />
          </div>

          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            Исходя из потребности заказчика, каждую из работ мы можем выполнить отдельно:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реставрация</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Устранение пыли, царапин, заломов, пятен и других следов времени с цифровой копии фотографии.
              </p>
              <p className="text-gray-900 font-bold">от 500 ₽</p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Восстановление качества</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Повышение резкости и детализации, контрастности, восстановление света и объёма цифровой копии фотоизображения.
              </p>
              <p className="text-gray-900 font-bold">от 500 ₽</p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Реконструкция</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Восстановление повреждённых и утраченных элементов изображения.
              </p>
              <p className="text-gray-900 font-bold">от 1 000 ₽</p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Колоризация</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Возвращение естественного цвета для полноценного восприятия фотографии.
              </p>
              <p className="text-gray-900 font-bold">от 1 000 ₽</p>
            </article>
          </div>
        </div>
      </section>

      {/* ФОРМА ЗАЯВКИ */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto bg-[#F0F0DA] rounded-2xl p-8 md:p-12 shadow-[0_25px_45px_rgba(0,0,0,0.2)] border border-[rgba(212,175,55,0.4)]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Заявка на ProЯвление</h2>
          <p className="text-gray-500 mb-8">Заполните форму, и мы вернёмся к вам с оценкой</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя *</label>
              <input
                name="name"
                required
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-black focus:outline-none transition-colors"
                placeholder="Олег"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                name="email"
                required
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-black focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Услуга</label>
              <select
                name="service"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-black focus:outline-none transition-colors"
              >
                <option value="">Выберите услугу</option>
                <option value="Комплексное восстановление">Комплексное восстановление</option>
                <option value="Реставрация">Реставрация</option>
                <option value="Восстановление качества">Восстановление качества</option>
                <option value="Реконструкция">Реконструкция</option>
                <option value="Колоризация">Колоризация</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                История снимка / Комментарии
              </label>
              <textarea
                name="comments"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-black focus:outline-none transition-colors resize-none"
                placeholder="Расскажите о фотографии: год, состояние, что хотите получить..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Загрузить файл</label>
              <input
                name="file_upload"
                type="file"
                accept=".jpg,.jpeg,.png,.tiff,.bmp,.zip,.rar"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-black file:text-white file:text-sm hover:file:bg-gray-800 transition-colors"
              />
              <p className="text-xs text-gray-400 mt-1">До 50 МБ: jpg, png, tiff, bmp, zip, rar</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#F0F0DA] text-gray-400">или</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ссылка на облако
              </label>
              <input
                name="file_link"
                type="url"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-black focus:outline-none transition-colors"
                placeholder="https://drive.google.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Капча: сколько будет {captcha.a} + {captcha.b}? *
              </label>
              <input
                name="captcha"
                required
                type="text"
                inputMode="numeric"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:border-black focus:outline-none transition-colors"
                placeholder="Введите ответ"
              />
              <input type="hidden" name="captcha_result" value={captcha.result} />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {loading ? "Отправка..." : "Отправить заявку"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
