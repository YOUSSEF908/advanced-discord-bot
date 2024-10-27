const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  execute(bot) {
    const commandsData = bot.commands.map(({ execute, ...data }) => data);
    bot.application.commands
      .set(commandsData)
      .then(() => console.log('Commands registered successfully.'))
      .catch(console.error);
  },
};
