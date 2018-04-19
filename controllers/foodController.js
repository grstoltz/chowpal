const models = require('../models');

const db = models.db;

// Display list of all foods.
// exports.findAll = function (req, res) {
//   console.log(req.isAuthenticated());
//   console.log('In FindAll');
//   db.Food.findAll().then((result) => {
//     res.send(result);
//   });
// };

// Handle item update on Update.

// Display detail page for a specific food.
exports.findAll = function (req, res) {
  db.Food.findAll({
    where: {
      user_id: req.query.id,
    },
  }).then((result) => {
    res.send(result);
  });
};

// Handle food create on POST.
exports.createOne = function (req, res) {
  db.Food.create({
    UPC: req.body.UPC,
    user_id: req.body.user_id,
    name: req.body.name,
    brand: req.body.brand,
    purchase_date: new Date(),
  }).then(result => res.send(result));
};

// Display food delete form on DELETE.
exports.deleteOne = function (req, res) {
  db.Food.destroy({
    where: {
      id: req.query.id,
    },
  }).then((result) => {
    res.json(result);
  }).catch(err => console.log(err));
};

// Handle food update on Update.
exports.findOneAndUpdate = function (req, res) {
  db.Food.update(
    req.body,
    {
      where: {
        id: req.body.id,
      },
    },
  ).then((results) => {
    res.send(results);
  });
};
