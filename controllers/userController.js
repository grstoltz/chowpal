const models = require('../models');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const db = models.db;
// var Op = models.Op


exports.login = function (req, res) {
  passport.use(new GoogleStrategy(
    {
      clientID: process.envGOOGLE_CLIENT_ID,
      clientSecret: process.envGOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    ((accessToken, refreshToken, profile, cb) => {
      db.User.findOrCreate({ googleId: profile.id }, (err, user) => cb(err, user));
    }),
  ));
};

// Display list of all items.
exports.findAll = function (req, res) {
  res.send('NOT IMPLEMENTED: item list');
  db.User.createOne({
    user_id: req.body.user.id,
  }).then(result => res.send(result))
    .catch(err => console.log(err));
};

// Display detail page for a specific item.
exports.findOne = function (req, res) {
  res.send(`NOT IMPLEMENTED: item detail: ${req.params.id}`);
};

// Handle item create on POST.
exports.createOne = function (req, res) {
  res.send('NOT IMPLEMENTED: item create POST');
};

// Display item delete form on DELETE.
exports.deleteOne = function (req, res) {
  res.send(`NOT IMPLEMENTED: item delete on DELETE ${req.params.id}`);
};

// Handle item update on Update.
exports.findOneAndUpdate = function (req, res) {
  res.send(`NOT IMPLEMENTED: item update ${req.params.id}`);
};
