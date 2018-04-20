const models = require('../models');

const db = models.db;

exports.callback = function (req, res) {
  db.User.findOrCreate({
    where: {
      google_id: req.user.id,
    },
    defaults: {
      google_id: req.user.id,
      username: req.user.displayName,
    },
  }).then((result) => {
    console.log(result);
    res.redirect('/');
  });
};

exports.logout = function (req, res) {
  req.logout();
  res.redirect('/');
};

exports.findUser = function (req, res) {
  res.send(req.user);
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
