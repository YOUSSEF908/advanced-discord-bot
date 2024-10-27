const express = require('express');
const axios = require('axios');
const router = express.Router();
const { ensureAuthenticated } = require('../Middleware/auth');

router.get('/', ensureAuthenticated, async (req, res) => {
  try {
    const guildsResponse = await axios.get(
      'https://discord.com/api/v10/users/@me/guilds',
      {
        headers: { Authorization: `Bearer ${req.user.accessToken}` },
      },
    );

    const adminGuilds = guildsResponse.data.filter(
      (g) => (g.permissions & 0x8) === 0x8,
    );
    res.render('dashboard', { user: req.user, guilds: adminGuilds });
  } catch (error) {
    console.error(
      'Failed to fetch guilds:',
      error.response ? error.response.data : error.message,
    );
    res.redirect('/auth/login');
  }
});

module.exports = router;
