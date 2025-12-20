const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const PORT = 5000;

// Telegram bot tokeningizni kiriting
const BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Middleware
app.use(cors());
app.use(express.json());

// User ma'lumotlarini saqlash uchun oddiy in-memory storage
const users = {};

// Telegram bot commands
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from.username || 'Unknown';
  const firstName = msg.from.first_name || '';
  const lastName = msg.from.last_name || '';
  const fullName = `${firstName} ${lastName}`.trim();

  bot.sendMessage(
    chatId,
    `Salom ${fullName}! 👋\n\nIltimos, quyidagi ma'lumotlarni kiriting:\n\n` +
    `Formatda yuboring:\n` +
    `/register Yosh:25 Telefon:+998901234567 QoshimchaTelefon:+998909876543`
  );
});

bot.onText(/\/register (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const username = msg.from.username || 'Unknown';
  const firstName = msg.from.first_name || '';
  const lastName = msg.from.last_name || '';
  const fullName = `${firstName} ${lastName}`.trim();
  
  const input = match[1];
  
  try {
    // Parse qilingan ma'lumotlar
    const ageMatch = input.match(/Yosh:(\d+)/i);
    const phoneMatch = input.match(/Telefon:(\+?\d+)/i);
    const extraPhoneMatch = input.match(/QoshimchaTelefon:(\+?\d+)/i);
    
    const age = ageMatch ? ageMatch[1] : '-';
    const phone = phoneMatch ? phoneMatch[1] : '-';
    const extraPhone = extraPhoneMatch ? extraPhoneMatch[1] : '-';
    
    // Ma'lumotlarni saqlash
    users[chatId] = {
      telegramId: chatId,
      username: username,
      name: fullName,
      age: age,
      phone: phone,
      extraPhone: extraPhone,
      position: 'Mid', // Default
      nationality: '-',
      games: 0,
      won: 0,
      lost: 0
    };
    
    bot.sendMessage(
      chatId,
      `✅ Ma'lumotlaringiz muvaffaqiyatli saqlandi!\n\n` +
      `Ism: ${fullName}\n` +
      `Username: @${username}\n` +
      `Yosh: ${age}\n` +
      `Telefon: ${phone}\n` +
      `Qo'shimcha Telefon: ${extraPhone}\n\n` +
      `Endi web saytga kirishingiz mumkin!`
    );
  } catch (error) {
    bot.sendMessage(
      chatId,
      `❌ Xatolik yuz berdi. Iltimos, to'g'ri formatda yuboring:\n` +
      `/register Yosh:25 Telefon:+998901234567 QoshimchaTelefon:+998909876543`
    );
  }
});

// API endpoints
app.get('/api/user/:telegramId', (req, res) => {
  const { telegramId } = req.params;
  const user = users[telegramId];
  
  if (user) {
    res.json({ success: true, user });
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});

app.get('/api/users', (req, res) => {
  res.json({ success: true, users: Object.values(users) });
});

app.put('/api/user/:telegramId', (req, res) => {
  const { telegramId } = req.params;
  const updates = req.body;
  
  if (users[telegramId]) {
    users[telegramId] = { ...users[telegramId], ...updates };
    res.json({ success: true, user: users[telegramId] });
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Telegram bot is running...');
});