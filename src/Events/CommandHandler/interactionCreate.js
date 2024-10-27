const { Events, EmbedBuilder } = require('discord.js');
const Slowmode = require('../../Structure/Schemes/Slowmode');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction, bot) {
    if (!interaction.channel || !interaction.isCommand()) return;

    const command = bot.commands.get(interaction.commandName);
    if (!command) return;

    try {
      if (!interaction.deferred && !interaction.replied) {
        await interaction.deferReply({ ephemeral: true });
      }

      const slowmodeData = await Slowmode.findOne({
        userId: interaction.user.id,
        channelId: interaction.channel.id,
        commandName: interaction.commandName,
      });

      if (slowmodeData && slowmodeData.cooldownExpiresAt > new Date()) {
        const remainingTime = Math.ceil(
          (slowmodeData.cooldownExpiresAt - new Date()) / 1000,
        );

        const cooldownEmbed = new EmbedBuilder()
          .setTitle('Cooldown')
          .setDescription(
            `You are on cooldown for **${interaction.commandName}**! Please wait ${remainingTime} second(s).`,
          )
          .setColor(bot.config.embedColor);

        return interaction.editReply({ embeds: [cooldownEmbed] });
      }

      await command.execute(bot, interaction);

      const cooldown = command.cooldown || 10;
      await Slowmode.findOneAndUpdate(
        {
          userId: interaction.user.id,
          channelId: interaction.channel.id,
          commandName: interaction.commandName,
        },
        { cooldownExpiresAt: new Date(Date.now() + cooldown * 1000) },
        { upsert: true, new: true },
      );
    } catch (error) {
      console.error('Error in interaction handler:', error);

      if (interaction.replied || interaction.deferred) {
        const errorEmbed = new EmbedBuilder()
          .setTitle('Error')
          .setDescription(
            'There was an error processing your command. Please try again!',
          )
          .setColor(bot.config.embedColor);

        return interaction.editReply({ embeds: [errorEmbed] });
      }
    }
  },
};
