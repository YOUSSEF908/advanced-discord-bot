function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated() && req.user && req.user.accessToken) {
    return next();
  }
  res.redirect('/auth/login');
}

module.exports = { ensureAuthenticated };
