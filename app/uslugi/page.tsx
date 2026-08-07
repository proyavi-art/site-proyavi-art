"use client";
import { useState } from "react";

export default function Uslugi() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = {
      name: data.get("name"),
      phone: data.get("phone"),
      description: data.get("description"),
    };

    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      alert("Ошибка отправки. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">Заказать реставрацию</h1>
      <p className="text-gray-500 text-center mb-12">
        Заполните форму — мы свяжемся с вами и обсудим детали
      </p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Заявка отправлена!</h2>
          <p className="text-green-700">Мы получили вашу заявку и свяжемся с вами в ближайшее время.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-2 border border-green-300 rounded-lg text-green-700 hover:bg-green-100 transition"
          >
            Отправить ещё одну
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <div>
            <label className="block text-sm font-medium mb-2">Ваше имя</label>
            <input
              name="name"
              required
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors"
              placeholder="Олег"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Телефон или Telegram</label>
            <input
              name="phone"
              required
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors"
              placeholder="+7 (999) 000-00-00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Описание фото</label>
            <textarea
              name="description"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none transition-colors resize-none"
              placeholder="Старое семейное фото, выцвело, есть царапины..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {loading ? "Отправка..." : "Отправить заявку"}
          </button>
          <p className="text-xs text-gray-400 text-center">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных
          </p>
        </form>
      )}

      {/* Прайс */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Стоимость услуг</h2>
        <div className="space-y-4">
          {[
            { name: "Лёгкая ретушь", price: "от 500 ₽", desc: "Удаление мелких царапин, пятен, коррекция цвета" },
            { name: "Средняя реставрация", price: "от 1 500 ₽", desc: "Восстановление повреждённых участков, реконструкция фона" },
            { name: "Сложная реконструкция", price: "от 3 000 ₽", desc: "Восстановление утраченных лиц, деталей, полная реконструкция" },
            { name: "Колоризация", price: "от 1 000 ₽", desc: "Окрашивание чёрно-белого фото в естественные цвета" },
            { name: "Пакет «Семейный архив»", price: "от 10 000 ₽", desc: "Реставрация 10+ фотографий с индивидуальной скидкой" },
          ].map((item) => (
            <div key={item.name} className="flex justify-between items-center p-5 bg-gray-50 rounded-xl border border-gray-100">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <span className="font-bold text-lg whitespace-nowrap ml-4">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
