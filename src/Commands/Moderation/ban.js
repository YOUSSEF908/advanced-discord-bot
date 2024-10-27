const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

class Command {
  constructor() {
    this.name = 'ban';
    this.description = 'To ban someone from the server.';
    this.cooldown = 10;
    this.options = [
      {
        name: 'user',
        type: 6,
        description: 'The user to ban',
        required: true,
      },
      {
        name: 'reason',
        type: 3,
        description: 'Reason for the ban',
        required: false,
      },
    ];
  }

  async execute(bot, interaction) {
    if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers)) {
      return interaction.reply({
        content: 'You do not have permission to ban members.',
        ephemeral: true,
      });
    }

    const userToBan = interaction.options.getUser('user');
    const reason =
      interaction.options.getString('reason') || 'No reason provided';

    if (!userToBan) {
      return interaction.reply({
        content: 'Please specify a user to ban.',
        ephemeral: true,
      });
    }

    const memberToBan = await interaction.guild.members
      .fetch(userToBan.id)
      .catch(() => null);
    if (!memberToBan) {
      return interaction.reply({
        content: 'User not found in the server.',
        ephemeral: true,
      });
    }

    try {
      await memberToBan.ban({
        reason: `Banned by ${interaction.user.tag}: ${reason}`,
      });
      const embed = new EmbedBuilder()
        .setColor(bot.config.embedColor)
        .setTitle('User Banned')
        .setDescription(`Successfully banned ${userToBan.tag}`)
        .addFields({ name: 'Reason', value: reason });
      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      return interaction.reply({
        content: 'There was an error trying to ban this user.',
        ephemeral: true,
      });
    }
  }
}

module.exports = Command;
