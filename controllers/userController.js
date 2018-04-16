const models = require('../models');

const db = models.db;

exports.callback = function (req, res) {
  db.User.findOrCreate({
    where: {
      user_id: req.user.id,
    },
    defaults: {
      user_id: req.user.id,
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

// Display list of all items.
exports.findUser = function (req, res) {
  res.json(req.user);
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
