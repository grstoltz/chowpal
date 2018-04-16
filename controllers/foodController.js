const models = require('../models');
<<<<<<< HEAD

const db = models.db;

// // Display list of all foods.
=======

const db = models.db;

// Display list of all foods.
>>>>>>> cedd314753cc9a55c621c0b65faaa207ce1fdb1b
exports.findAll = function (req, res) {
  console.log(req.isAuthenticated());
  db.Food.findAll().then((result) => {
    res.send(result);
  });
<<<<<<< HEAD
};

// Display detail page for a specific food.
exports.findUserFood = function (req, res) {
  db.Food.findOne({
    include: [ {
      model: db.User,
      where: { user_id: req.params.id },
    } ],
  }).then((result) => {
    res.send(result);
  });
=======
>>>>>>> cedd314753cc9a55c621c0b65faaa207ce1fdb1b
};

// Display detail page for a specific food.
exports.findOne = function (req, res) {
  db.Food.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send(result);
  });
};

// Handle food create on POST.
exports.createOne = function (req, res) {
  db.Food.findOrCreate({
    where: {
      UPC: req.body.UPC,
    },
    defaults: {
      name: req.body.product_name,
      UPC: req.body.UPC,
      product_id: req.body.product_id,
    },
  }).spread((item, created) => {
    (created ?
      res.send({ created }) :
      res.send(item.get({ plain: false }))
    );
  });
};

// Display food delete form on DELETE.
exports.deleteOne = function (req, res) {
  db.Food.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send(result);
  });
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
