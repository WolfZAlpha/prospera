const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://www.desktop.prospera.defi/auth/twitter/callback"
  },
  async (token, tokenSecret, profile, done) => {
    try {
      let user = await User.findOne({ twitterId: profile.id });

      if (!user) {
        user = new User({
          twitterId: profile.id,
          username: profile.username,
          email: profile.emails ? profile.emails[0].value : '' // Sometimes Twitter doesn't return an email, handle this case appropriately
        });
        await user.save();
      }

      done(null, user);
    } catch (err) {
      done(err, null);
    }
  }
));

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

module.exports = passport;
