const mongoose = require('mongoose');

const slowmodeSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  channelId: { type: String, required: true },
  commandName: { type: String, required: true },
  cooldownExpiresAt: { type: Date, required: true },
});

module.exports = mongoose.model('Slowmode', slowmodeSchema);
