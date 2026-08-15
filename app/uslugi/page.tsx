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
    <div className="min-h-screen bg-[#80AEBA] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-[#F0F0DA] rounded-[48px] p-8 md:p-12 shadow-[0_25px_45px_rgba(0,0,0,0.2)] border border-[rgba(212,175,55,0.4)]">
        <Link
          href="/"
          className="inline-block mb-6 text-[#1A3B3A] hover:text-[#D4AF37] transition-colors text-sm font-medium"
        >
          ← Вернуться на главную
        </Link>

        <h1 className="text-3xl font-bold text-[#1A3B3A] mb-2">Заявка на ProЯвление</h1>
        <p className="text-[#5F7F7A] mb-8">Заполните форму, и мы вернёмся к вам с оценкой</p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#2C4A48] mb-2">Ваше имя *</label>
            <input
              name="name"
              required
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-[#C0D0C8] bg-white text-[#1A3B3A] focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="Олег"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C4A48] mb-2">Email *</label>
            <input
              name="email"
              required
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-[#C0D0C8] bg-white text-[#1A3B3A] focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C4A48] mb-2">Услуга</label>
            <select
              name="service"
              className="w-full px-4 py-3 rounded-xl border border-[#C0D0C8] bg-white text-[#1A3B3A] focus:border-[#D4AF37] focus:outline-none transition-colors"
            >
              <option value="">Выберите услугу</option>
              <option value="Реставрация">Реставрация</option>
              <option value="Реконструкция">Реконструкция</option>
              <option value="Колоризация">Колоризация</option>
              <option value="Комплексная работа">Комплексная работа</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C4A48] mb-2">
              История снимка / Комментарии
            </label>
            <textarea
              name="comments"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-[#C0D0C8] bg-white text-[#1A3B3A] focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
              placeholder="Расскажите о фотографии: год, состояние, что хотите получить..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C4A48] mb-2">Загрузить файл</label>
            <input
              name="file_upload"
              type="file"
              accept=".jpg,.jpeg,.png,.tiff,.bmp,.zip,.rar"
              className="w-full px-4 py-3 rounded-xl border border-[#C0D0C8] bg-white text-[#1A3B3A] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#1A3B3A] file:text-white file:text-sm hover:file:bg-[#2C4A48] transition-colors"
            />
            <p className="text-xs text-[#5F7F7A] mt-1">До 50 МБ: jpg, png, tiff, bmp, zip, rar</p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#C0D0C8]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#F0F0DA] text-[#5F7F7A]">или</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C4A48] mb-2">
              Ссылка на облако
            </label>
            <input
              name="file_link"
              type="url"
              className="w-full px-4 py-3 rounded-xl border border-[#C0D0C8] bg-white text-[#1A3B3A] focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="https://drive.google.com/..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C4A48] mb-2">
              Капча: сколько будет {captcha.a} + {captcha.b}? *
            </label>
            <input
              name="captcha"
              required
              type="text"
              inputMode="numeric"
              className="w-full px-4 py-3 rounded-xl border border-[#C0D0C8] bg-white text-[#1A3B3A] focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="Введите ответ"
            />
            <input type="hidden" name="captcha_result" value={captcha.result} />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#1A3B3A] text-white rounded-[60px] font-bold text-lg hover:bg-[#2C4A48] transition-colors disabled:opacity-50"
          >
            {loading ? "Отправка..." : "Отправить заявку"}
          </button>
        </form>
      </div>
    </div>
  );
}
