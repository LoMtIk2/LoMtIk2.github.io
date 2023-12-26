let tg = window.Telegram.WebApp;
tg.expand()

function displayTime() {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var timeString = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      document.getElementById('time').innerText = timeString;
    }

    // Update time every second
    setInterval(displayTime, 1000);

    // Initial call to display time immediately
    displayTime();
    function updateDate() {
    const now = new Date();
    const dateElement = document.getElementById('date');
    const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    dateElement.textContent = `${day} ${month} ${year}`;
    }
    
    updateDate();

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
