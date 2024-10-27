const { ActivityType, Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  execute(bot) {
    console.log(
      `${bot.user.username} is connected!\n` +
        `-> The bot is used by ${bot.guilds.cache.size} servers !`,
    );

    bot.user.setPresence({
      activities: [{ name: bot.config.activity, type: ActivityType.Watching }],
      status: 'online',
    });
  },
};
