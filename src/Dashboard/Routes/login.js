const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login', { user: req.user });
});

router.get('/discord', passport.authenticate('discord'));

router.get(
  '/discord/callback',
  passport.authenticate('discord', { failureRedirect: '/auth/login' }),
  (req, res) => {
    res.redirect('/dashboard');
  },
);

module.exports = router;
