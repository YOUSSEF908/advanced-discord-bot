const fs = require('fs');

module.exports = async (bot) => {
  const eventFiles = fs
    .readdirSync('./src/Events/')
    .filter((f) => f.endsWith('.js'));
  for (const file of eventFiles) {
    const event = require(`../../../src/Events/${file}`);

    console.log(`Loaded event : ${file.split('.')[0]}`);
    bot.on(event.name, (...args) => event.execute(...args, bot));
  }

  const eventSubFolders = fs
    .readdirSync('./src/Events/')
    .filter((f) => !f.endsWith('.js'));
  eventSubFolders.forEach((folder) => {
    const commandFiles = fs
      .readdirSync(`./src/Events/${folder}/`)
      .filter((f) => f.endsWith('.js'));
    for (const file of commandFiles) {
      const event = require(`../../../src/Events/${folder}/${file}`);

      console.log(
        `The event ${file.split('.')[0]} has been loaded successfully from : ${folder}`,
      );
      bot.on(event.name, (...args) => event.execute(...args, bot));
    }
  });
};
