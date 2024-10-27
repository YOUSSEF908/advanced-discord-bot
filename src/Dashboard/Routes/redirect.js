const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get(
  '/redirect',
  passport.authenticate('discord', { failureRedirect: '/auth/login' }),
  (req, res) => {
    res.redirect('/');
  },
);

module.exports = router;
