const models = require('../models');

const db = models.db;

exports.callback = function (req, res) {
  db.User.findOrCreate({
    where: {
      user_id: req.user.id,
    },
  }).then((result) => {
    console.log(result);
    res.redirect('/');
  });
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
