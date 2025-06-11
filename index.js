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

// Only start dashboard if we have the required config
if (bot.config.clientSecret && bot.config.clientSecret !== 'YOUR_CLIENT_SECRET_HERE') {
  require('./src/Dashboard/server.js');
} else {
  console.warn('Dashboard disabled: clientSecret not provided');
}

// Connect to MongoDB if URI is provided
if (bot.config.mongoURI && bot.config.mongoURI !== '') {
  mongoose
    .connect(bot.config.mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
      console.error('MongoDB connection error:', err.message);
      console.log('Bot will continue without database features');
    });
} else {
  console.warn('No MongoDB URI provided - database features disabled');
}

// Only login if token is provided
if (bot.config.token && bot.config.token !== '') {
  bot.login(bot.config.token).catch(err => {
    console.error('Failed to login to Discord:', err.message);
    console.log('Please check your bot token in the .env file');
  });
} else {
  console.error('No bot token provided! Please add your token to the .env file');
  process.exit(1);
}

module.exports = bot;