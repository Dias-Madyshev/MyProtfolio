const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // Подключаем переменные окружения

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; // Храним токен в .env
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.post("/send-message", async (req, res) => {
  const { username, phoneNumber, email, subject, message } = req.body;

  if (!username || !phoneNumber || !email || !subject || !message) {
    return res.status(400).json({ error: "Все поля обязательны!" });
  }

  const text = `
📩 <b>Новое сообщение с портфолио:</b>
👤 <b>Имя:</b> ${username}
📞 <b>Телефон:</b> ${phoneNumber}
📧 <b>Email:</b> ${email}
📌 <b>Тема:</b> ${subject}
💬 <b>Сообщение:</b> ${message}
  `;

  try {
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
      }
    );

    res.json({ success: "Сообщение отправлено!" });
  } catch (error) {
    console.error("Ошибка при отправке в Telegram:", error);
    res.status(500).json({ error: "Ошибка при отправке сообщения" });
  }
});

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
