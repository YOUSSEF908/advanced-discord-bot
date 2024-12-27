const express = require('express');
const router = express.Router();

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid'); 
      res.redirect('/auth/login');
    });
  });
});

module.exports = router;
