import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

export async function POST(request: Request) {
  try {
    const { name, phone, description } = await request.json();

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json({ success: false, error: "Telegram не настроен" }, { status: 500 });
    }

    const text = `📩 Новая заявка ProЯвь

👤 Имя: ${name}
📞 Телефон: ${phone}
📝 Описание: ${description || "—"}`;

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
    });

    if (!res.ok) throw new Error("Telegram API error");

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Ошибка отправки" }, { status: 500 });
  }
}
