const { EmbedBuilder } = require('discord.js');

class Command {
  constructor() {
    this.name = 'ping';
    this.description = "To see the bot's latency.";
    this.cooldown = 10;
  }

  async execute(bot, interaction) {
    const latency = Date.now() - interaction.createdTimestamp;

    const pingEmbed = new EmbedBuilder()
      .setColor(bot.config.embedColor)
      .setDescription(`Pong! \`${latency}\` ms.`);

    await interaction.editReply({ embeds: [pingEmbed] });
  }
}

module.exports = Command;
