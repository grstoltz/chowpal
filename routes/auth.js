const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const userController = require('../controllers/userController');

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    if (profile) {
      const user = profile;
      console.log(user);
      return done(null, user);
    }
    return done(null, false);
  },
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

router.route('/login')
  .get(passport.authenticate('google', { scope: [ 'https://www.googleapis.com/auth/plus.login' ] }));

router.route('/google/callback')
  .get(passport.authenticate('google', { failureRedirect: '/' }), userController.callback);

router.route('/logout')
  .get(userController.logout);

module.exports = router;
