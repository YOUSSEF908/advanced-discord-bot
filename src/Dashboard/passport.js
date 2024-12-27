const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const User = require('../Structure/Schemes/User');
const { clientId, clientSecret, callbackURL } = require('../../config');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new DiscordStrategy(
    {
      clientID: clientId,
      clientSecret: clientSecret,
      callbackURL: callbackURL,
      scope: ['identify', 'guilds'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ discordId: profile.id });

        if (existingUser) {
          if (existingUser.avatar !== profile.avatar) {
            existingUser.avatar = profile.avatar;
            await existingUser.save();
          }
          return done(null, existingUser);
        }

        const newUser = await new User({
          discordId: profile.id,
          username: profile.username,
          discriminator: profile.discriminator,
          avatar: profile.avatar,
          accessToken,
        }).save();

        done(null, newUser);
      } catch (error) {
        done(error);
      }
    },
  ),
);

module.exports = passport;
