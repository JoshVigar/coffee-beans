const TOKEN = process.env.BOT_TOKEN;
const Slack = require('slack');
const bot = new Slack({TOKEN});

module.exports = bot