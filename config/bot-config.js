const TOKEN = process.env.BOT_TOKEN;
const Slack = require('slack');
const bot = new Slack({TOKEN});

const slackIds = ['123', '456', '789'].join(',');
bot.conversations.open({token: TOKEN, users: slackIds, return_im: true})
  .then(
    (res) => {
      const channelId = res.channel.id;
      bot.chat.postMessage({token: TOKEN, channel: channelId, text: 'Hello everyone!'});
    }
  ).catch(console.log);
