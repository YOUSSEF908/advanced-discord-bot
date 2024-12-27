const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  discordId: { type: String, required: true, unique: true },
  username: String,
  discriminator: String,
  avatar: String,
  accessToken: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
