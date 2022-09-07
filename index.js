require('dotenv').config();

const telegram = require('node-telegram-bot-api');

const bot = new telegram(process.env.TELEGRAM_TOKEN);

const getRandomTip = async () => {
  var data = require('./info.json');
  var obj = JSON.parse(JSON.stringify(data));
  var randomNumber = Math.floor(Math.random() * 68);
  return `Tip ${randomNumber} : ${obj.info[randomNumber].name}
${obj.info[randomNumber].text}`;
};

const main = async () => {
  const randomTip = await getRandomTip();
  bot.sendMessage(process.env.TELEGRAM_TOKEN, randomTip);
  console.log(randomTip);
};

main();
