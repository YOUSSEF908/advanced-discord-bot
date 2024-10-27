const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
} = require('discord.js');
const mongoose = require('mongoose');
const antiCrash = require('./src/Structure/Utils/AntiCrash');

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

bot.config = require('./config');
bot.commands = new Collection();
antiCrash(bot);

require('./src/Structure/Handler/Event')(bot);
require('./src/Structure/Handler/Command')(bot);
require('./src/dashboard/server.js');

mongoose
  .connect(bot.config.mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

bot.login(bot.config.token);

module.exports = bot;
