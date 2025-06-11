require('dotenv').config();

module.exports = {
  token: process.env.token || '',
  mongoURI: process.env.mongoURI || '',
  clientId: '1377741387033870377',
  clientSecret: process.env.clientSecret || '',
  callbackURL: 'http://localhost:3000/auth/redirect',
  activity: 'Made with ❤️ and discord.js',
  embedColor: 0x5865f2,
};