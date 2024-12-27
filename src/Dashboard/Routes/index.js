const express = require('express');
const axios = require('axios');
const router = express.Router();
const { ensureAuthenticated } = require('../Middleware/auth');
const { clientId } = require('../../../config');

router.get('/', ensureAuthenticated, async (req, res) => {
  try {
    const guildsResponse = await axios.get(
      'https://discord.com/api/v10/users/@me/guilds',
      {
        headers: { Authorization: `Bearer ${req.user.accessToken}` },
      }
    );

    const adminGuilds = guildsResponse.data.filter((g) => (g.permissions & 0x8) === 0x8);

    const guildsWithInvite = adminGuilds.map(guild => ({
      ...guild,
      inviteURL: `https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=8&scope=bot&guild_id=${guild.id}`,
    }));

    res.render('dashboard', { user: req.user, guilds: guildsWithInvite });
  } catch (error) {
    if (error.response?.status === 401) {
      console.error('Access token expired or invalid. Re-authenticating...');
      req.logout((err) => {
        if (err) console.error(err);
        res.redirect('/auth/login');
      });
    } else {
      console.error('Failed to fetch guilds:', error.response?.data || error.message);
      res.redirect('/auth/login');
    }
  }
});

module.exports = router;
