import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const service = formData.get("service")?.toString().trim() || "";
    const comments = formData.get("comments")?.toString().trim() || "";
    const fileLink = formData.get("file_link")?.toString().trim() || "";
    const captchaUser = formData.get("captcha")?.toString().trim() || "";
    const captchaResult = formData.get("captcha_result")?.toString().trim() || "";

    if (captchaUser !== captchaResult) {
      return NextResponse.json(
        { success: false, error: "Неверный ответ на капчу" },
        { status: 400 }
      );
    }

    const file = formData.get("file_upload") as File | null;
    const hasFile = file && file.size > 0;
    const hasLink = !!fileLink;

    if (!hasFile && !hasLink) {
      return NextResponse.json(
        { success: false, error: "Необходимо загрузить файл или указать ссылку" },
        { status: 400 }
      );
    }

    let text = `📷 **НОВАЯ ЗАЯВКА НА PROЯВЛЕНИЕ**\n\n`;
    text += `👤 Имя: ${name}\n`;
    text += `📧 Email: ${email}\n`;
    text += `🛠 Услуга: ${service || "—"}\n\n`;
    text += `📖 История снимка:\n${comments || "—"}\n\n`;
    if (hasLink) text += `🔗 Ссылка на облако: ${fileLink}\n`;

    if (BOT_TOKEN && CHAT_ID) {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text.replace(/\\n/g, "\n"),
          parse_mode: "Markdown",
        }),
      });

      if (hasFile && file) {
        const telegramFormData = new FormData();
        telegramFormData.append("chat_id", CHAT_ID);
        telegramFormData.append("document", file, file.name);
        telegramFormData.append("caption", `Файл от ${name}`);

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
          method: "POST",
          body: telegramFormData,
        });
      }
    }

    const smtpHost = process.env.SMTP_HOST;
    if (smtpHost) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER || "",
          pass: process.env.SMTP_PASS || "",
        },
      });

      await transporter.sendMail({
        from: `"ProЯвь" <${process.env.SMTP_USER}>`,
        to: "moment@proyavi.art",
        subject: `Новая заявка на ProЯвку — ${name}`,
        text: text.replace(/\\n/g, "\n"),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Ошибка сервера" },
      { status: 500 }
    );
  }
}
