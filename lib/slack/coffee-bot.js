const bot = require('../../config/bot-config')

function groupMessage(slackIds) {
  bot.conversations.open({token: process.env.BOT_TOKEN, users: slackIds})
    .then(
      (res) => {
        const channelId = res.channel.id;
        bot.chat.postMessage({
          token: process.env.BOT_TOKEN,
          channel: channelId,
          text: 'Coffee\'s up!'
        });
      }
    ).catch(console.log);
}

module.exports = { groupMessage };