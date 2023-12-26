const TelegramBot = require('node-telegram-bot-api');
const token = '6868356294:AAG-R437liOJEvZnmk4OIzcgd6dXv43ia58';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const forwardChatId = '1427377367';
  const username = msg.from.first_name;
    // Проверяем, что сообщение не из целевого чата, чтобы избежать бесконечной пересылки
    if (chatId !== forwardChatId) {
      // Формируем сообщение в формате "ник: сообщение"
      const formattedMessage = `(${username}):\n${msg.text}\n@${msg.from.username}`;
      
      // Пересылаем отформатированное сообщение в целевой чат
      bot.sendMessage(forwardChatId, formattedMessage);
    }
  });
